import WaveAnimation from "../common/WaveAnimation"

function InfoBar() {
  const openResume = () => {
    const newWindow = window.open("src/assets/Master_Resume.pdf", "_blank") 
    if (!newWindow) alert("Pop-up blocked! Please allow pop-ups to view the PDF.")
  }

  const startWaveAnimation = (e) => {
    e.target.classList.add("wave-animation");
  }

  const stopWaveAnimation = (e) => {
    e.target.classList.remove("wave-animation")
  }

  const display = (
    // #TODO add href for icons
    <div id="info-bar">
      <div id="info-bar-location">
        <img id="info-bar-pin" className="icon" src="src/assets/icons/pin.svg" alt="pin icon" />
        <h2 id="location-txt">Toronto,<br></br>Canada</h2>
      </div>

      <div id="info-bar-socials" className="icon-container">
        <img id="info-bar-github" className="icon" src="src/assets/icons/github.svg" alt="github icon" />
        <img id="info-bar-linkedin" className="icon" src="src/assets/icons/linkedin.svg" alt="linked in icon" />
        <img id="info-bar-mail" className="icon" src="src/assets/icons/mail.svg" alt="mail icon" />
        <img id="info-bar-instagram" className="icon" src="src/assets/icons/instagram.svg" alt="instagram icon" />

      </div>

      <div id="info-bar-btns">
        <button id="get-resume" className="glow-on-hover" onClick={openResume} onMouseEnter={startWaveAnimation} onMouseLeave={stopWaveAnimation}>
          <img src="src/assets/icons/download.svg" />
          <WaveAnimation text="Resume" />
        </button>

        {/* TODO adde href */}
        <button className="playground glow-on-hover" onMouseEnter={startWaveAnimation} onMouseLeave={stopWaveAnimation}>
          <img src="src/assets/icons/external.svg" />
          <WaveAnimation text="More" />
        </button>
      </div>
    </div>
  )

  return display
}


export default InfoBar 