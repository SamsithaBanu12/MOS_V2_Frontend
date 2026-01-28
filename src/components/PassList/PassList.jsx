import { useEffect, useState } from "react";
import { useSidebar } from "../../context/SidebarContext";
import './PassList.css'
import PassContactList from "./PassContactList";
import PassType from "./PassType";
import PassBookContactForm from "./PassBookContactForm";

const PassList = ({ passages }) => {
    const { collapsed } = useSidebar();
    const [addContactClicked, setAddContactClicked] = useState(false);
    const [filter, setFilter] = useState("");
    const [passFilterType, setPassFilterType] = useState("list");
    const [payload, setPayload] = useState(
        {
            "e918a6b4f71961df50db0bfb2e6153d2": {
                "policyType": "onDemand15min",
                "start": "2023-09-26T15:41:01Z",
                "end": "2023-09-26T15:51:11Z"
            },
            "5c94bbdcf623b35120d9018d17a28e26": {
                "policyType": "onDemand48h",
                "start": "2023-09-26T15:41:01Z",
                "end": "2023-09-26T15:51:11Z"
            }
        }
    )
    const [lengthData, setLengthData] = useState({
        Contacts: 0,
        Scheduled: 0,
        Failed: 0,
        Complete: 0,
        Executing: 0,
    });

    useEffect(() => {
        setLengthData({
            Contacts: passages?.length,
            Scheduled: passages?.filter((pass) => pass?.passageStatus === "Scheduled")?.length,
            Failed: passages?.filter((pass) => pass?.passageStatus === "Failed")?.length,
            Complete: passages?.filter((pass) => pass?.passageStatus === "Complete")?.length,
            Executing: passages?.filter((pass) => pass?.passageStatus === "Executing")?.length,
        });
    }, [passages]);

    return (
        <div className="pl-wrapper">
            <div className="pl-card-wrapper">
                <div className={`pl-card ${collapsed ? "collapsed" : ""}`}>
                    <div className="pl-card-head">
                        <div className="pl-title">Pass Contacts</div>
                        <PassType passFilterType={passFilterType} setPassFilterType={setPassFilterType} />
                    </div>
                    <div className="pl-controls">
                        <div className="pl-controls-left">
                            <input
                                className="pl-input"
                                placeholder={'Enter Pass'}
                                value={filter}
                                onChange={(e) => {
                                    setFilter(e.target.value);
                                }}
                            />
                            <div className="pl-tag"><span className="pl-tag-count">{lengthData?.Contacts}</span> <div>Contacts</div>
                            </div>
                            <div className="pl-tag"><span className="pl-tag-count">{lengthData?.Scheduled}</span> <div>Scheduled</div>
                            </div>
                            <div className="pl-tag"><span className="pl-tag-count">{lengthData?.Failed}</span> <div>Failed</div>
                            </div>
                            <div className="pl-tag"><span className="pl-tag-count">{lengthData?.Complete}</span> <div>Complete</div>
                            </div>
                            <div className="pl-tag"><span className="pl-tag-count">{lengthData?.Executing}</span> <div>Executing</div>
                            </div>
                        </div>
                        <button
                            className="pl-refresh-btn"
                            onClick={() => setAddContactClicked(true)}
                        >
                            Add Contact
                        </button>
                        {/* <Select
                            classNamePrefix="pl-command-select"
                            options={filteredFilterTypes()}
                            value={filterTypeOption}
                            onChange={(option) => setFilterType(option?.label ?? "Time Range")}
                            isSearchable
                            styles={timelineSelectStyles}
                        />
                        {filterType === "Time Range" && (
                            <Select
                                classNamePrefix="pl-command-select"
                                options={TimeLineFilter}
                                value={timelineFilterOption}
                                onChange={(option) => setTimeLineFilter(option?.label ?? "all")}
                                isSearchable
                                styles={timelineSelectStyles}
                            />
                        )}
                        {filterType === "Telemetry Type" && activeTab === "TLM" && (
                            <Select
                                classNamePrefix="pl-command-select"
                                options={TelemetryType}
                                value={telemetryTypeOption}
                                onChange={(option) => setTelemetryType(option?.label ?? "Telemetry")}
                                isSearchable
                                styles={timelineSelectStyles}
                            />
                        )}
                        {filterType === "Commands Type" && activeTab === "CMD" && (
                            <Select
                                classNamePrefix="pl-command-select"
                                options={CommandsType}
                                value={commandTypeOption}
                                onChange={(option) => setCommandType(option?.label ?? "Commands")}
                                isSearchable
                                styles={timelineSelectStyles}
                            />
                        )} */}
                    </div>
                    <PassContactList
                        passages={passages}
                    />
                </div>
            </div>
            {addContactClicked && <PassBookContactForm payload={payload} setPayload={setPayload} addContactClicked={addContactClicked} setAddContactClicked={setAddContactClicked} />}
        </div>
    );
};
export default PassList;