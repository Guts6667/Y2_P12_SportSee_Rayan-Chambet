import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Header from "./components/Header";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import DatasPage from "./pages/DatasPage";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<DatasPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
