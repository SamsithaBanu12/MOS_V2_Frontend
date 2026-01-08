export default function TransmissionTabs({
  active,
  onChange,
  activeTabNames,
  useLocalTime,
  setUseLocalTime,
}) {
  return (
    <div className="th-tabs-wrap">
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
      <label className="th-label">
        <input
          type="checkbox"
          checked={useLocalTime}
          onChange={(e) => setUseLocalTime(e.target.checked)}
        />
        Local time
      </label>
    </div>
  );
}
