import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./UploadPage.space.css";

function UploadPage() {
  const [activeTab, setActiveTab] = useState("SCHEDULE");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/c2/upload/file-upload")) {
      setActiveTab("FILE");
    } else {
      // covers /c2/upload and /c2/upload/schedule-upload
      setActiveTab("SCHEDULE");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="up-tabs">
        <button
          className={`up-tab ${activeTab === "SCHEDULE" ? "active" : ""}`}
          onClick={() => navigate("schedule-upload")}
          type="button"
        >
          Schedule Upload
        </button>

        <button
          className={`up-tab ${activeTab === "FILE" ? "active" : ""}`}
          onClick={() => navigate("file-upload")}
          type="button"
        >
          File Upload
        </button>
      </div>

      <Outlet />
    </>
  );
}

export default UploadPage;
