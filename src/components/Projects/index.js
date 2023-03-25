import React from 'react'
const smallimg = {width:"230px",height:"120px"}
//<link rel="stylesheet" href="./index.css"></link>
function Projects(){

return (
    <div>
        <h1>Projects</h1>
    
    <section id= "Work-Examples" className="hero">
    
    <article  id="p2" id="Work-Examples">
    <a className="grow" href=" https://github.com/mhmunter/hestia">
      
      <img src={require("../../image/Screenshot1.png")} alt="First group project sceenShot" style={{width:"330px",height:"220px"}}>
      </img>
      </a>
      </article>
     <article className="grow" id="p2">
    <a href="https://trailhead.salesforce.com/today/">
      
      <img src={require("../../image/Trail.png")} alt="First project sceenShot" style={smallimg}>
      </img>
      </a>
    </article>
    <article className="grow" id="p2">
      <a href="https://github.com/mhmunter/radar-menu">
        
        <img src={require("../../image/2mbarbq.png")} alt="group project 2" style={smallimg}>
        </img>
        </a>
      </article>

      <article className="grow" id="p2">
      <a href="https://github.com/mhmunter/jobSearchEngineGraphQL">
        
        <img src={require("../../image/projectThree.png")} alt="group project 2" style={smallimg}>
        </img>
        </a>
      </article>

      <article className="grow" id="p2">
      <a href="https://github.com/mhmunter/myMoneyProblems">
        
        <img src={require("../../image/budget.PNG.jpg")} alt="group project 2" style={smallimg}>
        </img>
        </a>
      </article>

      <article className="grow" id="p2">
      <a href="https://github.com/mhmunter/Lucky13_e-commerce">
        
        <img src={require("../../image/SQL.jpg")} alt="group project 2" style={smallimg}>
        </img>
        </a>
      </article>

      <article className="grow" id="p2">
      <a href="https://github.com/mhmunter/My-blogyBlog">
        
        <img src={require("../../image/myblogyblogPIC.png")} alt="group project 2" style={smallimg}>
        </img>
        </a>
      </article>

      <article className="grow" id="p2">
      <a href="https://github.com/mhmunter/EmployeeGeneratorAlphaNumaric">
        
        <img src={require("../../image/TeamTrac.jpg")} alt="group project 2" style={smallimg}>
        </img>
        </a>
      </article>

  </section>
  </div>
  
);
}




export default Projects