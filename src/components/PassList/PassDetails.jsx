const PassDetails = ({ selectedPassage }) => {

    if (!selectedPassage) return null;

    return (
        <div className="selected-pass-details">
            {Object.entries(selectedPassage).map(([key, value], index) => (
                <div key={index}>
                    <div className="pl-item-row1">
                        <div className="pl-item-name">
                            <div className="pl-mono" style={{ textTransform: 'capitalize' }}>
                                {key}
                            </div>
                        </div>
                        <div className="pl-item-value">
                            <div className="pl-chip1">
                                {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default PassDetails;