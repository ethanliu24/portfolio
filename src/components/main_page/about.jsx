function About() {
  return (
    <div id="about" className="apply-spacing .txt-align-center">
      <h1 className="section-title">About</h1>
      <div className="contents">
        <img src="src/assets/my_pic.jpeg" alt="my picture" className="picture" />
        <div className="text-contents">
          <p>
            Hello! I am a second-year Computer Science student at the University of Toronto with a passion 
            for building web applications that come to life on both front and back ends.
            While I love full-stack development, I am excited to dive into general software engineering, 
            computer networks, AI, machine learning, operating systems and more!
          </p>
          <p>
            Outside school, I also do som fencing (the sport, not the ones in the garden) and am a 
            music enthusiast. You can learn more about me <a href="">here</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About