function About() {
  return (
    <div id="about" className="apply-spacing txt-align-center scroll-offset">
      <h1 className="section-title">About</h1>
      <div className="contents">
        <img src="src/assets/cat.jpeg" alt="a cute cat" className="picture" />
        <div className="text-contents">
          <p>
            Hello! I am a sophomore student at the University of Toronto studying Computer Science.
            I have a huge passion for building softwares that come to life on both front and back ends.
            While I love and have the most experience developing full-stack web applications, I am also 
            excited to try out different fields including more general software engineering, computer 
            networks, AI, machine learning, operating systems and more!
          </p>
          <p>
            Outside school, I do fencing and I would argue that I'm the biggest music nerd among my friends. 
            Although the cat in the image does not belong to me, he is one of the cutest cats I've met 
            (I adore cats, they make funny faces and I put them in my presentations). 
            You can learn more about me <a href="">here</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About