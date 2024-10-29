function InfoBar() {
  const path = "src/assets/icons/"

  return (
    <div id="info-bar">
      <div id="info-bar-location">
        <img id="info-bar-pin" className="icon" src="src/assets/icons/pin.svg" alt="pin icon" />
        <h2 id="location-txt">Toronto,<br></br>Canada</h2>
      </div>

      <div id="info-bar-socials">
        <img id="info-bar-github" className="icon" src="src/assets/icons/github.svg" alt="github icon" />
        <img id="info-bar-linkedin" className="icon" src="src/assets/icons/linkedin.svg" alt="linked in icon" />
        <img id="info-bar-main" className="icon" src="src/assets/icons/mail.svg" alt="mail icon" />
        <img id="info-bar-instagram" className="icon" src="src/assets/icons/instagram.svg" alt="instagram icon" />

        <button id="get-resume" className="glow-on-hover btn">Resume</button>
        <button className="playground glow-on-hover btn">Playground</button>
      </div>
    </div>
  )
}

export default InfoBar 