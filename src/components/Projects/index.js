import React from 'react'
//<link rel="stylesheet" href="./index.css"></link>
function Projects(){
const smallimg = {width:"230px",height:"120px"}
return (
    <div>
        <h1>Projects</h1>
    
    <section id= "Work-Examples" className="hero">
    
    <article  id="p2" id="Work-Examples">
    <a className="grow" href=" https://mhmunter.github.io/hestia/">
      
      <img src={require("../../image/Screenshot1.png")} alt="First group project sceenShot" style={{width:"330px",height:"220px"}}>
      </img>
      </a>
      </article>
     <article className="grow" id="p2">
    <a href="https://trailblazer.me/id?lang=en_US/">
      
      <img src={require("../../image/Trail.png")} alt="First project sceenShot" style={smallimg}>
      </img>
      </a>
    </article>
    <article className="grow" id="p2">
      <a href="https://radar-menu.herokuapp.com/">
        
        <img src={require("../../image/2mbarbq.png")} alt="group project 2" style={smallimg}>
        </img>
        </a>
      </article>

      <article className="grow" id="p2">
      <a href="https://immense-ocean-63778.herokuapp.com/">
        
        <img src={require("../../image/projectThree.png")} alt="group project 2" style={smallimg}>
        </img>
        </a>
      </article>
  </section>
  </div>
);
}




export default Projects