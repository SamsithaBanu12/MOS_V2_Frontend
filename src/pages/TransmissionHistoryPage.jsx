import { useEffect, useState } from "react";
import TransmissionHistory from "../components/TransmissionHistory/TransmissionHistory";
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
        const data = await res.json();
        setTransmissionData(data);
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
    <div>Fetching error</div>
  ) : (
    <>
      {loading && (
        <div className="reload-overlay">
          <div className="refresh-icon">⟳</div>
        </div>
      )}

      <TransmissionHistory
        transmissionData={transmissionData}
        onRefresh={() => setRefreshBtn((prev) => !prev)}
      />
    </>
  );
}
