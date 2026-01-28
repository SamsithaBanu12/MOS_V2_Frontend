import React, { useEffect, useRef, useState } from "react";
import { getHistoryMock } from "./FileUploadData.jsx";
import "./FileUpload.space.css";
import { MdOutlineFileUpload } from "react-icons/md";
import { useSidebar } from "../../context/SidebarContext.jsx";

export default function FileUploadGUI() {
  const [file, setFile] = useState(null);
  const [mtu, setMtu] = useState(1350);
  const [delay, setDelay] = useState(10);
  const [ack, setAck] = useState(1);

  const [totalPackets, setTotalPackets] = useState(0);
  const [history, setHistory] = useState([]);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState("-");
  const [timeTaken, setTimeTaken] = useState("-");
  const [logs, setLogs] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [uploadCTAClicked, setUploadCTAClicked] = useState(false);
  const [totalPacketsValue, setTotalPacketsValue] = useState(0);

  const fileInputRef = useRef(null);
  const { collapsed } = useSidebar();

  useEffect(() => {
    getHistoryMock().then(setHistory);
  }, []);

  useEffect(() => {
    if (!logs || logs.length === 0) return;

    const totalLine = logs.find((log) =>
      log.includes("Total pack to be transfered is")
    );
    const actualRate = logs.find((log) => log.includes("1. Actual rate is"));
    const totalPacketsLine = logs.find((log) =>
      log.includes("d. Total packets ")
    );

    if (!totalLine) return;

    const totalLogsValueStr = totalLine.split(" ").pop();
    const totalLogsValue = Number(totalLogsValueStr);

    if (!Number.isFinite(totalLogsValue) || totalLogsValue <= 1) return;

    setTotalPackets(totalLogsValue);

    const packetLogs = logs.filter((log) => log.includes("[FTM TX] Packet"));

    const packetRegex = /\[FTM TX\] Packet #(\d+) .* tc_tm_id=(\d+)/;

    const packets = packetLogs
      .map((line) => {
        const m = line.match(packetRegex);
        if (!m) return null;
        return {
          packetNo: Number(m[1]),
          tcTmId: Number(m[2]),
        };
      })
      .filter(Boolean);

    if (packets.length < 2) return;

    const referenceId = packets[1].tcTmId;
    const allSame = packets.slice(1).every((p) => p.tcTmId === referenceId);

    const dataPackets = packets.filter(
      (p) => p.packetNo > 1 && p.tcTmId === referenceId
    );

    const lastDataPacket = dataPackets.at(-1);
    if (!lastDataPacket) return;

    const totalDataPackets = totalLogsValue - 1;
    const completedPackets = lastDataPacket.packetNo - 1;
    const percentage = Math.max(
      0,
      Math.min(100, Math.round((completedPackets / totalDataPackets) * 100))
    );

    setProgress(percentage);

    if (!actualRate) return;
    const actualRateValues = actualRate.split(",");
    if (actualRateValues.length >= 2) {
      setSpeed(actualRateValues[0].split("is - ").pop().trim());
      setTimeTaken(actualRateValues[1].split("taken").pop().trim());
    }
    if (!totalPacketsLine) return;

    const totalPacketsStr = totalPacketsLine.split(" - ").pop().trim();
    const totalPacketsNum = Number(totalPacketsStr);
    setTotalPacketsValue(totalPacketsNum);
  }, [logs]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file");
      return;
    }
    setLogs([]);
    setIsStreaming(true);
    setUploadStatus(null);
    setProgress(0);
    setTotalPackets(0);
    setSpeed("-");
    setTimeTaken("-");
    setUploadCTAClicked(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("mtu", mtu);
    formData.append("delay", delay);
    formData.append("ack", ack);

    try {
      const uploadRes = await fetch("http://localhost:8080/upload-stream", {
        method: "POST",
        body: formData,
      });

      if (!uploadRes.ok) {
        throw new Error(`HTTP error! status: ${uploadRes.status}`);
      }

      const reader = uploadRes.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;

          const data = line.slice(6);
          try {
            const parsed = JSON.parse(data);

            if (parsed.type === "log") {
              setLogs((prev) => [...prev, parsed.message]);
            } else if (parsed.type === "status") {
              setLogs((prev) => [...prev, `[STATUS] ${parsed.message}`]);
            } else if (parsed.type === "complete") {
              setLogs((prev) => [...prev, `[SUCCESS] ${parsed.message}`]);
              setUploadStatus("Success");
            } else if (parsed.type === "error") {
              setLogs((prev) => [...prev, `[ERROR] ${parsed.message}`]);
              setUploadStatus("Error");
            }
          } catch (e) { }
        }
      }
    } catch (err) {
      setLogs((prev) => [...prev, `[ERROR] Failed to connect: ${err.message}`]);
      setUploadStatus("Error");
    } finally {
      setIsStreaming(false);
    }
  };

  const clearLogs = () => {
    setLogs([]);
    setUploadStatus(null);
  };

  const openFileDialog = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setProgress(0);
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
  };

  const resetStatus = () => {
    setProgress(0);
    setSpeed("-");
    setTimeTaken("-");
    setLogs([]);
    setUploadStatus(null);
    setTotalPackets(0);
  };

  const getFileUploadStatus = () => {
    if (isStreaming) {
      return <span className="streaming-indicator">● Streaming...</span>;
    }
    // You can uncomment these if you want explicit status badges:
    // else if (uploadStatus === 'Success') {
    //     return <span className="status-success">✓ Complete</span>;
    // } else if (uploadStatus === 'Error') {
    //     return <span className="status-error">✗ Error</span>;
    // }
  };

  return (
    <div className={`fu-wrapper ${collapsed ? "collapsed" : ""}`}>
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
              disabled={isStreaming}
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
                disabled={isStreaming}
              />
            </div>
            <div className="fu-param-row">
              <span>FTDS Delay (ms)</span>
              <input
                type="number"
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
                disabled={isStreaming}
              />
            </div>
            <div className="fu-param-row">
              <span>ACK/UNACK Mode</span>
              <select
                className="fu-select"
                value={ack}
                onChange={(e) => setAck(Number(e.target.value))}
                disabled={isStreaming}
              >
                <option value={1}>ACK (1)</option>
                <option value={0}>UNACK (0)</option>
              </select>
            </div>
          </div>

          <div className="fu-upload-btnn">
            <button
              className="fu-upload-btn"
              type="button"
              onClick={handleSubmit}
              disabled={isStreaming}
            >
              {isStreaming ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>

        <div className="fu-file-history">
          <div className="fu-file-history-topic">Upload Files History</div>
          <div className={`fu-scroll fu-stats-table-wrap ${collapsed ? "collapsed" : ""}`}>
            <table className={`fu-stats-table ${collapsed ? "collapsed" : ""}`}>
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
                {history.map((row) => (
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

      {uploadCTAClicked && (
        <div className="fu-bottom-wrapper">
          <div className={`fu-status-wrapper ${collapsed ? "collapsed" : ""}`}>
            <div className="fu-status-wrapper-topic">File Upload Status</div>

            {ack === 0 && (
              <div className="fu-unknowledge-msg">
                In unAcknowledge mode, we do not check the receiver&apos;s
                response.
              </div>
            )}

            <div className="fu-progress-bar-wrap">
              {ack === 1 && uploadStatus === "Error" ? (
                <div
                  className="fu-progress-bar-upload1"
                  style={{
                    color:
                      uploadStatus === "Error"
                        ? "rgba(212, 77, 77, 1)"
                        : "#397676",
                  }}
                >
                  In ACK mode, no response was received from the receiver.
                </div>
              ) : (
                <div className="fu-progress-bar-upload">
                  <div className="progress-header">File Upload Progress</div>
                  <div className={`fu-progress-bar ${collapsed ? "collapsed" : ""}`}>
                    <div
                      className="fu-progress-bar-inner"
                      style={{
                        width: `${progress}%`,
                        backgroundColor: "#00eaff",
                      }}
                    >
                      <span
                        className={
                          ack === 1 ? `fu-progress-value ${collapsed ? "collapsed" : ""}` : `fu-progress-value1 ${collapsed ? "collapsed" : ""}`
                        }
                      >
                        {progress}%
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              className={
                ack === 1
                  ? "fu-log-messages-wrapper"
                  : "fu-log-messages-wrapper1"
              }
            >
              <div className="fu-log-message-header-wrap">
                <div className="fu-log-message-header">Log Messages</div>
                <div className="fu-log-status">{getFileUploadStatus()}</div>
              </div>

              {logs.length === 0 ? (
                <div className="no-logs">
                  Upload the files then logs will appear here
                </div>
              ) : (
                <div className="fu-log-wrapper">
                  {[...logs].reverse().map((l, i) =>
                    l !== "" ? (
                      <div key={i} className="fu-log">
                        {l}
                      </div>
                    ) : null
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="fu-file-upload-details">
            <div className="fu-file-details-header">File Upload Details</div>
            <div className="fu-detail-row">
              <span>Packets:</span>
              <span className="fu-detail-value">
                {totalPacketsValue || "-"}
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
              <span
                className={`fu-detail-value ${uploadStatus || ""}`}
                style={{
                  color:
                    uploadStatus === "Error" ? "rgba(212, 77, 77, 1)" : "green",
                }}
              >
                {uploadStatus || "-"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
