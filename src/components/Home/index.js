import React from 'react'
// import { Document, Page } from 'react-pdf'
const smallimg = {width:"230px",height:"120px"}

function Home(){

return (
    <div>
        <h1>Home</h1>
        <a href="https://1drv.ms/w/s!Au_BFqzH5pX6jBKB9HvMa-witlVn?e=YOmz1Z">Link to Resume here!</a>
        
  <div className="aboutMe">
      <h1>About Me</h1>

      <img
        src={require("../../image/markbus.png")}
        alt="My image"
        style={{ width: "330px", height: "220px" }}
      ></img>
      <p>
        {" "}
        I was born and raised in San Antonio Texas. My family is well known in
        the local music and art communities. I earned a B.A. in History with a
        minor in Geography. My wife is also a software engineer, and my son is
        currently in kindergarten. I've spent the majority of my professional
        life in the banking industry, with an emphasis on customer service. I'm
        a lover of puzzles detective novels, and history. In general I have a
        passion for learning, searching for answers, and finding the truth in
        all things.

      </p>
      <div className="pRow">
        <img
          src={require("../../image/IMG_0194.PNG")}
          alt="My image"
          style={{ width: "230px", height: "320px" }}
        ></img>

        <img
          src={require("../../image/IMG_0196.PNG")}
          alt="My image"
          style={{ width: "260px", height: "320px" }}
        ></img>
        <img
          src={require("../../image/IMG_0195.PNG")}
          alt="My image"
          style={{ width: "230px", height: "320px" }}
        ></img>
        <img
          src={require("../../image/IMG_0199.PNG")}
          alt="My image"
          style={{ width: "240px", height: "320px" }}
        ></img>
        <img
          src={require("../../image/IMG_0198.PNG")}
          alt="My image"
          style={{ width: "230px", height: "320px" }}
        ></img>
      </div>
    </div>

   
    <div className="proj">
    <h1 >Projects</h1>
    </div>
    <section id= "Work-Examples" className="hero">
   
    <div className='prow'>
    <article  id="p2" id="Work-Examples">
    <a className="grow" href=" https://mhmunter.github.io/hestia/">
      
      <img src={require("../../image/Screenshot1.png")} alt="First group project sceenShot" style={{width:"330px",height:"220px"}}>
      </img>
      </a>
      </article>
      </div>
      <div className='prow'>
     <article className="grow" id="p2">
    <a href="https://trailblazer.me/id?lang=en_US/">
      
      <img src={require("../../image/Trail.png")} alt="First project sceenShot" style={smallimg}>
      </img>
      </a>
    </article>
    </div>
    <div className='prow'>
    <article className="grow" id="p2">
      <a href="https://radar-menu.herokuapp.com/">
        
        <img src={require("../../image/2mbarbq.png")} alt="group project 2" style={smallimg}>
        </img>
        </a>
      </article>
      </div>
      <div className='prow'>
      <article className="grow" id="p2">
      <a href="https://immense-ocean-63778.herokuapp.com/">
        
        <img src={require("../../image/projectThree.png")} alt="group project 2" style={smallimg}>
        </img>
        </a>
      </article>
      </div>
  </section>
    </div>
)
}


// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// function Home(){
//     return (
//             <div>
//                 <h1>Home</h1>
//         <Page  file="../MarkResume.pdf"  />
//                 <Document file="../image/MarkResume.pdf" />
//             </div>)
// function MyApp() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
        
//       <Document file="../MarkResume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
      
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }
// }












export default Home