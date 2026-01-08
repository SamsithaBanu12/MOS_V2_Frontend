// TransmissionHistory.jsx
import { useMemo, useState } from "react";
import "./TransmissionHistory.space.css";
import { getAllCmdsData, getAllTlmsData } from "../../utils/utils";
import { Parameters } from "../../constants/contants";
import TransmissionTabs from "./TransmissionTabs";
import TransmissionHistoryList from "./TransmissionHistoryList";
import TransmissionHistoryDetails from "./TransmissionHistoryDetails";

export default function TransmissionHistory({ transmissionData, onRefresh }) {
  const [activeTab, setActiveTab] = useState("CMD");
  const [filter, setFilter] = useState("");
  const [useLocalTime, setUseLocalTime] = useState(true);
  const [commandData, setCommandData] = useState(null);
  const [isRowSelected, setIsRowSelected] = useState(false);
  const [activeTabNames, setActiveTabNames] = useState("");
  const [clearedTab, setClearedTab] = useState(null);

  const cmdsData = getAllCmdsData(transmissionData);
  const tlmsData = getAllTlmsData(transmissionData);

  const stripHeaderParams = (rows) => {
    const removeKeys = new Set(Parameters);

    return (rows || []).map((row) => {
      const params = Object.fromEntries(
        Object.entries(row).filter(([key]) => !removeKeys.has(key))
      );

      return {
        ...row,
        params,
      };
    });
  };

  const cmds = useMemo(
    () => stripHeaderParams(Array.isArray(cmdsData) ? cmdsData : []),
    [cmdsData]
  );

  const tlms = useMemo(
    () => stripHeaderParams(Array.isArray(tlmsData) ? tlmsData : []),
    [tlmsData]
  );

  // Fixed filter function
  const filterFn = (row, keys) => {
    const f = filter.trim().toLowerCase();
    if (!f) return true;

    return keys.some((key) => {
      const value = row?.[key];
      if (value == null) return false;
      return String(value).toLowerCase().includes(f);
    });
  };

  const filteredCmds = useMemo(() => {
    if (clearedTab === "CMD") return [];
    return cmds.filter((r) => filterFn(r, ["__packet"]));
  }, [cmds, filter, clearedTab]);

  const filteredTlms = useMemo(() => {
    if (clearedTab === "TLM") return [];
    return tlms.filter((r) => filterFn(r, ["__packet"]));
  }, [tlms, filter, clearedTab]);

  const handleRowClick = (row) => {
    setCommandData(row);
    setIsRowSelected(true);
  };

  return (
    <div className="th-wrapper">
      <div className="th-card">
        <div className="th-card-head">
          <div className="th-title">Transmission History</div>
          <div className="th-tag">
            {activeTab === "CMD"
              ? `${cmds.length} commands`
              : `${tlms.length} telemetry`}
          </div>
        </div>

        <TransmissionTabs
          active={activeTab}
          onChange={(val) => {
            setActiveTab(val);
            setClearedTab(null); // restore data
            setCommandData(null);
            setIsRowSelected(false);
          }}
          activeTabNames={setActiveTabNames}
          useLocalTime={useLocalTime}
          setUseLocalTime={setUseLocalTime}
        />

        <div className="th-controls">
          <input
            className="th-input"
            placeholder={
              activeTab === "CMD"
                ? "Filter by packet name…"
                : "Filter by packet name…"
            }
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setCommandData(null);
              setIsRowSelected(false);
            }}
          />
          <button
            className="th-refresh-btn"
            onClick={() => {
              onRefresh();
              setClearedTab(null);
              setFilter("");
              setCommandData(null);
              setIsRowSelected(false);
            }}
          >
            Refresh
          </button>

          <button
            className="th-clear-btn"
            onClick={() => {
              setClearedTab(activeTab);
              setFilter("");
              setCommandData(null);
              setIsRowSelected(false);
            }}
          >
            Clear
          </button>
        </div>
        <TransmissionHistoryList
          activeTab={activeTab}
          filteredCmds={filteredCmds}
          filteredTlms={filteredTlms}
          handleRowClick={handleRowClick}
          useLocalTime={useLocalTime}
        />
      </div>
      {isRowSelected && commandData && (
        <TransmissionHistoryDetails
          activeTab={activeTab}
          setIsRowSelected={setIsRowSelected}
          commandData={commandData}
        />
      )}
    </div>
  );
}
