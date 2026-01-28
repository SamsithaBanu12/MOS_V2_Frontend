import React, { createContext, useContext, useMemo, useState } from "react";

const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
    const [collapsed, setCollapsed] = useState(false);

    const value = useMemo(
        () => ({ collapsed, setCollapsed }),
        [collapsed]
    );

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const ctx = useContext(SidebarContext);
    if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
    return ctx;
}
