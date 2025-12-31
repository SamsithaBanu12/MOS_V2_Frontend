import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./UploadPage.space.css";

function TelemetryScreen() {
  const [activeTab, setActiveTab] = useState("EPS");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/netra/telemetry-screen/eps")) {
      setActiveTab("EPS");
    } else if(location.pathname.includes("/netra/telemetry-screen/obc")) {
      setActiveTab("OBC");
    }else{
        setActiveTab("THRUSTER")
    }
  }, [location.pathname]);

  return (
    <>
      <div className="up-tabs">
        <button
          className={`up-tab ${activeTab === "EPS" ? "active" : ""}`}
          onClick={() => navigate("eps")}
          type="button"
        >
          EPS
        </button>

        <button
          className={`up-tab ${activeTab === "OBC" ? "active" : ""}`}
          onClick={() => navigate("obc")}
          type="button"
        >
          OBC
        </button>
        {/* <button
          className={`up-tab ${activeTab === "THRUSTER" ? "active" : ""}`}
          onClick={() => navigate("thruster")}
          type="button"
        >
          THRUSTER
        </button> */}
      </div>

      <Outlet />
    </>
  );
}

export default TelemetryScreen;
