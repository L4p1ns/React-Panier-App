import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

import Articles from "./components/Articles";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
