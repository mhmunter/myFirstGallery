import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Projects from './components/Projects';


function App() {
  const [page, setPage] = useState("home")
  const [name, setName] = useState("name")
  function displayPage(){
    if (page === "home"){
      return < Home />
      }else if(page === "projects"){
        console.log("hello")
        return < Projects />
      }else if(page === "form"){
        return <Form />
      }
  }
  return (
    <div className="App">
      <Navigation setPage={setPage} />
      <input value = {name} onChange = {e =>setName(e.target.value)}></input> 
    {displayPage()}
    <Footer name = {name}/>
    </div>
  );
}

export default App;
