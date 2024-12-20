import WaveAnimation from "../common/WaveAnimation"
import assetPaths from '../../../assetPaths.js'

function InfoBar() {
  const openResume = () => {
    const newWindow = window.open(assetPaths.resume, "_blank") 
    if (!newWindow) alert("Pop-up blocked! Please allow pop-ups to view the PDF.")
  }

  const openMore = () => {
    // TODO change to the actual webpage
    window.location.href = window.location.pathname + "#/under-development"
  }

  const startWaveAnimation = (e) => {
    e.target.classList.add("wave-animation");
  }

  const stopWaveAnimation = (e) => {
    e.target.classList.remove("wave-animation")
  }

  const display = (
    <div id="info-bar">
      <div id="info-bar-location">
        <img id="info-bar-pin" className="icon" src={assetPaths.pinIcon} alt="pin icon" />
        <h2 id="location-txt">Toronto,<br></br>Canada</h2>
      </div>

      <div id="info-bar-socials" className="icon-container">
        <a href="https://github.com/ethanliu24"><img id="info-bar-github" className="icon" src={assetPaths.githubIcon} alt="github icon" /></a>
        <a href="https://www.linkedin.com/in/ethanliu24/"><img id="info-bar-linkedin" className="icon" src={assetPaths.linkedInIcon} alt="linked in icon" /></a>
        <img id="info-bar-mail" className="icon" src={assetPaths.mailIcon} alt="mail icon" />
      </div>

      <div id="info-bar-btns">
        <button id="get-resume" className="glow-on-hover" onClick={openResume} onMouseEnter={startWaveAnimation} onMouseLeave={stopWaveAnimation}>
          <img src={assetPaths.downloadIcon} />
          <WaveAnimation text="Resume" />
        </button>

        <button className="playground glow-on-hover" onClick={openMore} onMouseEnter={startWaveAnimation} onMouseLeave={stopWaveAnimation}>
          <img src={assetPaths.externalIcon} />
          <WaveAnimation text="More" />
        </button>
      </div>
    </div>
  )

  return display
}


export default InfoBar 