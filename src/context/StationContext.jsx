import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { getStatus } from "../utils/api/api";

const StationContext = createContext(null);

export function StationProvider({ children }) {
  const [stationId, setStationId] = useState(() =>
    localStorage.getItem("stationId")
  );
  const [stationMeta, setStationMeta] = useState(() => {
    const saved = localStorage.getItem("stationMeta");
    return saved ? JSON.parse(saved) : null;
  });
  const [connected, setConnected] = useState(false);
  const [status, setStatus] = useState({
    a_connected: false,
    b_connected: false,
    counters: {},
  });

  useEffect(() => {
    if (stationId) {
      localStorage.setItem("stationId", stationId);
    }

    if (stationMeta) {
      localStorage.setItem(
        "stationMeta",
        JSON.stringify(stationMeta)
      );
    }
  }, [stationId, stationMeta]);

  useEffect(() => {
    if (!stationId) {
      setConnected(false);
      setStatus({ a_connected: false, b_connected: false, counters: {} });
      return;
    }

    let intervalId = null;

    const tick = async () => {
      try {
        const s = await getStatus(stationId);
        setStatus(s);
        setConnected(Boolean(s?.a_connected && s?.b_connected));
      } catch {
        setConnected(false);
      }
    };

    tick();
    intervalId = setInterval(tick, 5000);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [stationId]);

  const refreshStatus = useCallback(async () => {
    if (!stationId) return;
    try {
      const s = await getStatus(stationId);
      setStatus(s);
      setConnected(Boolean(s?.a_connected && s?.b_connected));
    } catch {
      setConnected(false);
    }
  }, [stationId]);

  return (
    <StationContext.Provider
      value={{
        stationId,
        setStationId,
        stationMeta,
        setStationMeta,
        connected,
        setConnected,
        status,
        refreshStatus,
      }}
    >
      {children}
    </StationContext.Provider>
  );
}

export function useStation() {
  const ctx = useContext(StationContext);
  if (!ctx) {
    throw new Error("useStation must be used inside StationProvider");
  }
  return ctx;
}
