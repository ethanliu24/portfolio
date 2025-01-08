import assetPaths from "../../../assetPaths.js"
import { GITHUB_LINK, LINKEDIN_LINK } from "../../routes.js"

function Contact() {
  return (
    <div id="contact" className="scroll-offset">
      <h1 className="section-title">CONTACTS</h1>
      <div className="contents">
        <h2 id="contact-txt">Feel free to reach out, thanks for stopping by!</h2>
        <div className="icon-container">
          <a href={GITHUB_LINK} ><img src={assetPaths.githubIcon} className="icon"></img></a>
          <a href={LINKEDIN_LINK}><img src={assetPaths.linkedInIcon} className="icon"></img></a>
          <img src={assetPaths.mailIcon} className="icon"></img>
        </div>
      </div>
    </div>
  )
}

export default Contact
