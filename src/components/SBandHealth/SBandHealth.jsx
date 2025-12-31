import { useRef } from "react";
import './SBandHealth.css';
import { FIELD_ORDER, LABELS, STALE_MS } from "../../constants/contants";
import { formatValue } from "../../utils/utils";
import { useHealthPoll } from "../../utils/hooks";

export default function SBandHealth() {
    const s = useHealthPoll("/health/sband");
    const x = useHealthPoll("/health/xband");
    const scrollRef = useRef(null);

    const lastUpdatedMs = Math.max(s.lastUpdatedMs || 0, x.lastUpdatedMs || 0) || null;

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

    const renderTable = (title, values, dimIfStale) => (
        <div className="panel topic">
            <div className="topic-head">
                <div className="panel-title">{title}</div>
                <div className={`last-updated ${(!lastUpdatedMs || (Date.now() - lastUpdatedMs > STALE_MS)) ? "stale" : ""}`}>
                    Last updated at: {lastUpdatedHuman} IST
                </div>
            </div>
            <div className="scroll topic-body" ref={scrollRef}>
                <div className="msg-list">
                    {FIELD_ORDER.map((key) => (
                        <div className="cs-item-row" key={`${title}-${key}`}>
                            <div className="cs-item-name2">
                                <div className="cs-mono">{LABELS[key] ?? key}</div>
                            </div>
                            <div className="cs-item-value2">
                                <div
                                    className='cs-row-input'
                                >{dimIfStale ? "—" : formatValue(key, values[key])}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <section className="space-card sband-card">
            {renderTable("S-Band", s.values, s.isStale)}
            {renderTable("X-Band", x.values, x.isStale)}
        </section>
    );
}
