
const PassContactList = ({ passages }) => {
    console.log('pass', passages)
    return (
        <div className="pl-table-wrap">
            <table className="pl-table">
                <thead>
                    <tr>
                        <th>Satelite</th>
                        <th>GS Id</th>
                        <th>Passage Id</th>
                        <th>Status</th>
                        <th>AOS</th>
                        <th>LOS</th>
                        {/* <th>Source</th> */}
                        <th>Edit</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {passages.length === 0 ? (
                        <tr className="pl-muted">
                            No Pass contacts
                        </tr>
                    ) : (
                        [...passages].map((r, i) => (
                            <tr key={i}>
                                <td className="pl-mono"> {r?.satelliteID}</td>
                                <td className="pl-mono"> {r?.groundStationID}</td>
                                <td className="pl-mono"> {r?.passageID}</td>
                                <td className="pl-mono"> {r?.passageStatus}</td>
                                <td className="pl-mono"> {r?.AOS}</td>
                                <td className="pl-mono"> {r?.LOS}</td>
                                {/* <td className="pl-mono"> {r?.source}</td> */}
                                <td>
                                    <button className="edit-btn" >edit</button>
                                </td>
                                <td>
                                    <button className="view-btn" >view</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

        </div>
    )
};
export default PassContactList;