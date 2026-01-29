import { useMemo, useState } from "react";
import Select from "react-select";
import commandSelectStyles from "../../customStyles/customStyle";
import { policyTypes } from "../../data";
import { bookPassages } from "../../utils/api";
import toast from "react-hot-toast";

const PassBookContactFrom = ({ setAddContactClicked }) => {
    const [policyType, setPolicyType] = useState(policyTypes[0]?.label);
    const [groundStationId, setGroundStationId] = useState('2f1ad3525db7061d3c4dc41d98f7f1f7');
    const [startTime, setStartTime] = useState('2026-01-28T10:41:25');
    const [endTime, setEndTime] = useState('2026-01-28T10:41:25');
    const [isAddCTAClicked, setIsAddCTAClicked] = useState(false);
    const [payload, setPayload] = useState({});

    const selectedPolicyType = useMemo(() => {
        return policyTypes.find((opt) => opt?.label === policyType) || null;
    }, [policyTypes, policyType]);

    const handleAddContact = () => {
        setIsAddCTAClicked(true);

        if (!groundStationId) return;

        const newEntry = {
            policyType: selectedPolicyType?.label ?? "",
            start: new Date(startTime).toISOString(),
            end: new Date(endTime).toISOString(),
        };

        setPayload((prev) => ({
            ...prev,
            [groundStationId]: newEntry,
        }));
    };

    const handleBookPass = async () => {
        if (!groundStationId || policyType === "" || startTime === "" || endTime === "") return;
        if (Object.entries(payload).length === 0) return;
        const data = await bookPassages(payload);
        if (data?.responseCodeText == "OK" || data?.responseCode === 200) {
            toast.success("Passages booked successfully");
            setIsAddCTAClicked(false);
            setAddContactClicked(false);
            setPayload({});
        } else {
            toast.error('Passage Booking Failed')
        }
    }
    return (
        <>
            <div className="pass-book-input-wrapper">
                <div className="pass-book-param-row">
                    <span>GroundStation ID</span>
                    <input
                        className="pass-book-param-row-input"
                        type="text"
                        value={groundStationId}
                        onChange={(e) => setGroundStationId(e.target.value)}
                    />
                </div>
                <div className="pass-book-param-row">
                    <span>Start Time</span>
                    <div className="pb-datetime-input-wrapper">
                        <input
                            type="datetime-local"
                            step="1"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />
                    </div>
                </div>
                <div className="pass-book-param-row">
                    <span>End Time</span>
                    <div className="pb-datetime-input-wrapper">
                        <input
                            type="datetime-local"
                            step="1"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                        />
                    </div>
                </div>
                <div className="pass-book-param-row">
                    <span>Policy Type</span>
                    <Select
                        classNamePrefix="pass-book-select"
                        options={policyTypes}
                        value={selectedPolicyType}
                        onChange={(option) => setPolicyType(option?.label ?? "")}
                        isSearchable
                        styles={commandSelectStyles}
                    />
                </div>
                <div className="pl-add-btn-wrapper">
                    <button
                        className="pl-add-btn"
                        onClick={() => handleAddContact()}
                    >
                        Add Contact
                    </button>
                </div>
            </div>
            <div className="pl-book-btn-wrapper">
                <button
                    className="pl-book-btn"
                    onClick={() => handleBookPass()}
                    disabled={!isAddCTAClicked}
                >
                    Book Pass
                </button>
            </div>
        </>
    );
};
export default PassBookContactFrom;