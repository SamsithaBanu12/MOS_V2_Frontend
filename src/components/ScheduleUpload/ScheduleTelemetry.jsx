const ScheduleTelemetry = ({ closeTelemetryModal, telemetryModal }) => {
    return (
        <div className="su-modal-backdrop" onClick={closeTelemetryModal}>
            <div className="su-modal" onClick={(e) => e.stopPropagation()}>
                <div className="su-modal-header">
                    <div>
                        <div className="su-modal-title">Telemetry details</div>
                        <div className="su-modal-subtitle">
                            {telemetryModal.commandName} &nbsp;(
                            LUT {telemetryModal.lookUpTable})
                        </div>
                    </div>
                    <button
                        className="su-btn su-btn-ghost su-close"
                        type="button"
                        onClick={closeTelemetryModal}
                    >
                        ✕
                    </button>
                </div>
                <div className="su-modal-body">
                    <div className="su-table-wrapper">
                        <table className="su-table">
                            <thead>
                                <tr>
                                    <th>Parameter</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(telemetryModal.telemetry || {}).map(
                                    ([key, value]) => (
                                        <tr key={key}>
                                            <td>{key}</td>
                                            <td>
                                                {typeof value === "object"
                                                    ? JSON.stringify(value)
                                                    : String(value)}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ScheduleTelemetry;