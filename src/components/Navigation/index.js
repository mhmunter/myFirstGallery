import React from 'react'

function Navigation({setPage}) {

  return (
    <header className="flex-row px-1">
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setPage("home")}>
              About me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="projects" href="#projects" onClick={() => setPage("projects")}>
            Projects
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="form" href="#form" onClick={() => setPage("form")}>
            Form
            </a>
          </li>
        </ul>
        
      </nav>
    </header>
  )
}
export default Navigation