import React from 'react'

function Navigation({setPage}) {

  return (
    
    <header className="footer">
      
      <nav>
        <ul className="flex-row" >
          <lu className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setPage("AboutMe")}>
              About me
            </a>
          </lu>
          <lu className="mx-2" id='one'>
            <a data-testid="projects" href="#projects" onClick={() => setPage("projects")}>
            Projects
            </a>
          </lu>
          <lu className="mx-2" id='one'>
            <a data-testid="resume" href="#resume" onClick={() => setPage("resume")}>
              Resume
            </a>
          </lu>
          <lu className="mx-2" id='one'>
            <a data-testid="home" href="#home" onClick={() => setPage("home")}>
             Home
            </a>
          </lu>
        </ul>
        
      </nav>
      
    </header>
  )
}
export default Navigation