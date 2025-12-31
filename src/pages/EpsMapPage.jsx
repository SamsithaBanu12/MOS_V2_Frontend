import React, { useState } from "react";
import TelemetryScreen from "../components/TelemetryScreen/TelemetryScreen";

function EpsMapPage() {
  const telemetryUrl =
    "http://localhost:3001/d/grqhh4/eps?orgId=1&from=now-6h&to=now&timezone=browser?kiosk=tv";

  return (
    <TelemetryScreen
     telemetryUrl={telemetryUrl}
     title={'EPS Telemetry Dashboard'} />
  );
}

export default EpsMapPage;