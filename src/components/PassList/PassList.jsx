import { useEffect, useMemo, useState } from "react";
import { useSidebar } from "../../context/SidebarContext";
import './PassList.css'
import PassContactList from "./PassContactList";
import PassType from "./PassType";
import PassRightSidebar from "./PassRightsidebar.jsx";
import { PassFilterTypes, PassageStatusTypes, PassTimeFilterOptions } from "../../data.js";
import { timelineSelectStyles } from "../../customStyles/customStyle.jsx";
import Select from "react-select";

const PassList = ({ passages, gsMappingData, satelliteMappingData }) => {
    const { collapsed } = useSidebar();
    const [addContactClicked, setAddContactClicked] = useState(false);
    const [filteredPassages, setFilteredPassages] = useState([]);
    const [filter, setFilter] = useState("");
    const [passFilterType, setPassFilterType] = useState("list");
    const [activeFilterCategory, setActiveFilterCategory] = useState("All Passages");
    const [selectedFilterValue, setSelectedFilterValue] = useState(null);

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

    // Combined filtering logic
    useEffect(() => {
        let result = passages || [];

        // 1. Filter by Search Text (Passage ID)
        if (filter) {
            result = result.filter((pass) =>
                pass?.passageID?.toLowerCase()?.includes(filter?.toLowerCase())
            );
        }

        // 2. Filter by Dropdown selection
        if (selectedFilterValue && activeFilterCategory !== "All Passages") {
            const val = selectedFilterValue.value;
            if (activeFilterCategory === "Satellite Names") {
                result = result.filter(pass => pass.satelliteID === val);
            } else if (activeFilterCategory === "GS Names") {
                result = result.filter(pass => pass.groundStationID === val);
            } else if (activeFilterCategory === "Passage Status") {
                result = result.filter(pass => pass.passageStatus === selectedFilterValue.label);
            } else if (activeFilterCategory === "Time") {
                const now = new Date();
                const todayUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());

                result = result.filter(pass => {
                    const passDate = new Date(pass.AOS);
                    const passDayUTC = Date.UTC(passDate.getUTCFullYear(), passDate.getUTCMonth(), passDate.getUTCDate());
                    const diffDays = Math.round((passDayUTC - todayUTC) / (1000 * 60 * 60 * 24));

                    switch (val) {
                        case 'today': return diffDays === 0;
                        case '2_days_ago': return diffDays >= -2 && diffDays < 0;
                        case '1_week_ago': return diffDays >= -7 && diffDays < 0;
                        case '1_month_ago': return diffDays >= -30 && diffDays < 0;
                        case '2_days_after': return diffDays > 0 && diffDays <= 2;
                        case '1_week_after': return diffDays > 0 && diffDays <= 7;
                        default: return true;
                    }
                });
            }
        }

        setFilteredPassages(result);
    }, [filter, passages, activeFilterCategory, selectedFilterValue]);

    const activeFilterCategoryOption = useMemo(() => {
        return PassFilterTypes.find((opt) => opt?.label === activeFilterCategory) || null;
    }, [activeFilterCategory]);

    // Get options for the secondary dropdown based on the active category
    const getSecondaryOptions = () => {
        if (activeFilterCategory === "Satellite Names") {
            return satelliteMappingData?.map(s => ({ label: s.name, value: s.value })) || [];
        }
        if (activeFilterCategory === "GS Names") {
            return gsMappingData?.map(g => ({ label: g.name, value: g.value })) || [];
        }
        if (activeFilterCategory === "Passage Status") {
            return PassageStatusTypes;
        }
        if (activeFilterCategory === "Time") {
            return PassTimeFilterOptions;
        }
        return [];
    };

    // Automatically select the first option when category changes (except for 'All Passages')
    useEffect(() => {
        if (activeFilterCategory === "All Passages") {
            setSelectedFilterValue(null);
            return;
        }
        const options = getSecondaryOptions();
        if (options.length > 0 && !selectedFilterValue) {
            setSelectedFilterValue(options[0]);
        }
    }, [activeFilterCategory, satelliteMappingData, gsMappingData, selectedFilterValue]);

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
                                placeholder={'Enter Passage ID...'}
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
                        <div className="pl-controls-right">

                            <button
                                className="pl-refresh-btn"
                                onClick={() => setAddContactClicked(true)}
                            >
                                Add Contact
                            </button>

                            <Select
                                classNamePrefix="pl-command-select"
                                options={PassFilterTypes}
                                value={activeFilterCategoryOption}
                                onChange={(option) => {
                                    setActiveFilterCategory(option?.label ?? "All Passages");
                                    setSelectedFilterValue(null);
                                }}
                                isSearchable
                                styles={timelineSelectStyles}
                            />
                            {activeFilterCategory !== "All Passages" && (
                                <Select
                                    classNamePrefix="pl-command-select"
                                    options={getSecondaryOptions()}
                                    value={selectedFilterValue}
                                    onChange={(option) => setSelectedFilterValue(option)}
                                    placeholder={`Select ${activeFilterCategory}...`}
                                    isSearchable
                                    styles={timelineSelectStyles}
                                />
                            )}
                        </div>
                    </div>
                    <PassContactList
                        passages={filteredPassages}
                    />
                </div>
            </div>
            {addContactClicked && <PassRightSidebar addContactClicked={addContactClicked} setAddContactClicked={setAddContactClicked} title={"Book Pass Contact"} isForAddContact />}
        </div>
    );
};
export default PassList;