import React from "react";
import ReactDOM from "react-dom/client";
import { CardContainer } from "./components/cards";
import "./styles/main.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>Memory Game</h1>
    <p>Get points by clicking on an image but don't click on any more than once!</p>
    <CardContainer />
  </React.StrictMode>
);