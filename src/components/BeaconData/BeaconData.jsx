import { useMemo, useRef } from "react";
import "./BeaconData.css";
import { useBeacon } from "../../utils/hooks";
import { STALE_MS } from "../../constants/contants";

export default function BeaconData() {
    const { b, error, lastUpdatedMs } = useBeacon(1000);
    const scrollRef = useRef(null)
    const now = Date.now();
    const isStale = !lastUpdatedMs || now - lastUpdatedMs > STALE_MS;

    const lastUpdatedHuman = lastUpdatedMs
        ? new Date(lastUpdatedMs).toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour12: false,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        })
        : "—";

    const fields = useMemo(() => [
        "BCON_MSG", "SNS_GNSS_TEMP", "SNS_OBC_TEMP",
        "EPS_TOTALBATTERYVOLT", "EPS_CHANNELSTATUS",
        "EPS_RESETCOUNT", "GNSS_FIXSTATUS",
        "ADCS_INIT_STS", "ADCS_FSM_STATE"
    ], []);

    return (
        <section className="panel topic">
            <div className="topic-head">
                <div className="panel-title">Beacon Data</div>
                <div className={`last-updated ${isStale ? "stale" : ""}`}>
                    Last updated at: {lastUpdatedHuman} IST
                </div>
            </div>

            <div className="scroll topic-body" ref={scrollRef}>
                <div className="msg-list">
                    {fields.map((key) => (
                        <div className="cs-item-row" key={key}>
                            <div className="cs-item-name2">
                                <div className="cs-mono">{key}</div>
                            </div>
                            <div className="cs-item-value2">
                                <div
                                    className='cs-row-input'
                                >{isStale ? "__" : b[key]}
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </section>
    );
}
