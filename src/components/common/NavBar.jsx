
// TODO fill in href
function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="left">
        <ul>
          <li id="nav-bar-home"><a href="#header">Home</a></li>
        </ul>
      </div>

      <div className="right">
        <ul>
          <li id="nav-bar-about"><a href="#about">About</a></li>
          <li id="nav-bar-experiences"><a href="#experiences">Experiences</a></li>
          <li id="nav-bar-projects"><a href="#project-sect">Projects</a></li>
          <li id="nav-bar-contacts"><a href="#contact">Contacts</a></li>
          <li id="nav-bar-playground"><a href="">Playground</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar