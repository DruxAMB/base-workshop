import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@coinbase/onchainkit/styles.css";
import "@coinbase/onchainkit/styles.css";
import OnchainProviders from "./OnchainkitProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OnchainProviders>
      <App />
    </OnchainProviders>
  </React.StrictMode>
);
