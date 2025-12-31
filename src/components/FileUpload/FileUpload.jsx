// src/components/FileUploadGUI.jsx
import React, { useEffect, useRef, useState } from "react";
import {
    uploadFileMock,
    getHistoryMock,
    connectMockStream,
} from "./FileUploadData.jsx";
import "./FileUpload.space.css";
import { MdOutlineFileUpload } from "react-icons/md";
import commandSelectStyles from "../../customStyles/customStyle.jsx";
import Select from "react-select";
import FileUploadBuilder from "./FileUploadBuilder.jsx";
import FileUploadDetails from "./FileUploadDetails.jsx";

export default function FileUploadGUI() {
    const [file, setFile] = useState(null);
    const [mtu, setMtu] = useState(1350);
    const [delay, setDelay] = useState(10);
    const [ackMode, setAckMode] = useState(1); // 1 = ACK, 0 = UNACK
    const [history, setHistory] = useState([]);
    const [progress, setProgress] = useState(0);
    const [packets, setPackets] = useState({ current: 0, total: 0 });
    const [speed, setSpeed] = useState("-");
    const [timeTaken, setTimeTaken] = useState("-");
    const [status, setStatus] = useState("-");
    const [logs, setLogs] = useState([]);
    const [activeSessionId, setActiveSessionId] = useState(null);
    const [uploading, setUploading] = useState(false);

    const fileInputRef = useRef(null);
    const unsubscribeStreamRef = useRef(null);

    // load initial history (from mock)
    useEffect(() => {
        getHistoryMock().then(setHistory);
    }, []);

    const openFileDialog = () => {
        if (fileInputRef.current) fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        setFile(f);
    };

    const resetStatus = () => {
        setProgress(0);
        setPackets({ current: 0, total: 0 });
        setSpeed("-");
        setTimeTaken("-");
        setStatus("-");
        setLogs([]);
    };

    const handleUploadClick = async () => {
        if (!file || uploading) return;
        resetStatus();
        setUploading(true);

        try {
            // call mock "upload" API
            const res = await uploadFileMock({
                file,
                mtu,
                delay_ms: delay,
                ack_mode: ackMode,
            });

            const sessionId = res.session_id;
            setActiveSessionId(sessionId);
            setStatus("RUNNING");

            // open mock "stream"
            if (unsubscribeStreamRef.current) {
                unsubscribeStreamRef.current();
            }
            unsubscribeStreamRef.current = connectMockStream(sessionId, {
                onLog: (line) =>
                    setLogs((prev) => [...prev.slice(-300), line]), // keep last 300 lines
                onProgress: ({ packet, total, percent }) => {
                    setPackets({ current: packet, total: total || 0 });
                    if (percent != null) setProgress(percent);
                },
                onDone: ({ status: st, elapsed_sec, speed_kbps }) => {
                    setStatus(st);
                    setTimeTaken(`${elapsed_sec.toFixed(1)} s`);
                    if (speed_kbps != null)
                        setSpeed(`${speed_kbps.toFixed(1)} Kbits/s`);

                    // refresh history from mock store
                    getHistoryMock().then(setHistory);
                    setUploading(false);
                },
            });
        } catch (e) {
            console.error(e);
            setStatus("FAILED");
            setUploading(false);
        }
    };

    const ackOptions = [
        { value: 1, label: "ACK (1)" },
        { value: 0, label: "UNACK (0)" },
    ];

    const selectedAckOption = ackOptions.find(o => o.value === ackMode) || ackOptions[0];

    return (

        <div className="fu-wrapper">
            <FileUploadBuilder
                openFileDialog={openFileDialog}
                file={file}
                fileInputRef={fileInputRef}
                handleFileChange={handleFileChange}
                mtu={mtu}
                setMtu={setMtu}
                delay={delay}
                setDelay={setDelay}
                ackOptions={ackOptions}
                selectedAckOption={selectedAckOption}
                setAckMode={setAckMode}
                handleUploadClick={handleUploadClick}
                uploading={uploading}
                history={history}
                activeSessionId={activeSessionId}
            />
            <FileUploadDetails
                progress={progress}
                logs={logs}
                packets={packets}
                speed={speed}
                timeTaken={timeTaken}
                status={status}
            />
        </div>
    );
}
