import { useEffect, useState } from "react";
import { getAllPassages } from "../utils/api";
import ErrorBoundary from "../common/ErrorBoundary";
import PassList from "../components/PassList/PassList";

const PassListingPage = () => {
    const [passages, setPassages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchPassages = async () => {
            try {
                setLoading(true);
                const data = await getAllPassages();
                setPassages(Array.isArray(data) ? data : []);
                setError(null);
            } catch (err) {
                console.error("Error fetching passages:", err);
                setError("Failed to fetch passages. Please check your credentials and network.");
            } finally {
                setLoading(false);
            }
        };

        fetchPassages();
    }, []);

    return (
        <ErrorBoundary
            title="Pass Listing Error"
            message="We encountered an unexpected error while rendering the Pass Listing."
        >
            <PassList passages={passages} />
        </ErrorBoundary>
    );
};

export default PassListingPage;
