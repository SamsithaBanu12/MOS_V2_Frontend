import React, { useState } from "react";
import './TelemetryScreen.css';

function TelemetryScreen({ telemetryUrl, title }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getKioskUrl = (url) => {
        if (!url) return url;
        const separator = url.includes('?') ? '&' : '?';
        return `${url}${separator}kiosk`;
    };

    const kioskUrl = getKioskUrl(telemetryUrl);

    const handleError = () => {
        setLoading(false);
        setError(true);
    };

    return (
        <div className="grafana-app-wrapper">
            {loading && !error && (
                <div
                    className="grafana-app-loading"
                >
                    <p>Loading dashboard...</p>
                </div>
            )}

            {error && (
                <div
                    className="grafana-app-error"
                >
                    <p>Failed to load dashboard. Please check the server.</p>
                </div>
            )}

            <iframe
                title={title}
                src={kioskUrl}
                className="grafana-iframe"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                allow_embedding="true"
                onLoad={() => setLoading(false)}
                onError={handleError}
            />
        </div>
    );
}

export default TelemetryScreen;