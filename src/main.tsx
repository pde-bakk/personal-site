import "./main.css";
import "./i18n/config";
import React from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
} else {
  console.error('Root element with id "root" not found in the DOM.');
}
