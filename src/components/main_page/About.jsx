import assetPaths from '../../../assetPaths.js'
import { PLAYGROUND_LINK } from '../../routes.js'

function About() {
  return (
    <div id="about" className="apply-spacing txt-align-center scroll-offset">
      <h1 className="section-title">ABOUT</h1>
      <div className="contents">
        <img src={assetPaths.aboutImg} alt="a cute cat" className="picture" />
        <div className="text-contents">
          <p>
            Hello! I'm a second-year student studying computer science at the University of Toronto.
            My experience mainly roots in web development with a slight emphasis on the front-end,
            using modern technologies such as React and other front-end libraries such as Three and
            GSAP to create user friendly interfaces.
          </p>

          <p>
            I love challenging myself with creative problem-solving and exploring new
            frameworks/libraries to use in my projects.
            While I absolutely enjoy creating meaningful full stack web applications,
            I am equally as excited to explore other fields in computer science, including
            computer networks, AI, ML, UI/UX, computer graphics, cybersecurity and more!
          </p>

          <p>
            Beyond coding, I do fencing and I claim to be the biggest music nerd among my friends.
            Although the cat in the image does not belong to me, he is my favourite meatball.
            (I adore cats, they make funny faces and I put them in my presentations).
            You can learn more about me <a href={PLAYGROUND_LINK}>here</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
