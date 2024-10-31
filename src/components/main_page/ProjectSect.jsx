import ProjectCard from "./ProjectCard"

function ProjectSect() {
  return (
    <div id="project-sect" className="apply-spacing txt-align-center scroll-offset">
    <div className="container">
      <h1 className="section-title">Projects</h1>
      {/* TODO fill in the link to projects page */}
      <a className="view-more" href="">view more »</a>
    </div>
    <div className="contents">
      <ProjectCard id="project-1"
        name="test" 
        description="sampel description" 
        tech={["tech 1", "tech 2"]}  
        imgPath="src/assets/header_img.jpeg"
        githubLink="https://github.com/ethanliu24/portfolio"
        webLink="https://www.youtube.com/watch?v=KRtvCCDbLgQ"
        projectPagePath="https://github.com/ethanliu24/portfolio"
      />

      <ProjectCard id="project-2"
        name="test" 
        description="sampel description" 
        tech={["tech 1", "tech 2"]}  
        imgPath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqHbrPdXaablps22kGiPEGZRFLQr1ECspWDA&s"
        githubLink="https://github.com/ethanliu24/portfolio"
        webLink="https://www.youtube.com/watch?v=KRtvCCDbLgQ"
        projectPagePath="https://github.com/ethanliu24/portfolio"
      />
    </div>
  </div>
  )
}

export default ProjectSect