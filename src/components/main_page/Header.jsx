import { useEffect } from "react"
import { initStars } from "../../../animations/starAnimation.js"

function Header() {
  const radiusRange = [0.1, 0.5]
  const velocityRange = [0.1, 0.5]


  useEffect(() => {
    const canvas = document.getElementById("star-canvas");
    initStars(canvas, radiusRange, velocityRange)
  }, [])

  return (
    <div id="header">
      <canvas id="star-canvas" resize="true"></canvas>
      <p id="header-subheading" className="text-shadow">Hey! My name is</p>
      <h1 id="header-title" className="text-shadow">Ethan Liu</h1>
      <h6 id="header-subtitle" className="text-shadow">I'm a software developer from Toronto, Canada, I like to develop full stack web applications.</h6>
      <div id="mouse-container">
        <div id="mouse-scroll"></div>
      </div>
    </div>
  )
}

export default Header