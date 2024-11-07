import ProjectCard from "./ProjectCard"

function ProjectSect() {
  return (
    <div id="project-sect" className="apply-spacing txt-align-center scroll-offset">
    <div className="container">
      <h1 className="section-title">PROJECTS</h1>
      <a className="view-more section-subtext" href="/projects">view more »</a>
    </div>
    <div className="contents">
      <ProjectCard id="project-1"
        name="Portfolio" 
        description="
          The page you are seeing right now! I made this using JavaScript and React, with pure CSS for styling. 
          I also used GSAP and Paper for interactive animations.
        " 
        tech={["JavaScript", "React", "GSAP", "Paper", "Vite"]}  
        imgPath="src/assets/projects/portfolio/banner.png"
        githubLink="https://github.com/ethanliu24/portfolio"
        webLink="https://www.youtube.com/watch?v=KRtvCCDbLgQ" // TODO change path to the actual website
        projectPagePath="/projects/portfolio"
      />

      <ProjectCard id="project-2"
        name="JAE Market" 
        description="
          A backend system to manage a database, supporting CRUD actions for users. 
          The database is implemented using files to persist data, and manipulated with file I/O.
          The system is interacted via terminal.
        " 
        tech={["Java"]}  
        imgPath="src/assets/projects/jae-market/banner.png"
        projectPagePath="/projects/jae-market"
      />

      <ProjectCard id="project-3"
        name="Dementia Bot" 
        description="
          A project for me to learn how to use public APIs. The bot uses Instagram Graph API to 
          perform automated actions on instagram with a predetermined schedule.
        " 
        tech={["Python", "Requests", "Schedule"]}  
        imgPath="src/assets/projects/dementia-bot/banner.png"
        githubLink="https://github.com/ethanliu24/Instagram-Bot"
        projectPagePath="/projects/dementia-bot"
      />

      <ProjectCard id="project-4"
        name="Music License Marketplace" 
        description="
          Ongoing project! The project aims to provide a plateform to simplify my beat leasing process and an efficient experience for customers. 
          It will support content creation, transactions, possibly AI integrations tools for musical analysis, 
          and most likely RoR as the back-end framework.
        " 
        tech={["JavaScript", "Ruby", "React", "Tailwind", "Vite", "Rails"]}  
        imgPath="src/assets/projects/comming_soon.png"
        projectPagePath="/projects/music-license-marketplace"
      />
    </div>
  </div>
  )
}

export default ProjectSect