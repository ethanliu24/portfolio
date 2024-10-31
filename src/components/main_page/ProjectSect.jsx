import ProjectCard from "./ProjectCard"

function ProjectSect() {
  return (
    <div id="project-sect" className="apply-spacing txt-align-center scroll-offset">
    <div className="container">
      <h1 className="section-title">Projects</h1>
      {/* TODO fill in the link to projects page */}
      <a id="view-more-projects" href="">view more »</a>
    </div>
    <div className="contents">
      <ProjectCard 
        name="test" 
        description="sampel description" 
        tech={["tech 1", "tech 2"]}  
        githubLink="https://github.com/ethanliu24/portfolio"
        webLink="https://www.youtube.com/watch?v=KRtvCCDbLgQ"
        projectPagePath="https://github.com/ethanliu24/portfolio"
      />
    </div>
  </div>
  )
}

export default ProjectSect