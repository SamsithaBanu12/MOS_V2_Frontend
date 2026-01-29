import { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import commandSelectStyles from "../../customStyles/customStyle";
import { editPassParameters, PassageStatusTypes } from "../../data";

const EditPassDetails = ({ setAddContactClicked, selectedPassage }) => {
    const [passageStatus, setPassageStatus] = useState(PassageStatusTypes[0]?.label);
    const [filteredPassage, setFilteredPassage] = useState([]);


    useEffect(() => {
        const filteredPassageDetails = Object.entries(selectedPassage)?.filter(([key, value]) => editPassParameters?.includes(key));
        setFilteredPassage(filteredPassageDetails);
    }, [selectedPassage])

    const selectedPassageStatus = useMemo(() => {
        return PassageStatusTypes.find((opt) => opt?.label === passageStatus) || null;
    }, [PassageStatusTypes, passageStatus]);

    const handleEditPassage = async () => {
        console.log('edit', selectedPassageStatus)
    }

    return (
        <>
            <div className="pass-book-input-wrapper1">
                {filteredPassage?.map(([key, value]) => (
                    <div className="pass-book-param-row" key={key}>
                        <span>{key}</span>
                        <input
                            className="pass-book-param-row-input"
                            type="text"
                            value={value}
                            readOnly
                        />
                    </div>
                ))}

                <div className="pass-book-param-row">
                    <span>Passage Status</span>
                    <Select
                        classNamePrefix="pass-book-select"
                        options={PassageStatusTypes}
                        value={selectedPassageStatus}
                        onChange={(option) => setPassageStatus(option?.label ?? "")}
                        isSearchable
                        styles={commandSelectStyles}
                    />
                </div>
            </div>
            <div className="pl-book-btn-wrapper">
                <button
                    className="pl-book-btn"
                    onClick={() => handleEditPassage()}
                >
                    Edit Pass
                </button>
            </div>
        </>
    );
};
export default EditPassDetails;