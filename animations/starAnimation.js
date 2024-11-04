import paper from 'paper'

export function initStars(canvas, radiusRange, velocityRange) {
  paper.setup(canvas);

  let numStars = paper.view.size.width
  let stars = generateStars(numStars, radiusRange, velocityRange)
  let frameCount = 0
  const duration = 600 // frames
  
  paper.view.onFrame = (event) => {
    for (let i = 0; i < stars.length; i++) {
      if (stars[i].position.x >= paper.view.size.width || stars[i].position.y >= paper.view.size.height) {
        let rate = stars[i].rate
        stars[i].remove()
        stars[i] = drawStar(paper.view.size.width / 6, paper.view.size.height, radiusRange, "#D3D3D3")
        stars[i].rate = rate
      } else {
        stars[i].translate(stars[i].rate, 0)

        if (Math.random() <= 0.01) stars[i].opacity = Math.random() 
      }
    }
  };
}

function generateStars(numStars, radiusRange, velocityRange) {
  let stars = []

  for (let i = 0; i < numStars; i++) {
    let star = drawStar(paper.view.size.width, paper.view.size.height, radiusRange, "#D3D3D3")
    stars.push(star)
    star.rate = Math.random() * (velocityRange[0] + velocityRange[1]) + velocityRange[0]
  }

  return stars
}

function drawStar(rangeWidth, rangeHeight, radiusRange, colorFill) {
  const star = new paper.Path.Circle({
    center: generatePosition(rangeWidth, rangeHeight),
    radius: Math.random() * (radiusRange[0] + radiusRange[1]) + radiusRange[0],
    fillColor: colorFill,
  });

  return star
}

function generatePosition(rangeWidth, rangeHeight) {
  return new paper.Point(
    rangeWidth * Math.random(),
    rangeHeight * Math.random()
  )
}