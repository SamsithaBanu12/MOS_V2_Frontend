import React, { useEffect, useMemo, useState } from 'react'
import './ConnectPage.css'
import { openBridgeWS } from '../utils/api/ws'
import { connectBridge, disconnectBridge } from '../utils/api/api'
import StationSelector from '../components/StationSelector/StationSelector'
import ConnectionPanel from '../components/ConnectionPanel/ConnectionPanel'
import StatsPanel from '../components/StatsPanel/StatsPanel'
import HealthDrawer from "../components/HealthDrawer/HealthDrawer";
import BeaconData from '../components/BeaconData/BeaconData'
import { useStation } from '../context/StationContext'
import SBandHealth from '../components/SBandHealth/SBandHealth'

function ConnectionPage() {
  const {
    stationId,
    setStationId,
    stationMeta,
    setStationMeta,
    connected,
    status,
    refreshStatus,
  } = useStation();

  const [wsReady, setWsReady] = useState(false);
  const [healthOpen, setHealthOpen] = useState(false);

  useEffect(() => {
    if (!stationId) return;

    const ws = openBridgeWS({
      onOpen: () => setWsReady(true),
      onClose: () => setWsReady(false),
      onMessage: (msg) => {
        if (
          msg?.station === stationId &&
          msg.type === 'status'
        ) {
          refreshStatus();
        }
      },
    });

    return () => ws.close();
  }, [stationId, refreshStatus]);

  const handleStationChange = (id, meta) => {
    setStationId(id);
    setStationMeta(meta || null);
  };

  const handleConnect = async () => {
    if (!stationId) return;
    await connectBridge(stationId);
    refreshStatus();
  };

  const handleDisconnect = async () => {
    if (!stationId) return;
    await disconnectBridge(stationId);
    refreshStatus();
  };

  return (
    <div className="app-root">
      <div className="app-grid">
        <main className="content-grid">
          <div className="left-rail">
            <section className="panel">
              <StationSelector
                value={stationId}
                onChange={handleStationChange}
                connected={connected}
              />
            </section>

            <ConnectionPanel
              status={status}
              stationId={stationId}
              stationMeta={stationMeta}
              onConnect={handleConnect}
              onDisconnect={handleDisconnect}
            />

            <StatsPanel
              counters={status.counters || {}}
              aOk={status.a_connected}
              bOk={status.b_connected}
              stationId={stationId}
            />
          </div>

          <div className="right-rail">
            <BeaconData />
            <SBandHealth />
          </div>
        </main>

        <HealthDrawer
          open={healthOpen}
          onClose={() => setHealthOpen(false)}
          stationId={stationId}
        />
      </div>
    </div>
  );
}

export default ConnectionPage;
