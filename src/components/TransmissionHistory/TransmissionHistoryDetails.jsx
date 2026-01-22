import { IoClose } from "react-icons/io5";
import {
  base64ToHex,
  findHealthCommand,
  getCommandName,
  getStateParameterValue,
  getTcTmId,
  getTelemetryName,
} from "../../utils/utils";
import { useEffect, useMemo, useState } from "react";
import { commandTelemetryEmulator } from "../../constants/commandsData";

const TransmissionHistoryDetails = ({
  isRowSelected,
  activeTab,
  commandData,
  setIsRowSelected,
}) => {
  const [filteredTelemetry, setFilteredTelemetry] = useState([]);
  const [filteredCommands, setFilteredCommands] = useState([]);
  const [commandTelemetryMap, setCommandTelemetryMap] = useState([]);

  useEffect(() => {
    if (!commandData || !Array.isArray(commandTelemetryEmulator)) return;

    if (activeTab === "TLM") {
      const mapping = commandTelemetryEmulator.find(
        (m) =>
          m.telemetry === getTelemetryName(commandData?.__packet, activeTab)
      );
      if (!mapping) {
        setFilteredTelemetry([]);
        return;
      }
      // setCommandTelemetryMap(mapping);
      const fetchTlm = async () => {
        const tlmName = mapping?.telemetry;
        if (!tlmName) return;

        try {
          const paramKeys =
            mapping?.parameters?.map((p) => p.toLowerCase()) ?? [];

          const filtered = Object.fromEntries(
            Object.entries(commandData?.params ?? {}).filter(([key]) =>
              paramKeys.includes(key.toLowerCase())
            )
          );

          setFilteredTelemetry(filtered);
        } catch (err) {
          console.error(err.message);
        }
      };

      // Fetch immediately
      fetchTlm();
    } else if (activeTab === "CMD") {
      const mapping = commandTelemetryEmulator.find(
        (m) => m.command === getTelemetryName(commandData?.__packet, activeTab)
      );
      if (!mapping) {
        setFilteredCommands([]);
        return;
      }
      setCommandTelemetryMap(mapping);
      const fetchcmd = async () => {
        const cmdName = mapping?.command;
        if (!cmdName) return;

        try {
          const paramKeys =
            mapping?.commandParams?.map((p) => p.toLowerCase()) ?? [];

          const filtered = Object.fromEntries(
            Object.entries(commandData?.params ?? {}).filter(([key]) =>
              paramKeys.includes(key.toLowerCase())
            )
          );
          setFilteredCommands(filtered);
        } catch (err) {
          console.error(err.message);
        }
      };

      // Fetch immediately
      fetchcmd();
    }
  }, [isRowSelected, commandData]);

  const transformFilteredCommands = (filteredCommands, commandTelemetryMap) => {
    if (!filteredCommands) return {};

    return Object.fromEntries(
      Object.entries(filteredCommands).map(([key, value]) => {
        let normalizedValue = value;

        if (typeof value === "object" && value !== null) {
          normalizedValue = value.raw ?? JSON.stringify(value);
        }

        const finalValue =
          getStateParameterValue(commandTelemetryMap, key, normalizedValue) ??
          "-";

        return [key, finalValue];
      })
    );
  };
  const processedCommands = useMemo(
    () => transformFilteredCommands(filteredCommands, commandTelemetryMap),
    [filteredCommands, commandTelemetryMap]
  );

  return (
    <div>
      {activeTab === "CMD" ? (
        <div className="command-details">
          <div className="command-details-header">
            <div className="header1">Tele-Command Details</div>
            <button className="close" onClick={() => setIsRowSelected(false)}>
              <IoClose size={20} />
            </button>
          </div>
          <div className="command-details-body">
            <div className="left-side-wrapper">
              <div className="packet-name">
                <span>{getCommandName(commandData?.__packet)}</span>
              </div>
              {Object.keys(filteredCommands || {}).length === 0 && (
                <div className="no-commands">
                  No payload parameters here!!
                </div>
              )}
              <div className="scrollable2">
                {Object.entries(processedCommands || {}).map(([key, value]) => {
                  return (
                    <div className="th-item-row" key={key}>
                      <div className="th-item-name2">
                        <div className="th-mono">{key}</div>
                      </div>

                      <div className="th-item-value2">
                        <div className="th-row-input">{value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="command-details">
          <div className="command-details-header">
            <div className="header1">Telemetry Details</div>
            <button className="close" onClick={() => setIsRowSelected(false)}>
              <IoClose size={20} />
            </button>
          </div>

          <div className="command-details-body">
            <div className="left-side-wrapper">
              <div className="packet-name">
                <span>{getCommandName(commandData?.__packet)}</span>
              </div>
              <div className="parameter">
                {findHealthCommand(commandData?.__packet) && commandData?.buffer
                  ? base64ToHex(commandData.buffer)
                  : commandData?.buffer || ""}
              </div>
              {Object.keys(filteredTelemetry || {}).length === 0 && (
                <div className="no-commands">
                  No payload parameters here!!
                </div>
              )}
              <div className="scrollable2">
                {findHealthCommand(commandData?.__packet) !== "Health" &&
                  Object.entries(filteredTelemetry || {}).map(
                    ([key, value]) => (
                      <div className="th-item-row" key={key}>
                        <div className="th-item-name2">
                          <div className="th-mono">{key}</div>
                        </div>

                        <div className="th-item-value2">
                          <div className="th-row-input">
                            {getTcTmId(value) ?? "-"}
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default TransmissionHistoryDetails;
