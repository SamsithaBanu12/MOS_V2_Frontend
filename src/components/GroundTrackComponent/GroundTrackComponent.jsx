import { useRef, useState, useMemo, useEffect } from "react";
import { useSatelliteTrack } from "../../utils/hooks";
import CesiumMap from './CesiumMap';
import TelemetryOverlay from './TelemetryOverlay';
import "./GroundTrackComponent.css";
import { GROUND_STATIONS } from "../../data";
import { calculateContactStatus } from "../../utils/utils";

const MIN_ELEVATION = 5;

export function GroundTrackComponent() {
    const { data, loading, error } = useSatelliteTrack(500, 15);
    const mapRef = useRef(null);
    const [is3D, setIs3D] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const [visibleOrbits, setVisibleOrbits] = useState(3);
    const [simulatedTime, setSimulatedTime] = useState(null);
    const [accumulatedPasses, setAccumulatedPasses] = useState([]);

    // Calculate total orbits and time bounds from data
    const orbitInfo = useMemo(() => {
        if (!data || !data.positions.length) return { totalOrbits: 1, startTime: new Date(), endTime: new Date() };

        // Count orbits by detecting ascending nodes
        let orbitCount = 1;
        for (let i = 1; i < data.positions.length; i++) {
            const prev = data.positions[i - 1];
            const pos = data.positions[i];
            if (prev.latitude <= 0 && pos.latitude > 0) {
                orbitCount++;
            }
        }

        return {
            totalOrbits: orbitCount,
            startTime: new Date(data.positions[0].timestamp),
            endTime: new Date(data.positions[data.positions.length - 1].timestamp)
        };
    }, [data]);

    // Calculate station passes from current data slice
    const currentPasses = useMemo(() => {
        if (!data || !data.positions || !data.positions.length) return [];

        const allPasses = [];

        GROUND_STATIONS.forEach(station => {
            let inPass = false;
            let aos = null;

            data.positions.forEach((pos) => {
                const status = calculateContactStatus(
                    station.id,
                    station,
                    pos,
                    MIN_ELEVATION
                );

                if (status.inContact && !inPass) {
                    inPass = true;
                    aos = new Date(pos.timestamp);
                } else if (!status.inContact && inPass) {
                    inPass = false;
                    const los = new Date(pos.timestamp);
                    allPasses.push({
                        stationId: station.id,
                        aos,
                        los,
                        duration: (los - aos) / 1000 // seconds
                    });
                }
            });

            // Close open pass at end of data window
            if (inPass) {
                const los = new Date(data.positions[data.positions.length - 1].timestamp);
                allPasses.push({
                    stationId: station.id,
                    aos,
                    los,
                    duration: (los - aos) / 1000
                });
            }
        });

        return allPasses;
    }, [data]);

    // Merge current passes into accumulated history
    useEffect(() => {
        if (currentPasses.length === 0) return;

        setAccumulatedPasses(prev => {
            const merged = [...prev];

            currentPasses.forEach(newP => {
                // Deduplicate: Check if pass exists (same station, AOS within 15min)
                // This handles slight time shifts in data refreshes
                const existingIndex = merged.findIndex(p =>
                    p.stationId === newP.stationId &&
                    Math.abs(p.aos.getTime() - newP.aos.getTime()) < 15 * 60 * 1000
                );

                if (existingIndex >= 0) {
                    // Update existing with fresh data (optional, improves accuracy)
                    merged[existingIndex] = newP;
                } else {
                    merged.push(newP);
                }
            });

            // Sort by AOS
            return merged.sort((a, b) => a.aos - b.aos);
        });
    }, [currentPasses]);

    // Calculate time scrubber value (0-100)
    const timeSliderValue = useMemo(() => {
        const currentTime = simulatedTime ?? new Date();
        const range = orbitInfo.endTime.getTime() - orbitInfo.startTime.getTime();
        if (range === 0) return 50;
        const elapsed = currentTime.getTime() - orbitInfo.startTime.getTime();
        return Math.max(0, Math.min(100, (elapsed / range) * 100));
    }, [simulatedTime, orbitInfo]);

    const handleTimeSliderChange = (value) => {
        const range = orbitInfo.endTime.getTime() - orbitInfo.startTime.getTime();
        const newTime = new Date(orbitInfo.startTime.getTime() + (value / 100) * range);
        setSimulatedTime(newTime);
    };

    const handleLiveClick = () => {
        setSimulatedTime(null);
    };

    const handleToggleDimension = () => {
        const nextMode = !is3D;
        setIs3D(nextMode);
        mapRef.current?.setDimension(nextMode);
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { hour12: false });
    };

    return (
        <div className="mission-control-root">
            {/* Background Map Container */}
            <div className="map-container">
                <CesiumMap
                    ref={mapRef}
                    data={data}
                    isFollowing={isFollowing}
                    visibleOrbits={visibleOrbits}
                    simulatedTime={simulatedTime}
                />
            </div>

            {/* Unified Control Dock */}
            <div className="control-dock">
                <div className="control-group">
                    <button className="ctrl-btn" onClick={() => mapRef.current?.zoomIn()} title="Zoom In">+</button>
                    <button className="ctrl-btn" onClick={() => mapRef.current?.zoomOut()} title="Zoom Out">−</button>
                </div>

                <div className="control-divider" />

                <div className="control-group">
                    <button
                        className={`ctrl-btn toggle ${isFollowing ? 'active' : ''}`}
                        onClick={() => setIsFollowing(!isFollowing)}
                        title={isFollowing ? "Stop Following" : "Follow Satellite"}
                    >
                        TRACK
                    </button>
                    <button
                        className={`ctrl-btn toggle ${is3D ? 'active' : ''}`}
                        onClick={handleToggleDimension}
                        title={is3D ? "Switch to 2D" : "Switch to 3D"}
                    >
                        {is3D ? "3D" : "2D"}
                    </button>
                </div>

                <div className="control-divider" />

                {/* Orbit Count Slider */}
                <div className="control-group orbit-slider-group">
                    <label className="slider-label">ORBITS</label>
                    <input
                        type="range"
                        className="orbit-slider"
                        min="1"
                        max={orbitInfo.totalOrbits}
                        value={visibleOrbits}
                        onChange={(e) => setVisibleOrbits(parseInt(e.target.value))}
                        title={`Showing ${visibleOrbits} future orbit(s)`}
                    />
                    <span className="slider-value">{visibleOrbits}</span>
                </div>
            </div>

            {/* Time Scrubber Bar */}
            <div className="time-scrubber-bar">
                <div className="time-display">
                    <span className="time-label">T:</span>
                    <span className="time-value">{formatTime(simulatedTime ?? new Date())}</span>
                </div>
                <input
                    type="range"
                    className="time-slider"
                    min="0"
                    max="100"
                    step="0.1"
                    value={timeSliderValue}
                    onChange={(e) => handleTimeSliderChange(parseFloat(e.target.value))}
                    title="Scrub through time"
                />
                <button
                    className={`live-btn ${simulatedTime === null ? 'active' : ''}`}
                    onClick={handleLiveClick}
                    title="Sync to live"
                >
                    {simulatedTime === null ? '● LIVE' : '○ LIVE'}
                </button>
            </div>

            {/* Mission Legend */}
            <div className="mission-legend">
                <div className="legend-item">
                    <span className="legend-line active-line"></span>
                    <label>ACTIVE ORBIT</label>
                </div>
                <div className="legend-item">
                    <span className="legend-line projected-line"></span>
                    <label>PROJECTED</label>
                </div>
                <div className="legend-item">
                    <span className="legend-line historical-line"></span>
                    <label>HISTORICAL</label>
                </div>
            </div>

            {/* Foreground UI Components */}
            <TelemetryOverlay
                data={data}
                loading={loading}
                error={error}
                simulatedTime={simulatedTime}
                passes={accumulatedPasses}
            />

            <div className="ui-attribution">
                TEROS MISSION CONTROL // GROUND TRACK ENGINE v1.1.0
            </div>
        </div>
    );
}
