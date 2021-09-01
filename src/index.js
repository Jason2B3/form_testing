import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalContext from "./GlobalContext"; // grab the default import
ReactDOM.render(
  <GlobalContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalContext>,
  document.getElementById("root")
);
