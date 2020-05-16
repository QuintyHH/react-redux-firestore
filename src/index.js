import React from "react";
import { render } from "react-dom";
import "./index.css";
import ReduxApp from "./App";

render(
  <React.StrictMode>
    <ReduxApp />
  </React.StrictMode>,
  document.getElementById("reactRoot")
);
