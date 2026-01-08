import { useEffect, useState } from "react";
import TransmissionHistory from "../components/TransmissionHistory/TransmissionHistory";

export default function TransmissionHistoryPage() {
  const [transmissionData, setTransmissionData] = useState([]);
  const [err, setErr] = useState();
  const [refreshBtn, setRefreshBtn] = useState(false);

  useEffect(() => {
    async function loadPackets() {
      try {
        const res = await fetch("http://localhost:8012/packets?limit=100");
        const data = await res.json();
        setTransmissionData(data);
      } catch (err) {
        console.error("API error:", err);
        setErr(err);
      }
    }
    loadPackets();
  }, [refreshBtn]);

  return err ? (
    <div>Fetching error</div>
  ) : (
    <TransmissionHistory
      transmissionData={transmissionData}
      onRefresh={() => setRefreshBtn((prev) => !prev)}
    />
  );
}
