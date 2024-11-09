import { useState } from 'react'
import assetPaths from '../../../assetPaths.js'

function NavBar() {
  const [open, setOpen] = useState(true)

  return (
    <nav id="nav-bar">
      <ul id="home">
        <li id="nav-bar-home"><a href="#/#header">Home</a></li>
      </ul>

      <ul id="links">
        <li><a href="#/#about">About</a></li>
        <li><a href="#/#experiences">Experiences</a></li>
        {/* TODO change projects to go to /projects route */}
        <li><a href="#project-sect">Projects</a></li> 
        <li><a href="#contact">Contacts</a></li>
        <li><a href="">More</a></li>
      </ul>
      
      <img id="menu" className="icon" src={assetPaths.menuIcon} onClick={() => {
          const navBar = document.querySelector("#nav-bar")
          open ? navBar.classList.add("opened") : navBar.classList.remove("opened");
          setOpen(o => !o)
        
          const links = document.querySelectorAll("#links li")
          links.forEach((elem) => {
            if (elem.style.display === "none" || elem.style.display === "") {
              elem.style.display = "block"
            } else {
              elem.style.display = "none"
            }
          })
        }
      } />
    </nav>
  )
}

export default NavBar