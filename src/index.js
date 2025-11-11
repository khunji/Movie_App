import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css"; //이 CSS는 프로젝트 전체에 전역으로 적용된다.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
