function ProjectCard({ name, description, tech, imgPath, githubLink, webLink, projectPagePath }) {
  return (
    <div className="project-card-container">
      <div className="visiual-container">
        <img src={imgPath} alt="image of the project" />
        <div className="project-stacks">{tech.map((technology) => {
          <div className="project-tech">{technology}</div>
        })}</div>
        <p className="project-description">{description}</p>
      </div>

      <div className="title-container">
        <a href={projectPagePath}><h2 className="project-name">{name}</h2></a>
        { githubLink ? <a href={githubLink} target="_blank" rel="noopener noreferrer"><img className="github-icon"  src="src/assets/icons/github.svg" /></a> : <></>}
        { webLink ? <a href={webLink} target="_blank" rel="noopener noreferrer"><img className="web-icon" src="src/assets/icons/web.svg" /></a> : <></>}
      </div>
    </div>
  )
}

export default ProjectCard