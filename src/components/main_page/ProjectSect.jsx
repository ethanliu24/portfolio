import ProjectCard from "./ProjectCard"
import assetPaths from '../../../assetPaths.js'

function ProjectSect() {
  const underDevelopementPath = "#/under-development"

  return (
    <div id="project-sect" className="apply-spacing txt-align-center scroll-offset">
    <div className="container">
      <h1 className="section-title">PROJECTS</h1>
      <a className="view-more section-subtext" href="#/projects">view more »</a>
    </div>
    <div className="contents">
      <ProjectCard
        name="Portfolio" 
        description="
          The page you are seeing right now! I made this using JavaScript and React, with pure CSS for styling. 
          I also used GSAP and Paper for interactive animations. In the future, I will be implementing
          interactive visual and auditorial pages using ThreeJS and Web Audio API in the 'More' section, 
          stay tuned!
        " 
        tech={["JavaScript", "React", "GSAP", "Paper", "Vite"]}  
        imgPath={assetPaths.portfolioBanner}
        githubLink="https://github.com/ethanliu24/portfolio"
        webLink="https://www.youtube.com/watch?v=KRtvCCDbLgQ" // TODO change path to the actual website
        projectPagePath={underDevelopementPath}
      />

      <ProjectCard
        name="Quibbly" 
        description="
          Ongoing project! Currently in the design phase using OpenAPI to manage routes and data schemas.
          This project is a full stack website to address other rental services’ poor 
          design, slow response time, and lack of affordable listings in the rental market, aiming 
          for a smoother rental experience.
        " 
        tech={["React/Next", "Tailwind", "Rails", "OSMPythonTools", "pandas", "OpenAPI", "Docker", "Kamal"]}  
        imgPath={assetPaths.commingSoon}
        projectPagePath={underDevelopementPath}
      />

      <ProjectCard
        name="JAE Market" 
        description="
          A backend system to manage a database, supporting CRUD actions for users. 
          The database is implemented using files to persist data, and manipulated with file I/O.
          The system is interacted via terminal.
        " 
        tech={["Java"]}  
        imgPath={assetPaths.JAEMarketBanner}
        projectPagePath={underDevelopementPath}
      />

      <ProjectCard
        name="Dementia Bot" 
        description="
          A project for me to learn how to use public APIs. The bot uses Instagram Graph API to 
          perform automated actions on instagram with a predetermined schedule.
        " 
        tech={["Python", "Requests", "Schedule"]}  
        imgPath={assetPaths.dementiaBotBanner}
        githubLink="https://github.com/ethanliu24/Instagram-Bot"
        projectPagePath={underDevelopementPath}
      />

      {/* <ProjectCard
        name="Music License Marketplace" 
        description="
          Ongoing project! The project aims to provide a plateform to simplify my beat leasing process and an efficient experience for customers. 
          It will support content creation, transactions, possibly AI integrations tools for musical analysis, 
          and most likely RoR as the back-end framework.
        " 
        tech={["JavaScript", "Ruby", "React", "Tailwind", "Vite", "Rails"]}  
        imgPath={assetPaths.commingSoon}
        projectPagePath="/under-development"
      /> */}
    </div>
  </div>
  )
}

export default ProjectSect