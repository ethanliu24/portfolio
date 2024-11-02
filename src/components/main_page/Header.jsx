import { useEffect } from "react"
import { initStars } from "../../../starAnimation.js"

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
      <p className="text-shadow">Hey! My name is</p>
      <h1 className="text-shadow">Ethan Liu</h1>
      <h6 className="text-shadow">I'm a software developer based in Toronto, specializing in full-stack web development.</h6>
      <div id="mouse-container">
        <div id="mouse-scroll"></div>
      </div>
    </div>
  )
}

export default Header