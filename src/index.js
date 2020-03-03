import React from "react";
import ReactDom from "react-dom";
import WeatherApp from "./WeatherApp";

import "./styles.css";

function App() {
  return <WeatherApp />;
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
