import React from "react";
import ReactDom from "react-dom";
import WeatherApp from "./WeatherApp";
import * as serviceWorker from "./serviceWorker";

import "./styles.css";

function App() {
  return <WeatherApp />;
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);

// PWA
serviceWorker.register();
