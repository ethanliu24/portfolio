import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import assetPaths from '../../../assetPaths.js'
import * as ROUTES from "../../routes.js"

function NavBar() {
  const [open, setOpen] = useState(true)

  const location = useLocation()
  const navigate = useNavigate()

  const goToSection = (sectionId) => {
    // Check if we are on the home directory
    if (location.pathname !== "/#/" && location.pathname !== ROUTES.HOME_ROUTE) {
      navigate(ROUTES.HOME_ROUTE)
    }

    // Scroll to the corresponding section
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }

  return (
    <nav id="nav-bar">
      <ul id="home">
        <li id="nav-bar-home"><a onClick={() => goToSection("header")}>Home</a></li>
      </ul>

      <ul id="links">
        <li><a onClick={() => goToSection("about")}>About</a></li>
        <li><a onClick={() => goToSection("experiences")}>Experiences</a></li>
        {/* TODO change projects to go to /projects route */}
        <li><a onClick={() => goToSection("project-sect")}>Projects</a></li>
        <li><a onClick={() => goToSection("contact")}>Contacts</a></li>
        <li><a href={ROUTES.PLAYGROUND_LINK}>More</a></li>
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