import React from "react";
import ReactDOM from "react-dom";
import App1 from "./app";

import "./styles.css";

function App() {
  return <App1 />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
