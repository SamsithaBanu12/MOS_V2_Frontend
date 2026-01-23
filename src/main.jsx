import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';
import { StationProvider } from "./context/StationContext";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { SidebarProvider } from "./context/SidebarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <StationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StationProvider>
    </SidebarProvider>
  </React.StrictMode>
);
