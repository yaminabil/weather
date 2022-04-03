import { StrictMode } from "react";
import App from "./App";
import "./style.css";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App tab="home" />
  </StrictMode>,
  root
);
