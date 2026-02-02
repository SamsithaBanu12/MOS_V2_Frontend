// src/App.jsx
import React, { useEffect, useState } from "react";
import { API_BASE } from "../../constants/contants";
import { isoFromLocalDatetime } from "../../utils/utils";
import scheduleToast from "./ScheduleToast";
import ScheduleBuilder from "./ScheduleBuilder";
import ScheduleRunSheet from "./ScheduleRunSheet";
import ScheduleTelemetry from "./ScheduleTelemetry";
import { apiClient } from "../../utils/api";

function ScheduleUploadList() {
  const [scheduleOptions, setScheduleOptions] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [baseEntries, setBaseEntries] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [delays, setDelays] = useState([]);
  const [generatedEntries, setGeneratedEntries] = useState([]);
  const [generatedFilename, setGeneratedFilename] = useState("");
  const [rightTableRows, setRightTableRows] = useState([]);
  const [loadingGenerate, setLoadingGenerate] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [runId, setRunId] = useState(null);
  const [executionBanner, setExecutionBanner] = useState("");
  const [telemetryModal, setTelemetryModal] = useState(null);
  const [nowUtc, setNowUtc] = useState(new Date());

  // Tick UTC clock every second
  useEffect(() => {
    const id = setInterval(() => {
      setNowUtc(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // Load schedule options on mount AND restore last run if present
  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const res = await apiClient(`${API_BASE}/schedules`);
        if (!res.ok) throw new Error("Failed to load schedules");
        const data = await res.json();
        setScheduleOptions(data);

        const savedRunId = localStorage.getItem("lastRunId");
        if (savedRunId) {
          setRunId(savedRunId);
          setExecutionBanner("IN_PROGRESS");
          scheduleToast(
            "Session restored",
            "Resuming last schedule execution tracking.",
            "success"
          );
        }
      } catch (err) {
        console.error(err);
        scheduleToast("Error", "Could not load schedules from backend", "error");
      }
    };
    fetchSchedules();
  }, []);

  const fetchScheduleEntries = async (filename) => {
    try {
      const res = await apiClient(
        `${API_BASE}/schedules/${encodeURIComponent(filename)}`
      );
      if (!res.ok) throw new Error("Failed to load schedule");
      const data = await res.json();
      const entries = data.entries || [];
      setBaseEntries(entries);
      setIsEditing(false);
      setGeneratedEntries([]);
      setGeneratedFilename("");
      setDelays(new Array(entries.length).fill(0));
      const now = new Date();
      const iso = new Date(now.getTime() - now.getMilliseconds())
        .toISOString()
        .slice(0, 19);
      setStartTime(iso);
    } catch (err) {
      console.error(err);
      scheduleToast("Error", "Could not load schedule file", "error");
    }
  };

  const handleScheduleChange = async (selectedOption) => {
    const filename = selectedOption ? selectedOption.value : "";
    setSelectedSchedule(filename);
    if (!filename) {
      setBaseEntries([]);
      setGeneratedEntries([]);
      setGeneratedFilename("");
      setIsEditing(false);
      return;
    }
    await fetchScheduleEntries(filename);
  };

  const handleDelayChange = (idx, value) => {
    const v = value === "" ? 0 : parseInt(value, 10) || 0;
    setDelays((prev) => {
      const copy = [...prev];
      copy[idx] = v;
      return copy;
    });
  };

  const handleGenerate = async () => {
    if (!selectedSchedule) {
      scheduleToast("No schedule", "Select a schedule file first", "error");
      return;
    }
    if (!startTime) {
      scheduleToast("Start time missing", "Enter a starting execution time", "error");
      return;
    }
    if (baseEntries.length === 0) {
      scheduleToast("Empty schedule", "Selected schedule has no commands", "error");
      return;
    }

    const isoStart = isoFromLocalDatetime(startTime);
    setLoadingGenerate(true);

    try {
      const payload = {
        schedule_name: selectedSchedule,
        start_time_utc: isoStart,
        delays:
          delays.length === baseEntries.length
            ? delays
            : new Array(baseEntries.length).fill(0),
      };

      const res = await apiClient(`${API_BASE}/schedules/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(errBody.detail || "Failed to generate schedule");
      }
      const data = await res.json();
      setGeneratedEntries(data.entries || []);
      setGeneratedFilename(data.generated_filename);
      scheduleToast("Schedule generated", "New schedule file created successfully");
    } catch (err) {
      console.error(err);
      scheduleToast("Error", err.message || "Failed to generate schedule", "error");
    } finally {
      setLoadingGenerate(false);
    }
  };

  const handleUpload = async () => {
    if (!generatedFilename) {
      scheduleToast("No generated file", "Generate a schedule first", "error");
      return;
    }
    setLoadingUpload(true);
    try {
      const res = await apiClient(`${API_BASE}/schedules/upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ generated_filename: generatedFilename }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Scheduler script failed");
      }
      scheduleToast("Upload complete", "Scheduler script ran successfully 🎯");

      if (data.run_id) {
        setRunId(data.run_id);
        localStorage.setItem("lastRunId", data.run_id);
      }

      if (data.commands) {
        const rows = data.commands.map((cmd) => ({
          commandName: cmd.commandName,
          lookUpTable: cmd.lookUpTable,
          scheduledTimestamp: cmd.scheduledTimestamp,
          delay: cmd.delay,
          receivedTimestamp: cmd.receivedTimestamp,
          status: cmd.status,
          telemetry: cmd.telemetry,
        }));
        setRightTableRows(rows);
      }

      setExecutionBanner("IN_PROGRESS");
    } catch (err) {
      console.error(err);
      scheduleToast("Error", err.message || "Error running scheduler script", "error");
    } finally {
      setLoadingUpload(false);
    }
  };

  const handleClearExecution = () => {
    setRightTableRows([]);
    setRunId(null);
    setExecutionBanner("");
    setTelemetryModal(null);
    localStorage.removeItem("lastRunId");
  };

  useEffect(() => {
    if (!runId) return;
    let cancelled = false;
    const tick = async () => {
      try {
        const res = await apiClient(`${API_BASE}/runs/${runId}`);
        if (res.status === 404) {
          if (!cancelled) {
            localStorage.removeItem("lastRunId");
            setRunId(null);
            setExecutionBanner("");
            scheduleToast(
              "Session expired",
              "Backend no longer has this run (server restart?).",
              "error"
            );
          }
          return;
        }

        if (!res.ok) return;
        const data = await res.json();
        if (cancelled) return;

        if (data.commands) {
          const rows = data.commands.map((cmd) => ({
            commandName: cmd.commandName,
            lookUpTable: cmd.lookUpTable,
            scheduledTimestamp: cmd.scheduledTimestamp,
            delay: cmd.delay,
            receivedTimestamp: cmd.receivedTimestamp,
            status: cmd.status,
            telemetry: cmd.telemetry,
          }));
          setRightTableRows(rows);
        }

        if (data.all_done) {
          setExecutionBanner("COMPLETED");
        } else {
          setExecutionBanner("IN_PROGRESS");
        }
      } catch (err) {
        console.error(err);
      }
    };

    const interval = setInterval(tick, 500);
    tick();
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [runId]);

  const previewEntries = generatedEntries.length > 0 ? generatedEntries : baseEntries;

  const openTelemetryModal = (row) => {
    if (!row.telemetry) return;
    setTelemetryModal({
      commandName: row.commandName,
      lookUpTable: row.lookUpTable,
      telemetry: row.telemetry,
    });
  };

  const closeTelemetryModal = () => setTelemetryModal(null);

  const scheduleSelectOptions = scheduleOptions.map((opt) => ({
    value: opt.filename,
    label: opt.label,
  }));

  return (
    <div className="su-whole-wrapper">
      <ScheduleBuilder
        scheduleOptions={scheduleOptions}
        scheduleSelectOptions={scheduleSelectOptions}
        selectedSchedule={selectedSchedule}
        handleScheduleChange={handleScheduleChange}
        generatedEntries={generatedEntries}
        generatedFilename={generatedFilename}
        baseEntries={baseEntries}
        setIsEditing={setIsEditing}
        isEditing={isEditing}
        startTime={startTime}
        setStartTime={setStartTime}
        previewEntries={previewEntries}
        delays={delays}
        handleDelayChange={handleDelayChange}
        handleGenerate={handleGenerate}
        loadingGenerate={loadingGenerate}
        loadingUpload={loadingUpload}
        handleUpload={handleUpload}
      />
      <div className="su-panel-right">
        <div className="su-section-title-row">
          <div className="su-header">Execution status</div>
          {executionBanner === "COMPLETED" && rightTableRows.length > 0 && (
            <button
              className="su-btn su-btn-ghost su-btn-small"
              type="button"
              onClick={handleClearExecution}
            >
              Clear session
            </button>
          )}
        </div>
        {executionBanner && (
          <div className="su-execution-banner">
            {executionBanner === "IN_PROGRESS"
              ? "Execution of schedule file in progress…"
              : "Schedule execution completed."}
          </div>
        )}
        {rightTableRows.length === 0 ? (
          <div className="su-right-placeholder">
            {runId
              ? "Restoring run… if you just refreshed, execution data will appear as soon as telemetry is polled."
              : "Upload a generated schedule on the left to populate this execution table and start telemetry polling."}
          </div>
        ) : (
          <ScheduleRunSheet
            rightTableRows={rightTableRows}
            openTelemetryModal={openTelemetryModal}
          />

        )}
      </div>
      {telemetryModal && (
        <ScheduleTelemetry
          closeTelemetryModal={closeTelemetryModal}
          telemetryModal={telemetryModal}
        />
      )}
    </div>
  );
}

export default ScheduleUploadList;
