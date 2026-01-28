import { useEffect, useMemo, useState } from "react";
import { buildParamsString, sendCommand } from "./paramsTransport";
import "./CommandExplorer.space.css";
import {
  getDefaultDisplay,
  getStatesInfo,
  partitionItems,
  payloadForTemplate,
} from "../../utils/utils";
import { scheduleFileCommands, subSystemList, targetList } from "../../data";
import CEHeader from "./CEHeader";
import { getAllCommands, getTlmPacket } from "../../utils/api";
import TelemetryList from "./TelemetryList";
import SelectRows from "./SelectRows";
import CommandDetails from "./CommandDetails";
import { commandTelemetryEmulator } from "../../constants/commandsData";
import toast from "react-hot-toast";
import ErrorDisplay from "../../common/ErrorDisplay";
import { useSidebar } from "../../context/SidebarContext";

const EMPTY_ARRAY = [];

export default function CommandExplorer() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [commands, setCommands] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [telemetry, setTelemetry] = useState([]);
  const [filteredTelemetry, setFilteredTelemetry] = useState([]);
  const [lastUpdated, setLastUpdated] = useState("");
  const [commandTelemetryMap, setCommandTelemetryMap] = useState(null);
  const [showHeader, setShowHeader] = useState(false);
  const [isHex, setIsHex] = useState(true);
  const [targetValue, setTargetValue] = useState(targetList?.[0]?.label ?? "");
  const [subSystemValue, setSubSystemValue] = useState(
    subSystemList?.[0]?.label ?? ""
  );
  const [filteredCommands, setFilteredCommands] = useState([]);
  const [routing, setRouting] = useState({});
  const [payload, setPayload] = useState({});
  const [refreshBtn, setRefreshBtn] = useState(false);
  const { collapsed } = useSidebar();

  const selectedCmd =
    filteredCommands.length > 0 ? filteredCommands[selectedIdx] : null;

  const {
    target_name,
    packet_name,
    description,
    items = EMPTY_ARRAY,
  } = selectedCmd || {};

  const { headerItems, routingItems, payloadItems } = useMemo(
    () => partitionItems(items),
    [items]
  );

  const selectedSubSystemOption = useMemo(() => {
    return subSystemList.find((opt) => opt?.label === subSystemValue) || null;
  }, [subSystemList, subSystemValue]);

  const selectedTargetOption = useMemo(() => {
    return targetList.find((opt) => opt?.label === targetValue) || null;
  }, [targetList, targetValue]);

  useEffect(() => {
    if (!selectedCmd) {
      setRouting({});
      setPayload({});
      return;
    }

    const routingInit = {};
    routingItems.forEach((it) => {
      routingInit[it.name] = getDefaultDisplay(it) ?? "";
    });

    const payloadInit = {};
    payloadItems.forEach((it) => {
      if (it.states) {
        const info = getStatesInfo(it);
        payloadInit[it.name] = info?.selectedLabel ?? "";
      } else {
        payloadInit[it.name] = getDefaultDisplay(it) ?? "";
      }
    });

    setRouting(routingInit);
    setPayload(payloadInit);
  }, [selectedCmd, routingItems, payloadItems]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getAllCommands();

        if (Array.isArray(data?.result)) {
          setCommands(data.result);
          setSelectedIdx(0);
        } else {
          throw new Error("Invalid JSON-RPC response");
        }
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [refreshBtn]);

  useEffect(() => {
    setFilteredTelemetry([]);
    setTelemetry([]);
    setLastUpdated("");
    setCommandTelemetryMap(null);
  }, [selectedIdx]);

  useEffect(() => {
    if (!selectedCmd) return;

    const mapping = commandTelemetryEmulator.find(
      (m) => m.command === selectedCmd.packet_name
    );
    setCommandTelemetryMap(mapping);

    let cancelled = false;

    const fetchTlm = async () => {
      if (cancelled) return;

      const tlmName = mapping?.telemetry;
      if (!tlmName) return;

      try {
        const data = await getTlmPacket({ tlmName });
        if (!data?.result || cancelled) return;

        const paramKeys =
          mapping?.parameters?.map((p) => p.toLowerCase()) ?? [];
        const filtered = data.result.filter(([key]) =>
          paramKeys.includes(key.toLowerCase())
        );

        setTelemetry(data.result);
        setFilteredTelemetry(filtered);

        const timeRow = data.result.find(
          ([key]) => key === "RECEIVED_TIMEFORMATTED"
        );
        setLastUpdated(timeRow ? timeRow[1] : "");
      } catch (err) {
        if (!cancelled) setErr(err.message);
      }
    };

    // Fetch immediately
    fetchTlm();

    // Set interval
    const interval = setInterval(fetchTlm, 2000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [selectedIdx, selectedCmd]);

  const handleSend = async () => {
    if (!selectedCmd) {
      toast.error("No command selected");
      return;
    }

    const payloadTemplate = payloadForTemplate(payloadItems, payload);

    const paramString = buildParamsString(
      selectedCmd,
      routing,
      payloadTemplate
    );

    const res = await sendCommand(paramString);

    if (res.ok) {
      toast.success("Successfully sent the command");
    } else {
      toast.error("Error while sending command");
    }
  };

  // 🔹 Filter by Sub System (Schedule vs all)
  useEffect(() => {
    if (!commands.length) return;

    const lower = subSystemValue?.toLowerCase() || "";

    // 1) Schedule filter
    if (subSystemValue === "SCHEDULE") {
      const filtered = commands.filter((item) =>
        scheduleFileCommands.includes(item?.packet_name)
      );
      setFilteredCommands(filtered);
      setSelectedIdx(0);
      return;
    }

    // 2) Show ALL
    if (subSystemValue === "ALL") {
      setFilteredCommands(commands);
      setSelectedIdx(0);
      return;
    }

    // 3) Normal filtering
    const filtered = commands.filter((item) =>
      item.packet_name?.toLowerCase().startsWith(lower)
    );

    setFilteredCommands(filtered);
    setSelectedIdx(0);
  }, [subSystemValue, commands]);

  useEffect(() => {
    if (selectedIdx >= filteredCommands.length && filteredCommands.length > 0) {
      setSelectedIdx(0);
    }
  }, [filteredCommands.length, selectedIdx]);

  const commandOptions = useMemo(
    () =>
      filteredCommands.map((cmd, idx) => ({
        value: idx,
        label: cmd.packet_name,
      })),
    [filteredCommands]
  );

  const selectedOption =
    commandOptions.find((opt) => opt.value === selectedIdx) || null;

  return (
    <div className="ce-whole-wrapper">
      <div className={`ce-app ${collapsed ? "collapsed" : ""}`}>
        <CEHeader />
        <div className="ce-panel">
          <div className="ce-select-panel">
            <div className="ce-column">
              {!loading && !err && (
                <SelectRows
                  targetList={targetList}
                  selectedTargetOption={selectedTargetOption}
                  setTargetValue={setTargetValue}
                  subSystemList={subSystemList}
                  selectedSubSystemOption={selectedSubSystemOption}
                  setSubSystemValue={setSubSystemValue}
                  commandOptions={commandOptions}
                  selectedOption={selectedOption}
                  setSelectedIdx={setSelectedIdx}
                />
              )}
              {loading && <div className="ce-loading">Loading commands…</div>}
              {err &&
                <ErrorDisplay
                  title="Fetch Error"
                  message="We couldn't load the Telecommands from the server."
                  onAction={() => setRefreshBtn((prev) => !prev)}
                  actionLabel="Retry Fetch"
                  error={err}
                  loading={loading}
                />
              }
              {!loading && !err && selectedCmd && (
                <CommandDetails
                  packet_name={packet_name}
                  description={description}
                  isHex={isHex}
                  setIsHex={setIsHex}
                  routingItems={routingItems}
                  setRouting={setRouting}
                  setShowHeader={setShowHeader}
                  showHeader={showHeader}
                  headerItems={headerItems}
                  payloadItems={payloadItems}
                  setPayload={setPayload}
                  routing={routing}
                  payload={payload}
                />
              )}
            </div>
          </div>
          {!loading && !err && filteredCommands?.length > 0 && (
            <div className="ce-footer">
              <button
                className="ce-btn"
                onClick={handleSend}
                disabled={!selectedCmd}
              >
                Send Command
              </button>
            </div>
          )}
        </div>
      </div>
      {commandTelemetryMap && filteredTelemetry.length > 0 && (
        <TelemetryList
          commandTelemetryMap={commandTelemetryMap}
          lastUpdated={lastUpdated}
          filteredTelemetry={filteredTelemetry}
        />
      )}
    </div>
  );
}
