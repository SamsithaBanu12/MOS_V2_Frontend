import { useState } from "react";
import PassRightSidebar from "./PassRightsidebar";

const PassContactList = ({ passages }) => {
    const [selectedPassage, setSelectedPassage] = useState(null);
    const [isViewCTAClicked, setIsViewCTAClicked] = useState(false);
    const [isEditCTAClicked, setIsEditCTAClicked] = useState(false);

    const handleViewPassage = (r) => {
        setIsViewCTAClicked(true);
        setSelectedPassage(r);
    }

    const handleEditPassage = (r) => {
        setIsEditCTAClicked(true);
        setSelectedPassage(r);
    }

    return (
        <div className="pl-table-wrap">
            <table className="pl-table">
                <thead>
                    <tr>
                        <th>Satelite</th>
                        <th>GS Name</th>
                        <th>Status</th>
                        <th>AOS</th>
                        <th>LOS</th>
                        <th>Edit</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {passages.length === 0 ? (
                        <tr className="pl-muted">
                            <td colSpan={8}>No Pass contacts</td>
                        </tr>
                    ) : (
                        [...passages].map((r, i) => (
                            <tr key={i}>
                                <td className="pl-mono">{r?.satelliteName || r?.satelliteID}</td>
                                <td className="pl-mono">{r?.groundStationName || r?.groundStationID}</td>
                                <td className="pl-mono">{r?.passageStatus}</td>
                                <td className="pl-mono">{r?.AOS}</td>
                                <td className="pl-mono">{r?.LOS}</td>
                                <td>
                                    <button className="edit-btn" onClick={() => handleEditPassage(r)}>edit</button>
                                </td>
                                <td>
                                    <button className="view-btn" onClick={() => handleViewPassage(r)}>view</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            {isEditCTAClicked && <PassRightSidebar selectedPassage={selectedPassage} title={'Edit Pass Details'} setAddContactClicked={setIsEditCTAClicked} isForAddContact={false} isForEditPassage />}
            {isViewCTAClicked && <PassRightSidebar selectedPassage={selectedPassage} title={'Pass Details'} setAddContactClicked={setIsViewCTAClicked} isForAddContact={false} isForViewPassage />}
        </div>
    )
};
export default PassContactList;