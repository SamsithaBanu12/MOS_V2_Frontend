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
import { CommandsType, FilterTypes, TelemetryType, TimeLineFilter } from "../../data";
import { timelineSelectStyles } from "../../customStyles/customStyle";
import { commandTelemetryEmulator } from "../../constants/commandsData";
import { useSidebar } from "../../context/SidebarContext";

export default function TransmissionHistory({ transmissionData, onRefresh }) {
  const [activeTab, setActiveTab] = useState("CMD");
  const [filter, setFilter] = useState("");
  const [useLocalTime, setUseLocalTime] = useState(true);
  const [commandData, setCommandData] = useState(null);
  const [isRowSelected, setIsRowSelected] = useState(false);
  const [activeTabNames, setActiveTabNames] = useState("");
  const [clearedTab, setClearedTab] = useState(null);
  const [timeLineFilters, setTimeLineFilter] = useState("all");
  const [filterType, setFilterType] = useState("Time Range");
  const [telemetryType, setTelemetryType] = useState("Telemetry");
  const [commandType, setCommandType] = useState("Commands");
  const { collapsed } = useSidebar();

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
    if (filterType === "Time Range") {
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
    }
    else if (filterType === "Commands Type") {
      return filteredCommands.filter((pkt) => {
        const type = findHealthCommand(pkt?.__packet);
        if (commandType === "Commands") return type === "Cmd";
        if (commandType === "File Upload") return type === "File Upload";
        return true;
      });
    }
    return filteredCommands;
  }, [cmds, filter, clearedTab, timeLineFilters, filterType, commandType, activeTab]);

  const filteredTlms = useMemo(() => {
    if (clearedTab === "TLM") return [];
    let filteredTelemetry = tlms.filter((r) => filterFn(r, ["__packet"]));

    if (filterType === "Time Range") {
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
    } else if (filterType === "Telemetry Type") {
      return filteredTelemetry.filter((pkt) => {
        const type = findHealthCommand(pkt?.__packet);
        if (telemetryType === "Telemetry") return type === "Tlm";
        if (telemetryType === "Health") return type === "Health";
        if (telemetryType === "Beacon") return type === "Beacon";
        if (telemetryType === "File Upload") return type === "Notification";
        return true;
      });
    }
    return filteredTelemetry;
  }, [tlms, filter, clearedTab, timeLineFilters, filterType, telemetryType, activeTab]);

  const handleRowClick = (row) => {
    setCommandData(row);
    setIsRowSelected(true);
  };

  const timelineFilterOption = useMemo(() => {
    return TimeLineFilter.find((opt) => opt?.label === timeLineFilters) || null;
  }, [timeLineFilters]);

  const filterTypeOption = useMemo(() => {
    return FilterTypes.find((opt) => opt?.label === filterType) || null;
  }, [filterType]);

  const telemetryTypeOption = useMemo(() => {
    return TelemetryType.find((opt) => opt?.label === telemetryType) || null;
  }, [telemetryType]);

  const commandTypeOption = useMemo(() => {
    return CommandsType.find((opt) => opt?.label === commandType) || null;
  }, [commandType]);

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

  const filteredFilterTypes = () => {
    if (activeTab === "CMD") {
      return FilterTypes.filter((opt) => opt?.status === 'cmd' || opt?.status === "both");
    }
    if (activeTab === "TLM") {
      return FilterTypes.filter((opt) => opt?.status === 'tlm' || opt?.status === "both");
    }
    return [];
  }

  return (
    <div className="th-wrapper">
      <div className="th-card-wrapper">
        <div className={`th-card ${collapsed ? "collapsed" : ""}`}>
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
              setFilterType("Time Range");
              setTimeLineFilter("all");
              setTelemetryType("Telemetry");
              setCommandType("Commands");
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
              options={filteredFilterTypes()}
              value={filterTypeOption}
              onChange={(option) => setFilterType(option?.label ?? "Time Range")}
              isSearchable
              styles={timelineSelectStyles}
            />
            {filterType === "Time Range" && (
              <Select
                classNamePrefix="th-command-select"
                options={TimeLineFilter}
                value={timelineFilterOption}
                onChange={(option) => setTimeLineFilter(option?.label ?? "all")}
                isSearchable
                styles={timelineSelectStyles}
              />
            )}
            {filterType === "Telemetry Type" && activeTab === "TLM" && (
              <Select
                classNamePrefix="th-command-select"
                options={TelemetryType}
                value={telemetryTypeOption}
                onChange={(option) => setTelemetryType(option?.label ?? "Telemetry")}
                isSearchable
                styles={timelineSelectStyles}
              />
            )}
            {filterType === "Commands Type" && activeTab === "CMD" && (
              <Select
                classNamePrefix="th-command-select"
                options={CommandsType}
                value={commandTypeOption}
                onChange={(option) => setCommandType(option?.label ?? "Commands")}
                isSearchable
                styles={timelineSelectStyles}
              />
            )}
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
