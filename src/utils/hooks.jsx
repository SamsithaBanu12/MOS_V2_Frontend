import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { getStatus } from "./api/api";
import { computeStamp, pickByAliases, mergeFromLogs, fetchBeacon } from "./utils";
import { BASE_CONNECTION } from "../constants/contants";

/**
 * @param {string|number|null|undefined} targetUtc
 *   - "YYYY-MM-DD HH:mm:ss" (UTC), or ISO-ish, or epoch seconds
 * Returns { display, done, secondsLeft }
 */

export function useGettingConnectionStatus(stationId, setStatus) {
  useEffect(() => {
    if (!stationId) return;

    let t = null;

    async function tick() {
      if (!stationId) return;
      try {
        const s = await getStatus(stationId);
        setStatus(s);
      } catch (e) {
      }
    }

    tick();
    t = setInterval(tick, 5000);

    return () => {
      if (t) clearInterval(t);
    };
  }, [stationId, setStatus]);
}

export function useHealthPoll(path) {
  const [values, setValues] = useState({});
  const [error, setError] = useState("");
  const [lastUpdatedMs, setLastUpdatedMs] = useState(null);
  const lastStampRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    async function tick() {
      try {
        const r = await fetch(`${BASE_CONNECTION}${path}`);
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const logs = await r.json();
        if (!Array.isArray(logs)) throw new Error("Expected array of log lines");

        const stamp = computeStamp(logs);
        if (stamp && stamp !== lastStampRef.current) {
          lastStampRef.current = stamp;
          setLastUpdatedMs(Date.now());
        }

        const merged = mergeFromLogs(logs);
        const next = {};
        for (const k of FIELD_ORDER) next[k] = pickByAliases(merged, k);
        if (!cancelled) setValues(next);
        setError("");
      } catch (e) {
        if (!cancelled) setError(String(e.message || e));
      }
    }

    tick();
    const h = setInterval(tick, 2000);
    return () => { cancelled = true; clearInterval(h); };
  }, [path]);

  const isStale = !lastUpdatedMs || Date.now() - lastUpdatedMs > STALE_MS;
  return { values, error, lastUpdatedMs, isStale };
}

export function useBeacon(pollMs = 1000) {
  const [b, setB] = useState({});
  const [err, setErr] = useState("");
  const [lastUpdatedMs, setLastUpdatedMs] = useState(null);
  const lastStampRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    const tick = async () => {
      try {
        const obj = await fetchBeacon();
        if (cancelled) return;
        setB(obj);

        const stamp = obj?.TIMESTAMP ?? obj?.EPS_RESETCOUNT;
        if (stamp !== lastStampRef.current) {
          lastStampRef.current = stamp;
          setLastUpdatedMs(Date.now());
        }
        setErr("");
      } catch (e) {
        if (!cancelled) setErr(String(e.message || e));
      }
    };

    tick();
    const h = setInterval(tick, pollMs);
    return () => { cancelled = true; clearInterval(h); };
  }, [pollMs]);

  return { b, error: err, lastUpdatedMs };
}

export function useSatelliteTrack(timePoints = 500, durationHours = 24) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_OD_API_URL || 'http://localhost:8030';
      const response = await fetch(
        `${apiUrl}/satellite/track?time_points=${timePoints}&duration_hours=${durationHours}`
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch satellite data");
    } finally {
      setLoading(false);
    }
  }, [timePoints, durationHours]);

  useEffect(() => {
    fetchData();

    // Auto-refresh every 30 seconds for mission control feel
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
