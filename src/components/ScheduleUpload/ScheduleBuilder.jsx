import Select from "react-select";
import commandSelectStyles from "../../customStyles/customStyle";
import { humanFromEpoch } from "../../utils/utils";

const ScheduleBuilder =({scheduleOptions,
      scheduleSelectOptions,
      selectedSchedule,
      handleScheduleChange,
      generatedEntries,
      generatedFilename,
      baseEntries,
      setIsEditing,
      isEditing,
      startTime,
      setStartTime,
      previewEntries,
      delays,
      handleDelayChange,
      handleGenerate,
      loadingGenerate,
      loadingUpload,
      handleUpload })=>{
    return(
        <div className="su-app">
        <div className="su-header">Schedule Builder</div>
        <div className="su-card">
          <div className="su-card-header">
            <div className="su-card-title">Select schedule file</div>
            <div className="su-chip">
              <span>{scheduleOptions.length || 0} file available</span>
            </div>
          </div>
          <div className="su-flex">
            <div style={{ flex: 1 }}>
              <Select
                options={scheduleSelectOptions}
                value={
                  scheduleSelectOptions.find(
                    (opt) => opt.value === selectedSchedule
                  ) || null
                }
                onChange={handleScheduleChange}
                placeholder="Select schedule file"
                isClearable
                className="schedule-select"
                classNamePrefix="schedule-select"
                styles={commandSelectStyles}
              />
            </div>
          </div>
        </div>
        {selectedSchedule && (
          <>
            <div className="su-card" style={{ flex: 1 }}>
              <div className="su-card-header">
                <div>
                  <div className="su-card-title">
                    {generatedEntries.length > 0
                      ? "Generated schedule preview"
                      : "Current schedule preview"}
                  </div>
                  {generatedFilename && (
                    <div className="su-card-subtitle">
                      File: <code>{generatedFilename}</code>
                    </div>
                  )}
                </div>
                <button
                  className="su-btn su-btn-secondary su-btn-small"
                  type="button"
                  onClick={() => setIsEditing((v) => !v)}
                  disabled={baseEntries.length === 0}
                >
                  {isEditing ? "Done editing" : "Edit timing"}
                </button>
              </div>
              {isEditing && baseEntries.length > 0 && (
                <div className="su-time-wrapper">
                  <label className="su-field-label">
                    Start execution time (UTC, for Command #1)
                  </label>
                  <div className="su-datetime-input-wrapper">
                    <input
                      type="datetime-local"
                      step="1"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                  </div>
                </div>
              )}
              {previewEntries.length === 0 ? (
                <div className="su-card-subtitle">
                  No commands in this schedule yet.
                </div>
              ) : (
                <div className="su-scroll su-stats-table-wrap">
                  <table className="su-stats-table">
                    <thead>
                      <tr>
                        <th style={{ width: 40 }}>#</th>
                        <th style={{ width: 110 }}>Subsystem</th>
                        <th>Command</th>
                        <th>Timestamp</th>
                        <th style={{ width: 120 }}>Delay (s)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {previewEntries.map((cmd, idx) => (
                        <tr key={idx}>
                          <td className="su-num">#{idx + 1}</td>
                          <td style={{ width: 110 }} className="su-num">{cmd.subsystemName}</td>
                          <td className="su-num">{cmd.commandName}</td>
                          <td className="su-num">
                            <div className="su-delay-pill">
                              {humanFromEpoch(cmd.Timestamp)}
                            </div>
                          </td>
                          <td className="su-num">
                            {idx === 0 ? (
                              <span className="su-timestamp-human">0 (start)</span>
                            ) : isEditing ? (
                              <input
                                type="number"
                                min="0"
                                value={delays[idx] ?? 0}
                                onChange={(e) =>
                                  handleDelayChange(idx, e.target.value)
                                }
                                style={{ width: "80px" }}
                              />
                            ) : (
                              <span className="su-delay-pill1">
                                +{delays[idx] ?? 0}s
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <div className="su-button-row" style={{ marginTop: 10 }}>
                <button
                  className="su-btn su-btn-primary"
                  type="button"
                  onClick={handleGenerate}
                  disabled={loadingGenerate}
                >
                  {loadingGenerate ? "Generating…" : "Generate schedule file"}
                </button>
              </div>
            </div>
            <div className="su-button-secondary-wrapper">
              <button
                className="su-btn su-btn-secondary1"
                type="button"
                onClick={handleUpload}
                disabled={!generatedFilename || loadingUpload}
              >
                {loadingUpload
                  ? "Uploading & running…"
                  : "Upload schedule & run script"}
              </button>
            </div>
          </>
        )}
      </div>
    )
};
export default ScheduleBuilder;