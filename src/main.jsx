import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import { App } from "./App"; esta es la raiz
import { Bio } from "./Bio";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Bio />
  </React.StrictMode>
);
