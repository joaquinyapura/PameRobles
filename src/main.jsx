import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Bio } from "./Bio";
import { Contact } from "./Contact";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Bio />
    <Contact />
  </React.StrictMode>
);
