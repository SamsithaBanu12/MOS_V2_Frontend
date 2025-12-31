// TransmissionHistory.jsx
import { useEffect, useMemo, useState } from "react";
import "./TransmissionHistory.space.css";
import { IoClose } from "react-icons/io5";
import {
  base64ToHex,
  findHealthCommand,
  getAllCmdsData,
  getAllTlmsData,
  getCommandName,
  getTcTmId,
  toUTCYmdHmsnn,
} from "../../utils/utils";
import { Parameters } from "../../constants/contants";
import TransmissionTabs from "./TransmissionTabs";
import TransmissionHistoryList from "./TransmissionHistoryList";
import TransmissionHistoryDetails from "./TransmissionHistoryDetails";

export default function TransmissionHistory({ transmissionData }) {
  const [activeTab, setActiveTab] = useState("CMD");
  const [filter, setFilter] = useState("");
  const [useLocalTime, setUseLocalTime] = useState(true);
  const [commandData, setCommandData] = useState(null);
  const [isRowSelected, setIsRowSelected] = useState(false);
  const [activeTabNames, setActiveTabNames] = useState("");

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
    return cmds.filter((r) => filterFn(r, ["__packet"]));
  }, [cmds, filter]);

  const filteredTlms = useMemo(() => {
    return tlms.filter((r) => filterFn(r, ["__packet"]));
  }, [tlms, filter]);

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
            setCommandData(null);
            setIsRowSelected(false);
          }}
          activeTabNames={setActiveTabNames}
        />

        {/* Controls ALWAYS visible, even if filter returns zero rows */}
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
          <label className="th-label">
            <input
              type="checkbox"
              checked={useLocalTime}
              onChange={(e) => setUseLocalTime(e.target.checked)}
            />
            Local time
          </label>
        </div>
        <TransmissionHistoryList
          activeTab={activeTab}
          filteredCmds={filteredCmds}
          filteredTlms={filteredTlms}
          handleRowClick={handleRowClick}
          useLocalTime={useLocalTime}
        />
      </div>

      {/* Details panel */}
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