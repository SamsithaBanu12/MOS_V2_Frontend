// TransmissionHistory.jsx
import { useMemo, useState } from "react";
import "./TransmissionHistory.space.css";
import {
  downloadJson,
  filterCommand,
  findHealthCommand,
  getAllCmdsData,
  getAllTlmsData,
  getFilteredCommands,
} from "../../utils/utils";
import { Parameters } from "../../constants/contants";
import TransmissionTabs from "./TransmissionTabs";
import TransmissionHistoryList from "./TransmissionHistoryList";
import TransmissionHistoryDetails from "./TransmissionHistoryDetails";
import Select from "react-select";
import { TimeLineFilter } from "../../data";
import { timelineSelectStyles } from "../../customStyles/customStyle";
import { commandTelemetryEmulator } from "../../constants/commandsData";

export default function TransmissionHistory({ transmissionData, onRefresh }) {
  const [activeTab, setActiveTab] = useState("CMD");
  const [filter, setFilter] = useState("");
  const [useLocalTime, setUseLocalTime] = useState(true);
  const [commandData, setCommandData] = useState(null);
  const [isRowSelected, setIsRowSelected] = useState(false);
  const [activeTabNames, setActiveTabNames] = useState("");
  const [clearedTab, setClearedTab] = useState(null);
  const [timeLineFilters, setTimeLineFilter] = useState("all");

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
    let filteredCommands = cmds.filter((r) => filterFn(r, ["__packet"]));
    if (timeLineFilters === "all") {
      return filteredCommands;
    } else if (timeLineFilters === "10 mins ago") {
      return getFilteredCommands(filteredCommands, 10);
    } else if (timeLineFilters === "20 mins ago") {
      return getFilteredCommands(filteredCommands, 20);
    } else if (timeLineFilters === "30 mins ago") {
      return getFilteredCommands(filteredCommands, 30);
    } else if (timeLineFilters === "1 hour ago") {
      return getFilteredCommands(filteredCommands, 60);
    } else if (timeLineFilters === "2 hours ago") {
      return getFilteredCommands(filteredCommands, 120);
    }
  }, [cmds, filter, clearedTab, timeLineFilters]);

  const filteredTlms = useMemo(() => {
    if (clearedTab === "TLM") return [];
    let filteredTelemetry = tlms.filter((r) => filterFn(r, ["__packet"]));
    if (timeLineFilters === "all") {
      return filteredTelemetry;
    } else if (timeLineFilters === "10 mins ago") {
      return getFilteredCommands(filteredTelemetry, 10);
    } else if (timeLineFilters === "20 mins ago") {
      return getFilteredCommands(filteredTelemetry, 20);
    } else if (timeLineFilters === "30 mins ago") {
      return getFilteredCommands(filteredTelemetry, 30);
    } else if (timeLineFilters === "1 hour ago") {
      return getFilteredCommands(filteredTelemetry, 60);
    } else if (timeLineFilters === "2 hours ago") {
      return getFilteredCommands(filteredTelemetry, 120);
    }
  }, [tlms, filter, clearedTab, timeLineFilters]);

  const handleRowClick = (row) => {
    setCommandData(row);
    setIsRowSelected(true);
  };

  const timelineFilterOption = useMemo(() => {
    return TimeLineFilter.find((opt) => opt?.label === timeLineFilters) || null;
  }, [timeLineFilters, TimeLineFilter]);

  const finalFilteredCommands = filteredCmds.map((pkt) =>
    filterCommand(pkt, commandTelemetryEmulator, "CMD")
  );

  const finalFilteredTelemetries = filteredTlms.map((pkt) => {
    if (findHealthCommand(pkt?.__packet) === "Health") {
      return pkt;
    }

    return filterCommand(pkt, commandTelemetryEmulator, "TLM");
  });

  const handleDownloadAll = () => {
    const payload = {
      commands: finalFilteredCommands,
      telemetry: finalFilteredTelemetries,
      downloadedAtUtc: new Date().toISOString(),
    };

    downloadJson(payload, "commands_transmissions_history.json");
  };

  return (
    <div className="th-wrapper">
      <div className="th-card-wrapper">
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
            <Select
              classNamePrefix="th-command-select"
              options={TimeLineFilter}
              value={timelineFilterOption}
              onChange={(option) => setTimeLineFilter(option?.label ?? "")}
              isSearchable
              styles={timelineSelectStyles}
            />
          </div>
          <TransmissionHistoryList
            activeTab={activeTab}
            filteredCmds={filteredCmds}
            filteredTlms={filteredTlms}
            handleRowClick={handleRowClick}
            useLocalTime={useLocalTime}
          />
        </div>
        <div className="th-download-wrap">
          <button className="th-download-btn" onClick={handleDownloadAll}>
            Download
          </button>
        </div>
      </div>
      {isRowSelected && commandData && (
        <TransmissionHistoryDetails
          activeTab={activeTab}
          setIsRowSelected={setIsRowSelected}
          commandData={commandData}
          isRowSelected={isRowSelected}
        />
      )}
    </div>
  );
}
