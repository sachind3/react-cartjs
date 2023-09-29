import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppState } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppState>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </AppState>
  </BrowserRouter>
);
