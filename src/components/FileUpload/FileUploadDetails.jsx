const FileUploadDetails = ({ progress,
    logs,
    packets,
    speed,
    timeTaken,
    status }) => {
    return (
        <div className="fu-bottom-wrapper">
            <div className="fu-status-wrapper">
                <div className="fu-status-wrapper-topic">File Upload Status</div>
                <div className="fu-progress-bar-wrap">
                    <div className="progress-header">File Upload Progress</div>
                    <div className="fu-progress-bar">
                        <div
                            className="fu-progress-bar-inner"
                            style={{ width: `${progress}%`, color: 'green' }}
                        />
                    </div>
                </div>
                <div className="fu-log-messages-wrapper">
                    <div className="fu-log-message-header">Log Messages</div>
                    {logs.length === 0 ? (
                        <div className="no-logs">Upload the files then logs will appear here</div>
                    ) : (
                        <div className="fu-log-wrapper">
                            {logs.map((l, i) => (
                                <div className="fu-log" key={i}>{l}</div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="fu-file-upload-details">
                <div className="fu-file-details-header">File Upload Details</div>
                <div className="fu-detail-row">
                    <span>Packets:</span>
                    <span className="fu-detail-value">
                        {packets.current}/{packets.total || "-"}
                    </span>
                </div>
                <div className="fu-detail-row">
                    <span>Speed:</span>
                    <span className="fu-detail-value">{speed}</span>
                </div>
                <div className="fu-detail-row">
                    <span>Time taken for upload:</span>
                    <span className="fu-detail-value">{timeTaken}</span>
                </div>
                <div className="fu-detail-row">
                    <span>Status:</span>
                    <span className="fu-detail-value">{status}</span>
                </div>
            </div>
        </div>
    )
};
export default FileUploadDetails;