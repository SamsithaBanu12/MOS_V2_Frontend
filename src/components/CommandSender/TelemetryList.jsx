import { commandStateMapping } from "../../data";
import { getHighlightClass } from "../../utils/utils";

const TelemetryList = ({ commandTelemetryMap, lastUpdated,
    filteredTelemetry, isFromSchedule }) => {

    const getStateParameterValue = (commandTelemetryMap, key, value) => {
        const filterStateParameter = commandStateMapping?.find(
            item =>
                item?.telemetry?.toLowerCase() ===
                commandTelemetryMap?.telemetry?.toLowerCase()
        );
        if (filterStateParameter) {
            return (
                filterStateParameter?.states
                    ?.find(item => item?.parameter === key)
                    ?.states?.[value] ?? value
            );
        }
        return value ?? null;
    };


    return (
        <div className={`${isFromSchedule ? 'tm-wrapper1' : 'tm-wrapper'}`}>
            <div className="tm-header">Telemetry Details</div>
            <div className="tm-name-wrapper">
                <div className="name">{commandTelemetryMap?.telemetry}</div>
                <div className="tm-last-updated">
                    Last Updated: {lastUpdated || '--'}
                </div>
            </div>
            <div className="item-row2">
                <div className="ce-items-head">Telemetry Parameters</div>
                <div className="scrollable2">
                    {filteredTelemetry.map(([key, value]) => (
                        <div className="ce-item-row" key={key}>
                            <div className="ce-item-name2">
                                <div className="ce-mono">{key}</div>
                            </div>
                            <div className="ce-item-value2">
                                <div
                                    className={`${getHighlightClass(lastUpdated)} === "pinky" ? "ce-row-input pinky" : "ce-row-input"`}
                                // value={value}
                                // onChange={(e) => {
                                //   let v = e.target.value.trim();
                                //   if (v && !v.startsWith("0x") && /^[0-9a-fA-F]+$/.test(v)) v = "0x" + v.toUpperCase();
                                //   onChange(item.name, v);
                                // }}
                                // placeholder={getDefaultDisplay(item) ?? "0x..."}
                                >{getStateParameterValue(commandTelemetryMap, key, value)}
                                    {/* {getDisplayValue(isHex, value) ?? "null"} */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};
export default TelemetryList;