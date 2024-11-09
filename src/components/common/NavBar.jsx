import { useState } from 'react'
import assetPaths from '../../../assetPaths.js'

function NavBar() {
  const [open, setOpen] = useState(true)

  const idUrl = "https://ethanliu24.github.io/portfolio/"

  return (
    <nav id="nav-bar">
      <ul id="home">
        <li id="nav-bar-home"><a href={idUrl}>Home</a></li>
      </ul>

      <ul id="links">
        <li><a href={idUrl + "#about"}>About</a></li>
        <li><a href={idUrl + "#experiences"}>Experiences</a></li>
        {/* TODO change projects to go to /projects route */}
        <li><a href={idUrl + "#project-sect"}>Projects</a></li> 
        <li><a href={idUrl + "#contact"}>Contacts</a></li>
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