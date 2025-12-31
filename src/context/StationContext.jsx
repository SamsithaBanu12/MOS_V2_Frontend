import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { getStatus } from "../utils/api/api";

const StationContext = createContext(null);

export function StationProvider({ children }) {
  // 🔁 restore station from previous session
  const [stationId, setStationId] = useState(() =>
    localStorage.getItem("stationId")
  );
  const [stationMeta, setStationMeta] = useState(() => {
    const saved = localStorage.getItem("stationMeta");
    return saved ? JSON.parse(saved) : null;
  });
  const [connected, setConnected] = useState(false);

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


  const checkConnection = async () => {
    try {
      if (!stationId) return false;

      const status = await getStatus(stationId);
      return Boolean(status?.a_connected && status?.b_connected);
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (!stationId) return;

    checkConnection().then(setConnected);
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
