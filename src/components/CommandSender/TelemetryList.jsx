import { commandStateMapping } from "../../constants/CommandsMappingData";
import { getHighlightClass, getStateParameterValue } from "../../utils/utils";
import { useSidebar } from "../../context/SidebarContext";

const TelemetryList = ({
  commandTelemetryMap,
  lastUpdated,
  filteredTelemetry,
  isFromSchedule,
}) => {
  const { collapsed } = useSidebar();

  return (
    <div className={`${isFromSchedule ? "tm-wrapper1" : "tm-wrapper"} ${collapsed ? "collapsed" : ""}`}>
      <div className="tm-header">Telemetry Details</div>
      <div className="tm-name-wrapper">
        <div className="name">{commandTelemetryMap?.telemetry}</div>
        <div className="tm-last-updated">
          Last Updated: {lastUpdated || "--"}
        </div>
      </div>
      <div className="item-row2">
        <div className="ce-items-head">Telemetry Parameters</div>
        <div className="scrollable2">
          {filteredTelemetry.map(([key, value]) => {
            let dispplayValue = value;
            if (typeof value === "object" && value !== null) {
              dispplayValue = value.raw ?? JSON.stringify(value);
            }
            return (
              <div className="ce-item-row" key={key}>
                <div className="ce-item-name2">
                  <div className="ce-mono">{key}</div>
                </div>
                <div className="ce-item-value2">
                  <div
                    className={`${getHighlightClass(
                      lastUpdated
                    )} === "pinky" ? "ce-row-input pinky" : "ce-row-input"`}
                  >
                    {getStateParameterValue(
                      commandTelemetryMap,
                      key,
                      dispplayValue
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TelemetryList;
