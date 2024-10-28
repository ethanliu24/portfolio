import { PinIcon, GitHubIcon, LinkedInIcon, MailIcon, InstagramIcon } from "../../assets/svgs.jsx"

function InfoBar() {
  const id = "info-bar-"
  const color = "#FFFFFF"

  return (
    <div id="info-bar" className="apply-spacing">
      <div id="location">
        <PinIcon color={color} id={`${id}pin`} classes={["icon"]} />
        <div id="location-txt">Toronto,<br></br>Canada</div>
      </div>

      <div id="socials">
        <GitHubIcon color={color} id={`${id}github`} classes={["icon"]} />
        <LinkedInIcon color={color} id={`${id}linkedin`} classes={["icon"]} />
        <MailIcon color={color} id={`${id}linkedin`} classes={["icon"]} />
        <InstagramIcon color={color} id={`${id}linkedin`} classes={["icon"]} />
      </div>

      <button id="get-resume" className="glow-on-hover btn">Resume</button>
      <button className="playground glow-on-hover btn">Playground</button>
    </div>
  )
}

export default InfoBar 