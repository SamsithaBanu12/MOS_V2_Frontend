import React, { useEffect, useMemo, useState } from 'react'
import './ConnectPage.css'
import { openBridgeWS } from '../utils/api/ws'
import { getStatus, connectBridge, disconnectBridge } from '../utils/api/api'
import StationSelector from '../components/StationSelector/StationSelector'
import ConnectionPanel from '../components/ConnectionPanel/ConnectionPanel'
import StatsPanel from '../components/StatsPanel/StatsPanel'

// Health overlay
import HealthDrawer from '../Components/HealthDrawer/HealthDrawer'
import { useGettingConnectionStatus } from '../utils/hooks'
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
    setConnected,
  } = useStation();

  const [status, setStatus] = useState({
    a_connected: false,
    b_connected: false,
    counters: {},
  });
  const [wsReady, setWsReady] = useState(false);
  const [healthOpen, setHealthOpen] = useState(false);

  // ⬅ backend polling / hook
  useGettingConnectionStatus(stationId, setStatus);

  // 🔌 WS lifecycle
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
          getStatus(stationId).then(setStatus).catch(() => {});
        }
      },
    });

    return () => ws.close();
  }, [stationId]);

  const handleStationChange = (id, meta) => {
    setStationId(id);
    setStationMeta(meta || null);
  };

  const handleConnect = async () => {
    if (!stationId) return;
    await connectBridge(stationId);
  };

  const handleDisconnect = async () => {
    if (!stationId) return;
    await disconnectBridge(stationId);
  };

  // ✅ single source of truth for "connected"
  useEffect(() => {
    setConnected(
      Boolean(status?.a_connected && status?.b_connected)
    );
  }, [status, setConnected]);

  console.log('station meta',stationMeta);

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
