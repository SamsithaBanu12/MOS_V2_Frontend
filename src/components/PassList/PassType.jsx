const PassType = ({ setPassFilterType, passFilterType }) => {
    return (
        <div className="pass-type-wrapper">
            <div className={`pass-type-option ${passFilterType === "list" ? "active" : ""}`} onClick={() => setPassFilterType("list")}>List</div>
            <div className={`pass-type-option ${passFilterType === "timeline" ? "active" : ""}`} onClick={() => setPassFilterType("timeline")}>TimeLine</div>
        </div>
    );
};

export default PassType;