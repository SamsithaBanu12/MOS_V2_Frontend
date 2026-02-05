import { useEffect, useState } from "react";
import { getAllPassages } from "../utils/api";
import ErrorBoundary from "../common/ErrorBoundary";
import PassList from "../components/PassList/PassList";
import '../components/PassList/PassList.css';
import { GroundStations, Satellites } from "../utils/passData/data";

const PassListingPage = () => {
    const [passages, setPassages] = useState([]);
    const [groundstations, setGroundstations] = useState(GroundStations);
    const [satellites, setSatellites] = useState(Satellites);
    const [gsMappingData, setGsMappingData] = useState([]);
    const [satelliteMappingData, setSatelliteMappingData] = useState([]);
    const [enrichedPassages, setEnrichedPassages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch everything concurrently for better performance and consistent state
                const [passagesData] = await Promise.all([
                    getAllPassages(),
                ]);

                setPassages(Array.isArray(passagesData) ? passagesData : []);
            } catch (err) {
                console.error("Error fetching pass listing data:", err);
                setError("Failed to load dashboard data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (Array.isArray(groundstations)) {
            const gsMap = groundstations?.map((gs) => {
                return {
                    value: gs?.groundStationID,
                    name: gs?.groundStationName
                }
            })
            setGsMappingData(gsMap);
        }
    }, [groundstations]);
    useEffect(() => {
        if (Array.isArray(satellites)) {
            const satelliteMap = satellites?.map((st) => {
                return {
                    value: st?.satelliteID,
                    name: st?.name
                }
            })
            setSatelliteMappingData(satelliteMap);
        }
    }, [satellites]);

    useEffect(() => {
        if (passages.length > 0 && gsMappingData.length > 0 && satelliteMappingData.length > 0) {
            const enriched = passages.map((pass) => {
                const gsName = gsMappingData.find(gs => gs.value === pass.groundStationID)?.name || pass.groundStationID;
                const satName = satelliteMappingData.find(sat => sat.value === pass.satelliteID)?.name || pass.satelliteID;

                return {
                    ...pass,
                    groundStationName: gsName,
                    satelliteName: satName
                };
            });
            setEnrichedPassages(enriched);
        } else {
            setEnrichedPassages(passages);
        }
    }, [passages, gsMappingData, satelliteMappingData])

    return (
        <ErrorBoundary
            title="Pass Listing Error"
            message="We encountered an unexpected error while rendering the Pass Listing."
        >
            {loading ? (
                <div className="loading-wrapper">
                    <div style={{ padding: "40px", textAlign: "center", color: "var(--title-color)" }}>
                        Loading specialized dashboard data...
                    </div>
                    <div className="reload-overlay">
                        <div className="refresh-icon">⟳</div>
                    </div>
                </div>
            ) : error ? (
                <div style={{ padding: "40px", textAlign: "center", color: "#ff4d4d", background: "rgba(255,0,0,0.1)", borderRadius: "8px", margin: "20px" }}>
                    {error}
                </div>
            ) : (
                <PassList
                    passages={enrichedPassages}
                    groundstations={groundstations}
                    satellites={satellites}
                    gsMappingData={gsMappingData}
                    satelliteMappingData={satelliteMappingData}
                />
            )}
        </ErrorBoundary>
    );
};

export default PassListingPage;
