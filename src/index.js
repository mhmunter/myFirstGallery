import React, { useState } from "react";
// import Navigation from "./components/Navigation";
// import Project from "./components/Projects";
// import Header from "./components/Header";
// import Form from "./components/Form";
// import Footer from "./components/Footer";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Document } from 'react-pdf'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
