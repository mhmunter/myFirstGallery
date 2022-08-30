import React from "react";


function AboutMe() {
    const smallimg = { width: "100px", height: "220px" } 
  return (
    <div className="aboutMe">
      <h1>About Me</h1>

      <img
        src={require("../../image/markbus.png")}
        alt="My image"
        style={{ width: "330px", height: "220px" }}
      ></img>
      <p>
        {" "}
        I was born and raised in San Antonio Texas. My famliy is well known in
        the local music and art communties. I earned a B.A. in History with a
        minor in Geography.My wife is also a software engineer, and my son is
        currently in Kindergarten. I've spent the majority of my professional
        life in the banking indusrty, with an emphasis on customer service. I'm
        a lover of puzzles detactive novels, and history. In genral I have a
        passion for learning, searching for answers, and finding the truth in
        all things.
      </p>
      <div className="pRow2">
      <article className="grow" id="p2">
        <img
          src={require("../../image/IMG_0194.PNG")}
          alt="My Son's image"
          style={{smallimg}}
        ></img>
</article>
<article className="grow" id="p2">
        <img
          src={require("../../image/IMG_0196.PNG")}
          alt="Book quote"
          style={{smallimg}}
        ></img>
        </article>
        <article className="grow" id="p2">
        <img
          src={require("../../image/IMG_0195.PNG")}
          alt="My image"
          style={{smallimg}}
        ></img>
        </article>
        <article className="grow" id="p2">
        <img
          src={require("../../image/IMG_0199.PNG")}
          alt="Recipe"
          style={{smallimg}}
        ></img>
        </article>
        <article className="grow" id="p2">
        <img
          src={require("../../image/IMG_0198.PNG")}
          alt="My Family"
          style={{width: "287px", height: "220px"}}
        ></img>
        </article>
      </div>
    </div>
  );
}

export default AboutMe;
