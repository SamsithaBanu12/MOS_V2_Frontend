import React, { useState, useEffect, useRef } from "react";

const TelemetryOverlay = ({ data, loading, error, simulatedTime }) => {
    const [currentPos, setCurrentPos] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState(null); // null = use CSS default (right corner)
    const dragOffset = useRef({ x: 0, y: 0 });
    const hudRef = useRef(null);

    // Sync Telemetry Data
    useEffect(() => {
        if (!data || !data.positions.length) return;

        const updatePosition = () => {
            const now = (simulatedTime ?? new Date()).getTime();
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

                    <div className="dashboard-footer">
                        <div className="timestamp">{new Date(currentPos.timestamp).toLocaleTimeString()}</div>
                        <div className="source">SRC: {data.source.toUpperCase()}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TelemetryOverlay;