export default function TransmissionTabs({ active, onChange, activeTabNames }) {
  return (
    <div className="th-tabs">
      <button
        className={`th-tab ${active === "CMD" ? "active" : ""}`}
        onClick={() => {
          onChange("CMD");
          activeTabNames("CMD");
        }}
      >
        Commands
      </button>
      <button
        className={`th-tab ${active === "TLM" ? "active" : ""}`}
        onClick={() => {
          onChange("TLM");
          activeTabNames("TLM");
        }}
      >
        Telemetry
      </button>
    </div>
  );
}