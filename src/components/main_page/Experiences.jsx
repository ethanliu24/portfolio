import Experience from "./Experience"

function Experiences() {
  return (
    <div id="experiences" className="apply-spacing txt-align-center scroll-offset">
      <h1 className="section-title">Experiences</h1>
      <div className="contents">
        <Experience 
          orgName="Courseography"
          startDate="Sep 2024"
          endDate="Present"
          role="Full Stack Web Developer"
          description="lorem blah blah blah"
          logoPath={"src/assets/projects/courseography.png"}
        />
      </div>
    </div>
  )
}

export default Experiences 