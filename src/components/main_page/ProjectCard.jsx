import assetPaths from '../../../assetPaths.js'

function ProjectCard({ name, description, tech, imgPath, githubLink, webLink, projectPagePath }) {
  return (
    <div id={"project-" + name.toLowerCase().split(" ").join("-")} className="project-card-container">
      <a href={projectPagePath}>
        <div className="visual-container">
          <img src={imgPath} alt="image of the project" />
          <div className="project-stack">{tech.map((technology, i) => {
            return <div className="project-tech" key={`${name.toLowerCase()}-tech-${i}`}>{technology}</div>
          })}</div>
          <p className="project-description">{description}</p>
        </div>
      </a>

      <div className="title-container">
        <a href={projectPagePath}><h2 className="project-name">{name}</h2></a>
        <div className="icon-container">
          { githubLink ? <a href={githubLink} target="_blank" rel="noopener noreferrer"><img className="github-icon icon" src={assetPaths.githubIcon} /></a> : <></>}
          { webLink ? <a href={webLink} target="_blank" rel="noopener noreferrer"><img className="web-icon icon" src={assetPaths.webIcon} /></a> : <></>}
          </div>
      </div>
    </div>
  )
}

export default ProjectCard