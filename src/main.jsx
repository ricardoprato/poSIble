import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/students/Provider";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import "./styles/index.css";
import "./styles/globals.css";

function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <React.StrictMode>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </React.StrictMode>
  </Provider>
);
