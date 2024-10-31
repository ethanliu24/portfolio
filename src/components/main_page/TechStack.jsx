import Tool from "../common/Tool"

function TechStack() {
  const path = "src/assets/dev_tools/"

  return (
    <div id="tech-stack" className="apply-spacing txt-align-center">
      <h1 className="section-title">Tech Stack</h1>
      <p className="section-subtext">A non exaustive list of technologies that I've worked with</p>
      <div className="contents">
        <Tool name="Python" description="A type of snake" path={path + "python.svg"}/>
        <Tool name="JavaScript" description="Java's cousin" path={path + "javascript.svg"}/>
        <Tool name="HTML" description="A prog lang" path={path + "html.svg"}/>
        <Tool name="CSS" description="Same as HTML" path={path + "css.svg"}/>
        <Tool name="Java" description="Somone's cousin" path={path + "java.svg"}/>
        <Tool name="Haskell" description="Hawsk Tuell" path={path + "haskell.svg"}/>
        <Tool name="Ruby" description="It's the gem" path={path + "ruby.svg"}/>
        <Tool name="React" description="My reaction to the info:" path={path + "react.svg"}/>
        <Tool name="Webpack" description="bdsm bundle" path={path + "webpack.svg"}/>
        <Tool name="Vite" description="more bdsm bundle" path={path + "vite.svg"}/>
        <Tool name="Jest" description="testing" path={path + "jest.svg"}/>
        <Tool name="React Testing Library" description="more testing" path={path + "testing_library.svg"}/>
        <Tool name="SQLite" description="database" path={path + "sqlite.svg"}/>
        <Tool name="Postman" description="delivery guy" path={path + "postman.svg"}/>
        <Tool name="Git/GitHub" description="home" path={path + "git.svg"}/>
        <Tool name="Figma" description="what's ligma?" path={path + "figma.svg"}/>
        <Tool name="VS Code" description="chads use vim (not me)" path={path + "vscode.svg"}/>
        <Tool name="Pycharm" description="jet giving brain" path={path + "pycharm.svg"}/>
        <Tool name="IntelliJDEA" description="jet giving dumb brains" path={path + "intellijdea.svg"}/>

      </div>
    </div>
  )
}

export default TechStack