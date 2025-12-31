import { IoClose } from "react-icons/io5";
import { base64ToHex, findHealthCommand, getCommandName, getTcTmId } from "../../utils/utils";

const TransmissionHistoryDetails = ({ activeTab, commandData, setIsRowSelected }) => {
    return (
        <div>
            {activeTab === "CMD" ? (
                <div className="command-details">
                    <div className="command-details-header">
                        <div className="header1">Tele-Command Details</div>
                        <button
                            className="close"
                            onClick={() => setIsRowSelected(false)}
                        >
                            <IoClose size={20} />
                        </button>
                    </div>
                    <div className="command-details-body">
                        <div className="left-side-wrapper">
                            <div className="packet-name">
                                <span>{getCommandName(commandData?.__packet)}</span>
                            </div>
                            <div className="scrollable2">
                                {Object.entries(commandData?.params || {}).map(([key, value]) => (
                                    <div className="th-item-row" key={key}>
                                        <div className="th-item-name2">
                                            <div className="th-mono">{key}</div>
                                        </div>

                                        <div className="th-item-value2">
                                            <div className="th-row-input">
                                                {getTcTmId(value) ?? '-'}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="command-details">
                    <div className="command-details-header">
                        <div className="header1">Telemetry Details</div>
                        <button
                            className="close"
                            onClick={() => setIsRowSelected(false)}
                        >
                            <IoClose size={20} />
                        </button>
                    </div>

                    <div className="command-details-body">
                        <div className="left-side-wrapper">
                            <div className="packet-name">
                                <span>{getCommandName(commandData?.__packet)}</span>
                            </div>
                            <div className="parameter">
                                {findHealthCommand(commandData?.__packet) &&
                                    commandData?.buffer
                                    ? base64ToHex(commandData.buffer)
                                    : commandData?.buffer || ""}
                            </div>
                            <div className="scrollable2">
                                {Object.entries(commandData?.params || {}).map(([key, value]) => (
                                    <div className="th-item-row" key={key}>
                                        <div className="th-item-name2">
                                            <div className="th-mono">{key}</div>
                                        </div>

                                        <div className="th-item-value2">
                                            <div className="th-row-input">
                                                {getTcTmId(value) ?? '-'}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};
export default TransmissionHistoryDetails;