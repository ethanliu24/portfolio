import Experience from "./Experience"
import assetPaths from '../../../assetPaths.js'

function Experiences() {
  return (
    <div id="experiences" className="apply-spacing txt-align-center scroll-offset">
      <h1 className="section-title">EXPERIENCES</h1>
      <div className="contents">
        <Experience 
          orgName="Courseography"
          startDate="Sep 2024"
          endDate="Present"
          role="Full Stack Web Developer"
          description="
            As a developer for Courseography, 
            a web application designed to help students navigate courses and prerequisites efficiently, 
            I developed, optimized, and maintained this project with a small team under the SDS Team. 
            I contributed to both front-end and back-end development, resolving data parsing issues, 
            enhancing front-end performance, and refactoring the codebase for scalability.
          "
          logoPath={assetPaths.courseography}
        />
      </div>
    </div>
  )
}

export default Experiences 