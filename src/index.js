import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import * as backend from "./actions/index";
import App from "./components/App/App";

backend.initialize();


ReactDOM.render(<App />, document.getElementById("root"));
