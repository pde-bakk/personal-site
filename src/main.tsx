import "./main.css";
import "./i18n/config";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>,
    );
    // Render your app using ReactDOM.createRoot
    // Example: root.render(<App />);
} else {
    console.error('Root element with id "root" not found in the DOM.');
}
