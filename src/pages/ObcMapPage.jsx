import React, { useState } from "react";
import TelemetryScreen from "../components/TelemetryScreen/TelemetryScreen";

function ObcMapPage() {
  const telemetryUrl =
    "//localhost:3001/d/gtwv27/obc?orgId=1&from=now-6h&to=now&timezone=browser";

  return (
    <TelemetryScreen
     telemetryUrl={telemetryUrl}
     title={'OBC Telemetry Dashboard'} />
  );
}

export default ObcMapPage;