import Toggle from "../Toggle/Toggle";
import PayloadRow from "./PayloadRow";
import ReadonlyRow from "./ReadonlyRow";
import RoutingRow from "./RoutingRow";

const CommandDetails = ({packet_name,payload, description, isHex, setIsHex,routing, routingItems, setRouting, setShowHeader, showHeader,headerItems, payloadItems, setPayload}) => {
    return (
        <section className="ce-card">
            <div className="item-row2">
                <div className="title-wrapper">
                    <div className="title-top">
                        <div className="ce-title">{packet_name}</div>
                        <div className="ce-subtitle">
                            {description ?? description}
                        </div>
                    </div>
                    <div className="toggle-wrapper">
                        <Toggle inHex={isHex} setInHex={setIsHex} />
                    </div>
                </div>
                {routingItems.map((it) => (
                    <RoutingRow
                        key={it.name}
                        item={it}
                        value={routing[it.name] ?? ""}
                        onChange={(n, v) =>
                            setRouting((p) => ({ ...p, [n]: v }))
                        }
                        isHex={isHex}
                    />
                ))}
            </div>
            <div className="item-row1">
                <div className="ce-items-head1">
                    <div>Header (read-only)</div>
                    <button
                        className="ce-btn-small"
                        onClick={() => setShowHeader((s) => !s)}
                    >
                        {showHeader ? "" : "Details"}
                    </button>
                </div>
                {showHeader && (
                    <div
                        className="conn-modal-backdrop"
                        onClick={() => setShowHeader(false)}
                    >
                        <div
                            className="conn-modal-card"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="conn-modal-head">
                                <div className="conn-modal-title">
                                    HEADER(READ-ONLY)
                                </div>
                                <button
                                    className="tiny-btn"
                                    onClick={() => setShowHeader(false)}
                                    aria-label="Close"
                                >
                                    Close
                                </button>
                            </div>
                            {headerItems.map((it) => (
                                <ReadonlyRow
                                    key={it.name}
                                    item={it}
                                    isHex={isHex}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {/* Payload */}
            <div className="item-row">
                <div className="ce-items-head">Payload</div>
                {payloadItems.length === 0 ? (
                    <div className="ce-muted ce-small ce-pad">
                        No payload parameters.
                    </div>
                ) : (
                    <div className="scrollable">
                        {payloadItems.map((it) => (
                            <PayloadRow
                                key={it.name}
                                item={it}
                                value={payload[it.name] ?? ""}
                                onHexChange={(n, v) =>
                                    setPayload((p) => ({ ...p, [n]: v }))
                                }
                                onStateLabelChange={(n, l) =>
                                    setPayload((p) => ({ ...p, [n]: l }))
                                }
                                isHex={isHex}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
};
export default CommandDetails;