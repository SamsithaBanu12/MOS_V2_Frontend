import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./UploadPage.space.css";

function ConnectionSetup() {
    const [activeTab, setActiveTab] = useState("Connection");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes("/c2/connection-setup/pass-listing")) {
            setActiveTab("Pass-listing");
        } else if (location.pathname.includes("/c2/connection-setup/connection")) {
            setActiveTab("Connection");
        } else {
            setActiveTab("Connection");
        }
    }, [location.pathname]);

    return (
        <>
            <div className="up-tabs">
                <button
                    className={`up-tab ${activeTab === "Connection" ? "active" : ""}`}
                    onClick={() => navigate("connection")}
                    type="button"
                >
                    Connection Details
                </button>

                <button
                    className={`up-tab ${activeTab === "Pass-listing" ? "active" : ""}`}
                    onClick={() => navigate("pass-listing")}
                    type="button"
                >
                    Pass Listing
                </button>
            </div>

            <Outlet />
        </>
    );
}

export default ConnectionSetup;
