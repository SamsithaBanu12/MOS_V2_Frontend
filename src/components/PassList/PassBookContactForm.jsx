import Select from "react-select";
import commandSelectStyles from "../../customStyles/customStyle";
import { policyTypes } from "../../data";
import { useMemo, useState } from "react";

const PassBookContactForm = ({ payload, setPayload, addContactClicked, setAddContactClicked }) => {
    const [policyType, setPolicyType] = useState(policyTypes[0]?.label);
    const [groundStationId, setGroundStationId] = useState('');
    const selectedPolicyType = useMemo(() => {
        return policyTypes.find((opt) => opt?.label === policyType) || null;
    }, [policyTypes, policyType]);
    return (
        <div
            className="pl-book-modal-backdrop"
            onClick={() => setAddContactClicked(false)}
        >
            <div
                className="pl-book-modal-card"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="pl-book-modal-head">
                    <div className="pl-book-modal-title">
                        Book Pass Contact
                    </div>
                    <button
                        className="pl-tiny-btn"
                        onClick={() => setAddContactClicked(false)}
                        aria-label="Close"
                    >
                        Close
                    </button>
                </div>
                <div className="pass-book-input-wrapper">
                    <div className="pass-book-param-row">
                        <span>GroundStation ID</span>
                        <input
                            className="pass-book-param-row-input"
                            type="number"
                            value={groundStationId}
                            onChange={(e) => setGroundStationId(Number(e.target.value))}
                        />
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
                </div>
            </div>
        </div>
    );
};
export default PassBookContactForm;