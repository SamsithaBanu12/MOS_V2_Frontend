import { humanFromEpoch, statusClass } from "../../utils/utils";

const ScheduleRunSheet = ({ rightTableRows, openTelemetryModal }) => {
    return (
        <div className="su-card" style={{ flex: 1 }}>
            <div className="su-card-header">
                <div className="su-card-title">Command run sheet</div>
            </div>
            <div className="su-stats-table-wrapper su-scroll">
                <table className="su-stats-table">
                    <thead>
                        <tr>
                            <th style={{ width: 40 }}>#</th>
                            <th style={{ width: 120 }}>Command Name</th>
                            <th style={{ width: 50 }}>Lookup Table</th>
                            <th style={{ width: 150 }}>Scheduled (UTC)</th>
                            <th>Delay</th>
                            <th style={{ width: 150 }}>Received Ts</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rightTableRows.map((row, idx) => (
                            <tr key={idx}>
                                <td className="su-num">#{idx + 1}</td>
                                <td className="su-num">{row.commandName}</td>
                                <td className="su-num">{row.lookUpTable}</td>
                                <td className="su-num">
                                    <div className="su-delay-pill">
                                        {humanFromEpoch(row.scheduledTimestamp)}
                                    </div>
                                </td>
                                <td className="su-num">
                                    <span className="su-delay-pill1">+{row.delay}s</span>
                                </td>
                                <td className="su-num">
                                    {row.receivedTimestamp
                                        ? humanFromEpoch(row.receivedTimestamp)
                                        : "—"}
                                </td>
                                <td className="su-num">
                                    <span className={statusClass(row.status)}>
                                        {row.status || "—"}
                                    </span>
                                </td>
                                <td className="su-num">
                                    <button
                                        className="su-btn su-btn-ghost su-btn-view"
                                        type="button"
                                        disabled={!row.telemetry}
                                        onClick={() => openTelemetryModal(row)}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};
export default ScheduleRunSheet;