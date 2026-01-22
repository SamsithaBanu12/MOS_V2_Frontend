import { useEffect, useState } from "react";
import TransmissionHistory from "../components/TransmissionHistory/TransmissionHistory";
import ErrorBoundary from "../common/ErrorBoundary";
import ErrorDisplay from "../common/ErrorDisplay";
import "./TransmissionHistoryPage.css";

export default function TransmissionHistoryPage() {
  const [transmissionData, setTransmissionData] = useState([]);
  const [err, setErr] = useState();
  const [refreshBtn, setRefreshBtn] = useState(false);
  const [loading, setLoading] = useState(false); // 👈 NEW

  useEffect(() => {
    async function loadPackets() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8012/packets?limit=100");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setTransmissionData(data);
        setErr(null);
      } catch (err) {
        console.error("API error:", err);
        setErr(err);
      } finally {
        setLoading(false);
      }
    }

    loadPackets();
  }, [refreshBtn]);

  return err ? (
    <ErrorDisplay
      title="Fetch Error"
      message="We couldn't load the transmission history from the server."
      onAction={() => setRefreshBtn((prev) => !prev)}
      actionLabel="Retry Fetch"
      error={err}
      loading={loading}
    />
  ) : (
    <ErrorBoundary
      title="Transmission History Error"
      message="We encountered an unexpected error while rendering the Transmission History."
    >
      {loading && (
        <div className="reload-overlay">
          <div className="refresh-icon">⟳</div>
        </div>
      )}

      <TransmissionHistory
        transmissionData={transmissionData}
        onRefresh={() => setRefreshBtn((prev) => !prev)}
      />
    </ErrorBoundary>
  );
}
