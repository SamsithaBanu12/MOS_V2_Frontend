import { MdOutlineFileUpload } from "react-icons/md";
import commandSelectStyles from "../../customStyles/customStyle";
import Select from "react-select";

const FileUploadBuilder = ({
    openFileDialog,
    file,
    fileInputRef,
    handleFileChange,
    mtu,
    setMtu,
    delay,
    setDelay,
    ackOptions,
    selectedAckOption,
    setAckMode,
    handleUploadClick,
    uploading,
    history,
    activeSessionId
}) => {
    return (
        <div className="fu-top-wrapper">
            <div className="fu-file-builder">
                <div className="fu-file-header">File Upload Builder</div>
                <div className="fu-upload-file-wrap">
                    <div className="fu-filename-box" onClick={openFileDialog}>
                        {file ? file.name : "FileName"}
                    </div>
                    <button
                        className="fu-upload-icon-btn"
                        type="button"
                        onClick={openFileDialog}
                    >
                        <MdOutlineFileUpload size={20} />
                    </button>
                    <input
                        ref={fileInputRef}
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </div>
                <div className="fu-input-wrapper">
                    <div className="fu-param-row">
                        <span>MTU</span>
                        <input
                            className="fu-param-row-input"
                            type="number"
                            value={mtu}
                            onChange={(e) => setMtu(Number(e.target.value))}
                        />
                    </div>
                    <div className="fu-param-row">
                        <span>FTDS Delay (ms)</span>
                        <input
                            type="number"
                            value={delay}
                            onChange={(e) => setDelay(Number(e.target.value))}
                        />
                    </div>
                    <div className="fu-param-row">
                        <span>ACK/UNACK Mode</span>
                        <Select
                            classNamePrefix="ce-command-select"
                            options={ackOptions}
                            value={selectedAckOption}
                            onChange={(option) => setAckMode(option?.value ?? 1)}
                            isSearchable={false}
                            styles={{
                                ...commandSelectStyles,
                                menu: (base, state) => ({
                                    ...commandSelectStyles.menu(base, state),
                                    zIndex: 99999,
                                }),
                                menuPortal: (base) => ({
                                    ...base,
                                    zIndex: 99999,
                                }),
                            }}
                            menuPortalTarget={document.body}
                            menuPosition="fixed"
                        />

                    </div>
                </div>
                <div className="fu-upload-btnn">
                    <button
                        className="fu-upload-btn"
                        type="button"
                        onClick={handleUploadClick}
                        disabled={!file || uploading}
                    >
                        {uploading ? "Uploading..." : "Upload"}
                    </button>
                </div>
            </div>
            <div className="fu-file-history">
                <div className="fu-file-history-topic">Upload Files History</div>
                <div className="fu-scroll fu-stats-table-wrap">
                    <table className="fu-stats-table">
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th>Size</th>
                                <th>Status</th>
                                <th>Packet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="fu-history-empty">
                                        No Histories Yet
                                    </td>
                                </tr>
                            )}
                            {history.map(row => (
                                <tr
                                    key={row.id}
                                    className={
                                        row.id === activeSessionId ? "fu-history-active" : ""
                                    }
                                >
                                    <td className="fu-num">{row.filename}</td>
                                    <td className="fu-num">{row.size_bytes ?? "-"}</td>
                                    <td className="fu-num">{row.status}</td>
                                    <td className="fu-num">{row.total_packets ?? "-"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};
export default FileUploadBuilder;