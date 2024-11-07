function About() {
  return (
    <div id="about" className="apply-spacing txt-align-center scroll-offset">
      <h1 className="section-title">ABOUT</h1>
      <div className="contents">
        <img src="src/assets/cat.jpeg" alt="a cute cat" className="picture" />
        <div className="text-contents">
          <p>
            Hello! I'm a second-year student studying computer science at the University of Toronto. 
            My main experience roots in web development with a slight emphasis on the front-end currently,
            using modern technologies such as React and other front-end libraries. 
          </p> 

          <p>
            I love challenging myself with creative problem-solving and exploring new 
            frameworks/libraries to use in my projects.
            While I absolutely enjoy creating meaning full stack web applications, 
            I am equally as excited to explore other fields in computer science, including 
            computer networks, AI, ML, UI/UX, computer graphics, cybersecurity and more!
          </p>

          <p>
            Outside school, I do fencing and I claim to be the biggest music nerd among my friends. 
            Although the cat in the image does not belong to me, he is my favourite meatball. 
            (I adore cats, they make funny faces and I put them in my presentations). 
            You can learn more about me <a href="">here</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About