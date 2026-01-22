import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";

import HomePage from "./pages/HomePage";
import CommandControlPage from "./pages/CommandControlPage";
import CommandSenderPage from "./pages/CommandSenderPage";
import ConnectionPage from "./pages/ConnectionPage";
import UploadPage from "./pages/UploadPage";
import ScheduleUploadPage from "./pages/ScheduleUploadPage";
import FileUploadPage from "./pages/FileUploadPage";
import ProceduresPage from "./pages/ProceduresPage";
import TranmissionHistoryPage from "./pages/TransmissionHistoryPage";

import KalpassPage from "./pages/KalpassPage";
import OrderPage from "./pages/OrderPage";
import StagingArea from "./pages/StagingArea";
import OnboardPage from "./pages/OnboardPage";
import MasterTimeline from "./pages/MasterTimeline";

import NetraPage from "./pages/NetraPage";
import EpsMapPage from "./pages/EpsMapPage";
import ObcMapPage from "./pages/ObcMapPage";
import ThrusterPage from "./pages/ThrusterPage";
import AlertsPage from "./pages/AlertsPage";
import TelemetryScreen from "./pages/TelemetryScreen";
import GroundTrackPage from "./pages/GroundTrackPage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
// import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Routes>
        {/* <Route element={<ProtectedRoute />}> */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/c2" element={<CommandControlPage />} />
          <Route path="/c2/command-sender" element={<CommandSenderPage />} />
          <Route path="/c2/connection" element={<ConnectionPage />} />
          <Route path="/c2/upload" element={<UploadPage />}>
            <Route index element={<Navigate to="schedule-upload" replace />} />
            <Route path="schedule-upload" element={<ScheduleUploadPage />} />
            <Route path="file-upload" element={<FileUploadPage />} />
          </Route>
          <Route
            path="/c2/schedule-upload"
            element={<Navigate to="/c2/upload/schedule-upload" replace />}
          />
          <Route
            path="/c2/file-upload"
            element={<Navigate to="/c2/upload/file-upload" replace />}
          />
          <Route path="/c2/procedures" element={<ProceduresPage />} />
          <Route
            path="/c2/transmission-history"
            element={<TranmissionHistoryPage />}
          />
          <Route path="/kalpass" element={<KalpassPage />} />
          <Route path="/kalpass/order" element={<OrderPage />} />
          <Route path="/kalpass/staging" element={<StagingArea />} />
          <Route path="/kalpass/board" element={<OnboardPage />} />
          <Route path="/kalpass/master-timeline" element={<MasterTimeline />} />
          <Route path="/netra" element={<NetraPage />} />
          <Route path="/netra/telemetry-screen" element={<TelemetryScreen />}>
            <Route index element={<Navigate to="eps" replace />} />
            <Route path="eps" element={<EpsMapPage />} />
            <Route path="obc" element={<ObcMapPage />} />
            <Route path="thruster" element={<ThrusterPage />} />
          </Route>
          <Route
            path="/netra/eps"
            element={<Navigate to="/netra/eps" replace />}
          />
          <Route
            path="/netra/obc"
            element={<Navigate to="/netra/obc" replace />}
          />
          <Route
            path="/netra/thruster"
            element={<Navigate to="/netra/thruster" replace />}
          />
          <Route path="/netra/eps" element={<EpsMapPage />} />
          <Route path="/netra/obc" element={<ObcMapPage />} />
          <Route path="/netra/thruster" element={<ThrusterPage />} />
          <Route path="/netra/ground-track" element={<GroundTrackPage />} />
          <Route path="/netra/alerts" element={<AlertsPage />} />
          {/* </Route> */}
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
