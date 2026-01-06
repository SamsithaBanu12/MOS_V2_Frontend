import React, { useState, useEffect, useRef } from "react";
import { formatClock } from "../../utils/utils";

const TelemetryOverlay = ({ data, loading, error, simulatedTime, passes }) => {
    const [currentPos, setCurrentPos] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isVisible, setIsVisible] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState(null); // null = use CSS default (right corner)
    const dragOffset = useRef({ x: 0, y: 0 });
    const hudRef = useRef(null);

    // Sync Telemetry Data
    useEffect(() => {
        if (!data || !data.positions.length) return;

        const updatePosition = () => {
            const now = simulatedTime ?? new Date();
            setCurrentTime(now); // Update local time state
            const nowMs = now.getTime();

            let closest = data.positions[0];
            let minDiff = Math.abs(new Date(closest.timestamp).getTime() - now);

            for (const pos of data.positions) {
                const diff = Math.abs(new Date(pos.timestamp).getTime() - now);
                if (diff < minDiff) {
                    minDiff = diff;
                    closest = pos;
                }
            }
            setCurrentPos(closest);
        };

        updatePosition();
        // Only run interval in live mode
        if (simulatedTime === null || simulatedTime === undefined) {
            const interval = setInterval(updatePosition, 1000);
            return () => clearInterval(interval);
        }
    }, [data, simulatedTime]);

    // Draggable Logic
    const handleMouseDown = (e) => {
        if (hudRef.current) {
            const rect = hudRef.current.getBoundingClientRect();
            setIsDragging(true);
            // Initialize position from current element position if not yet set
            const currentX = position?.x ?? rect.left;
            const currentY = position?.y ?? rect.top;
            dragOffset.current = {
                x: e.clientX - currentX,
                y: e.clientY - currentY
            };
            // Set position to enable absolute positioning
            if (!position) {
                setPosition({ x: currentX, y: currentY });
            }
        }
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                setPosition({
                    x: e.clientX - dragOffset.current.x,
                    y: e.clientY - dragOffset.current.y
                });
            }
        };

        const handleMouseUp = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    if (loading && !data) return <div className="overlay-status">INITIALIZING SYSTEMS...</div>;
    if (error) return <div className="overlay-status error">SYSTEM ERROR: {error}</div>;
    if (!data || !currentPos) return null;

    const velocityMag = Math.sqrt(
        Math.pow(currentPos.velocity_km_s.x, 2) +
        Math.pow(currentPos.velocity_km_s.y, 2) +
        Math.pow(currentPos.velocity_km_s.z, 2)
    ).toFixed(2);

    // Calculate station status based on current time
    const stationStatus = (() => {
        if (!passes) return { active: null, upcoming: null, last: null };
        const nowMs = currentTime.getTime();

        const active = passes.find(p => nowMs >= p.aos.getTime() && nowMs <= p.los.getTime());
        const upcoming = passes.find(p => p.aos.getTime() > nowMs);
        const pastPasses = passes.filter(p => p.los.getTime() < nowMs);
        const last = pastPasses.length > 0 ? pastPasses[pastPasses.length - 1] : null;

        return { active, upcoming, last };
    })();

    return (
        <>
            <button
                className={`hud-toggle-btn ${isVisible ? 'active' : ''}`}
                onClick={() => setIsVisible(!isVisible)}
                title={isVisible ? "Hide HUD" : "Show HUD"}
            >
                {isVisible ? "✕" : "HUD"}
            </button>

            {isVisible && (
                <div
                    ref={hudRef}
                    className="telemetry-dashboard"
                    style={position ? { left: position.x, top: position.y, right: 'auto' } : { right: 24, top: 24, left: 'auto' }}
                >
                    <div className="dashboard-header" onMouseDown={handleMouseDown} style={{ cursor: "move" }}>
                        <div className="status-dot"></div>
                        <span className="satellite-id">{data.satellite_name}</span>
                        <span className="live-tag">LIVE</span>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <label>LAT</label>
                            <div className="value">{currentPos.latitude.toFixed(4)}°</div>
                        </div>
                        <div className="stat-card">
                            <label>LON</label>
                            <div className="value">{currentPos.longitude.toFixed(4)}°</div>
                        </div>
                        <div className="stat-card">
                            <label>ALT</label>
                            <div className="value">{currentPos.altitude_km.toFixed(2)}km</div>
                        </div>
                        <div className="stat-card">
                            <label>VEL</label>
                            <div className="value">{velocityMag}km/s</div>
                        </div>
                    </div>

                    {/* Ground Station Info */}
                    <div style={{ marginTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '12px' }}>
                        <div style={{ fontSize: '10px', color: '#444', marginBottom: '8px', letterSpacing: '1px', fontWeight: '800' }}>GROUND STATIONS</div>

                        <div style={{ marginBottom: '6px', fontSize: '11px', fontFamily: 'monospace' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888' }}>ACTIVE</div>
                            {stationStatus.active ? (
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#0f0', fontWeight: 'bold' }}>{stationStatus.active.stationId}</span>
                                    <span style={{ color: '#0f0' }}>-{formatClock((stationStatus.active.los - currentTime) / 1000)}</span>
                                </div>
                            ) : (
                                <span style={{ color: '#555' }}>--</span>
                            )}
                        </div>

                        <div style={{ marginBottom: '6px', fontSize: '11px', fontFamily: 'monospace' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888' }}>UPCOMING</div>
                            {stationStatus.upcoming ? (
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#0ff', fontWeight: 'bold' }}>{stationStatus.upcoming.stationId}</span>
                                    <span style={{ color: '#0ff' }}>+{formatClock((stationStatus.upcoming.aos - currentTime) / 1000)}</span>
                                </div>
                            ) : (
                                <span style={{ color: '#555' }}>--</span>
                            )}
                        </div>

                        <div style={{ fontSize: '11px', fontFamily: 'monospace' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888' }}>LAST</div>
                            {stationStatus.last ? (
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#ccc', fontWeight: 'bold' }}>{stationStatus.last.stationId}</span>
                                    <span style={{ color: '#888' }}>{stationStatus.last.los.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
                                </div>
                            ) : (
                                <span style={{ color: '#555' }}>--</span>
                            )}
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};

export default TelemetryOverlay;