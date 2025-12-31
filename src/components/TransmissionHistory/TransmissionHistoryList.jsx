import { findHealthCommand, getCommandName, getTcTmId, toUTCYmdHmsnn } from "../../utils/utils";

const TransmissionHistoryList = ({ filteredCmds,useLocalTime, filteredTlms, handleRowClick, activeTab }) => {
    return (
        <div className="th-table-wrap">
            {activeTab === "CMD" ? (
                <table className="th-table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Packet Name</th>
                            <th>Time</th>
                            <th>GS Id</th>
                            <th>TC ID</th>
                            <th>Parameters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCmds.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="th-muted">
                                    No commands
                                </td>
                            </tr>
                        ) : (
                            [...filteredCmds].reverse().map((r, i) => (
                                <tr key={i}>
                                    <td className="th-mono"> {findHealthCommand(r?.__packet)}</td>
                                    <td className="th-mono">{getCommandName(r?.__packet) || "—"}</td>
                                    <td>{useLocalTime ? toUTCYmdHmsnn(r?.__time) : r?.__time}</td>
                                    <td>{r?.GND_ID}</td>
                                    <td>{getTcTmId(r?.TC_ID) || '-'}</td>
                                    <td>
                                        <button className="view-btn" onClick={() => handleRowClick(r)}>view</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            ) : (
                <table className="th-table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Packet Name</th>
                            <th>Time</th>
                            <th>GS Id</th>
                            <th>TM_ID</th>
                            <th>Parameters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTlms.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="th-muted">
                                    No telemetry
                                </td>
                            </tr>
                        ) : (
                            [...filteredTlms].reverse().map((r, i) => (
                                <tr key={i}>
                                    <td className="th-mono">
                                        {findHealthCommand(r?.__packet)}
                                    </td>
                                    <td className="th-mono">{getCommandName(r?.__packet) || "—"}</td>
                                    <td>{useLocalTime ? toUTCYmdHmsnn(r?.__time) : r?.__time}</td>
                                    <td>{r?.GND_ID || "-"}</td>
                                    <td>{getTcTmId(r?.TM_ID) || "-"}</td>
                                    <td>
                                        <button className="view-btn" onClick={() => handleRowClick(r)}>view</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            )}
        </div>
    )
};
export default TransmissionHistoryList;