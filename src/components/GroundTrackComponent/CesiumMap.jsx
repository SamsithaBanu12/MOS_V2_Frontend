import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import * as Cesium from "cesium";
import { GROUND_STATIONS } from "../../data";
import { getAllContactStatuses, calculateFootprintRadius } from "../../utils/utils";
import satelliteIcon from "../../assets/satellite.png";
import antennaIcon from "../../assets/satellite-dish.png";

// Visibility parameters
const MIN_ELEVATION = 5; // degrees
const MAX_ELEVATION = 45; // degrees for "optimal" contact

const CesiumMap = forwardRef(({ data, isFollowing = false, visibleOrbits, simulatedTime, onContactUpdate }, ref) => {
    const containerRef = useRef(null);
    const viewerRef = useRef(null);

    useImperativeHandle(ref, () => ({
        zoomIn: () => {
            if (viewerRef.current) {
                const viewer = viewerRef.current;
                const distance = Cesium.Cartesian3.magnitude(viewer.camera.position);
                viewer.camera.zoomIn(distance * 0.2);
            }
        },
        zoomOut: () => {
            if (viewerRef.current) {
                const viewer = viewerRef.current;
                const distance = Cesium.Cartesian3.magnitude(viewer.camera.position);
                viewer.camera.zoomOut(distance * 0.2);
            }
        },
        setDimension: (is3D) => {
            if (viewerRef.current) {
                const viewer = viewerRef.current;
                if (is3D) {
                    viewer.scene.morphTo3D(1.0);
                    viewer.scene.screenSpaceCameraController.enableRotate = true;
                    viewer.scene.screenSpaceCameraController.enableTilt = true;
                } else {
                    viewer.scene.morphTo2D(1.0);
                    viewer.scene.screenSpaceCameraController.enableRotate = false;
                    viewer.scene.screenSpaceCameraController.enableTilt = false;
                }
            }
        }
    }));

    useEffect(() => {
        if (!containerRef.current) return;

        const viewer = new Cesium.Viewer(containerRef.current, {
            sceneMode: Cesium.SceneMode.SCENE2D,
            mapProjection: new Cesium.GeographicProjection(),
            baseLayerPicker: false,
            timeline: false,
            animation: false,
            geocoder: false,
            homeButton: false,
            navigationHelpButton: false,
            sceneModePicker: false,
            fullscreenButton: false,
            infoBox: false,
            selectionIndicator: false,
            contextOptions: {
                webgl: {
                    failIfMajorPerformanceCaveat: false,
                    alpha: false,
                    antialias: true,
                    depth: true,
                    stencil: false,
                }
            }
        });

        // --- MISSION-CRITICAL IMAGERY INITIALIZATION (ORDERED) ---
        Cesium.Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_TOKEN || "";

        viewer.imageryLayers.removeAll();

        const initImagery = async () => {
            try {
                // 1. Base Satellite Imagery (Bottom Layer - Index 0)
                const baseProvider = await Cesium.IonImageryProvider.fromAssetId(2);
                if (viewer.isDestroyed()) return;
                const baseLayer = viewer.imageryLayers.addImageryProvider(baseProvider, 0);
                baseLayer.brightness = 1.0;
                baseLayer.contrast = 1.1;
                baseLayer.saturation = 1.0;

                // 2. Geographic Labels (Middle Layer - Index 1)
                const labelProvider = await Cesium.ArcGisMapServerImageryProvider.fromUrl(
                    "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer",
                    { enablePickFeatures: false }
                );
                if (viewer.isDestroyed()) return;
                const labelLayer = viewer.imageryLayers.addImageryProvider(labelProvider, 1);
                labelLayer.alpha = 1.0;
                labelLayer.brightness = 1.2;

                // 3. Transportation/Roads (Top Layer - Index 2)
                const transProvider = await Cesium.ArcGisMapServerImageryProvider.fromUrl(
                    "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer",
                    { enablePickFeatures: false }
                );
                if (viewer.isDestroyed()) return;
                const transLayer = viewer.imageryLayers.addImageryProvider(transProvider, 2);
                transLayer.alpha = 0.5;

                // 4. Subtle Technical Grid (Topmost for feel)
                const gridLayer = viewer.imageryLayers.addImageryProvider(new Cesium.GridImageryProvider({}), 3);
                gridLayer.alpha = 0.03;

            } catch (err) {
                console.error("Failed to load mission-critical imagery:", err);
            }
        };

        initImagery();

        // Environmental
        viewer.scene.backgroundColor = Cesium.Color.fromCssColorString("#05070a");
        if (viewer.scene.skyAtmosphere) viewer.scene.skyAtmosphere.show = false;
        if (viewer.scene.sun) viewer.scene.sun.show = false;
        if (viewer.scene.moon) viewer.scene.moon.show = false;

        const controller = viewer.scene.screenSpaceCameraController;
        controller.enableRotate = false;
        controller.enableTilt = false;
        controller.enableLook = false;
        controller.minimumZoomDistance = 50_000;
        controller.maximumZoomDistance = 30_000_000;

        viewerRef.current = viewer;
        return () => viewer.destroy();
    }, []);

    useEffect(() => {
        const viewer = viewerRef.current;
        if (!viewer || !data || !data.positions.length) return;

        // --- ORBIT SEGMENTATION & TRACK RENDERING ---
        const renderTracks = () => {
            viewer.entities.removeAll();

            const now = (simulatedTime ?? new Date()).getTime();

            // Separate orbits based on equator crossing (Ascending node)
            const orbits = [[]];
            let currentOrbitIndex = 0;

            for (let i = 0; i < data.positions.length; i++) {
                const pos = data.positions[i];
                orbits[orbits.length - 1].push(pos);

                // Detect Ascending Node (Crossing Equator moving North)
                if (i > 0) {
                    const prev = data.positions[i - 1];
                    if (prev.latitude <= 0 && pos.latitude > 0) {
                        orbits.push([]);
                    }
                }
            }

            // Find which orbit index contains "now"
            for (let i = 0; i < orbits.length; i++) {
                const orbit = orbits[i];
                const start = new Date(orbit[0].timestamp).getTime();
                const end = new Date(orbit[orbit.length - 1].timestamp).getTime();
                if (now >= start && now <= end) {
                    currentOrbitIndex = i;
                    break;
                }
            }

            orbits.forEach((orbit, index) => {
                // Skip orbits beyond visibleOrbits limit (if set)
                if (visibleOrbits !== undefined && index > currentOrbitIndex + visibleOrbits) {
                    return;
                }

                const positions = orbit.map(p => Cesium.Cartesian3.fromDegrees(p.longitude, p.latitude, 0));

                let material;
                let width = 1.0;

                if (index < currentOrbitIndex) {
                    // Past Orbit: Very subtle ghost trail
                    material = new Cesium.PolylineDashMaterialProperty({
                        color: Cesium.Color.DARKGRAY.withAlpha(0.2),
                        dashLength: 16
                    });
                    width = 1.0;
                } else if (index === currentOrbitIndex) {
                    // Current Orbit: Bold, high-glow neon
                    material = new Cesium.PolylineGlowMaterialProperty({
                        glowPower: 0.3,
                        color: Cesium.Color.CYAN
                    });
                    width = 3.0;
                } else {
                    // Future Orbit: Distinctive dotted projection
                    material = new Cesium.PolylineDashMaterialProperty({
                        color: Cesium.Color.CYAN.withAlpha(0.4),
                        dashLength: 8,
                        gapColor: Cesium.Color.TRANSPARENT
                    });
                    width = 1.5;
                }

                viewer.entities.add({
                    polyline: {
                        positions,
                        width,
                        material,
                        zIndex: index === currentOrbitIndex ? 10 : 1
                    }
                });
            });
        };

        renderTracks();

        // Get current satellite position for contact calculations
        const now = simulatedTime ?? new Date();
        let currentSatPos = data.positions[0];
        let minDiff = Math.abs(new Date(currentSatPos.timestamp).getTime() - now.getTime());
        for (const pos of data.positions) {
            const diff = Math.abs(new Date(pos.timestamp).getTime() - now.getTime());
            if (diff < minDiff) {
                minDiff = diff;
                currentSatPos = pos;
            }
        }

        // Calculate contact status for all stations
        const contactStatuses = getAllContactStatuses(
            GROUND_STATIONS.map(s => ({ id: s.id, latitude: s.latitude, longitude: s.longitude })),
            { latitude: currentSatPos.latitude, longitude: currentSatPos.longitude, altitude_km: currentSatPos.altitude_km },
            MIN_ELEVATION,
            MAX_ELEVATION
        );

        // Notify parent about contact status
        if (onContactUpdate) {
            onContactUpdate(contactStatuses);
        }

        // Create a lookup map for contact status
        const contactMap = new Map(contactStatuses.map(c => [c.stationId, c]));

        // --- SATELLITE COVERAGE FOOTPRINT ---
        const footprintRadius = calculateFootprintRadius(currentSatPos.altitude_km, MIN_ELEVATION);
        viewer.entities.add({
            name: "Coverage Footprint",
            position: Cesium.Cartesian3.fromDegrees(currentSatPos.longitude, currentSatPos.latitude, 0),
            ellipse: {
                semiMajorAxis: footprintRadius * 1000, // Convert km to meters
                semiMinorAxis: footprintRadius * 1000,
                material: Cesium.Color.CYAN.withAlpha(0.08),
                outline: true,
                outlineColor: Cesium.Color.CYAN.withAlpha(0.3),
                outlineWidth: 1,
                height: 0
            }
        });

        // --- GROUND STATIONS (contact-aware) ---
        GROUND_STATIONS.forEach(station => {
            const contact = contactMap.get(station.id);

            // Color based on contact status: Green = in contact, Red = no contact
            const color = contact?.inContact
                ? Cesium.Color.LIME
                : Cesium.Color.fromCssColorString("#FF6B6B");

            viewer.entities.add({
                name: station.id,
                position: Cesium.Cartesian3.fromDegrees(station.longitude, station.latitude, 0),
                billboard: {
                    image: antennaIcon,
                    width: 24,
                    height: 24,
                    color: color,
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM
                },
                label: {
                    text: contact?.inContact
                        ? `${station.id} (${contact.elevationAngle}°)`
                        : station.id,
                    font: "10px monospace",
                    fillColor: color,
                    outlineColor: Cesium.Color.BLACK,
                    outlineWidth: 2,
                    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                    pixelOffset: new Cesium.Cartesian2(16, -12),
                    horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
                    verticalOrigin: Cesium.VerticalOrigin.CENTER,
                    scale: 0.9
                }
            });
        });

        // --- DYNAMIC SATELLITE POSITION (INTERPOLATED) ---
        const property = new Cesium.SampledPositionProperty();
        data.positions.forEach(p => {
            const time = Cesium.JulianDate.fromIso8601(p.timestamp);
            const pos = Cesium.Cartesian3.fromDegrees(p.longitude, p.latitude, p.altitude_km * 1000);
            property.addSample(time, pos);
        });

        viewer.entities.add({
            name: data.satellite_name,
            position: property,
            billboard: {
                image: satelliteIcon,
                width: 32,
                height: 32,
                color: Cesium.Color.CYAN,
                verticalOrigin: Cesium.VerticalOrigin.CENTER
            },
            label: {
                text: data.satellite_name,
                font: "12px Orbitron, sans-serif",
                fillColor: Cesium.Color.CYAN,
                outlineColor: Cesium.Color.BLACK,
                outlineWidth: 2,
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                pixelOffset: new Cesium.Cartesian2(20, 0),
                horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
                verticalOrigin: Cesium.VerticalOrigin.CENTER
            }
        });

        // Set clock time - use simulatedTime if provided, otherwise live
        const clockTime = simulatedTime ?? new Date();
        viewer.clock.currentTime = Cesium.JulianDate.fromDate(clockTime);
        viewer.clock.shouldAnimate = !simulatedTime; // Only animate in live mode

        // Camera Logic
        const currentPos = property.getValue(viewer.clock.currentTime);

        if (isFollowing && currentPos) {
            // Follow mode: Center on satellite but keep a wide view to avoid black areas
            const cartographic = Cesium.Cartographic.fromCartesian(currentPos);
            viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromRadians(
                    cartographic.longitude,
                    cartographic.latitude,
                    15000000 // 15,000 km altitude - high enough to keep map in view
                ),
                duration: 0.5
            });
        } else if (!isFollowing) {
            // Default mode: Show full orbit extent
            const lats = data.positions.map(p => p.latitude);
            const lons = data.positions.map(p => p.longitude);
            viewer.camera.flyTo({
                destination: Cesium.Rectangle.fromDegrees(
                    Math.min(...lons) - 10, Math.min(...lats) - 10,
                    Math.max(...lons) + 10, Math.max(...lats) + 10
                ),
                duration: 1.0
            });
        }

    }, [data, isFollowing, visibleOrbits, simulatedTime]);

    return <div ref={containerRef} style={{ width: "100%", height: "100%", position: "absolute" }} />;
});

export default CesiumMap;