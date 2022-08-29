import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
// import Form from './components/Form';
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";
import { Document } from 'react-pdf'


function App() {
  const [page, setPage] = useState("home");
  function displayPage() {
    if (page === "home") {
      return <Home />;
    } else if (page === "projects") {
      return <Projects />;
    } else if (page === "resume") {
      return <Resume />;
    } else if (page === "AboutMe") {
      return <AboutMe />;
    }
  }
  return (
    <div className="App">
      <Navigation setPage={setPage} />
      {displayPage()}
      <Footer />
    </div>
  );
}

export default App;
