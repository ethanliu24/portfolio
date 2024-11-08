import assetPaths from "../../../assetPaths.js"

function Contact() {
  console.log(assetPaths.githubIcon)
  return (
    <div id="contact" className="scroll-offset">
      <h1 className="section-title">CONTACTS</h1>
      <div className="contents">
        <h2 id="contact-txt">Feel free to reach out, thanks for stopping by!</h2>
        <div className="icon-container">
          <a href="https://github.com/ethanliu24" ><img src={assetPaths.githubIcon} className="icon"></img></a>
          <a href="https://www.linkedin.com/in/ethanliu24/"><img src={assetPaths.linkedInIcon} className="icon"></img></a>
          <img src={assetPaths.mailIcon} className="icon"></img>
        </div>
      </div>
    </div>
  )
}

export default Contact