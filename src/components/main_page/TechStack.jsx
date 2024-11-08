import Tool from "./Tool"
import assetPaths from '../../../assetPaths.js'

function TechStack() {
  return (
    <div id="tech-stack" className="apply-spacing txt-align-center">
      <h1 className="section-title">TECH STACK</h1>
      <p className="section-subtext">A non exaustive list of technologies that I've worked with</p>
      <div className="contents">
        <Tool name="Python" description="A type of snake" path={assetPaths.devToolPath + "python.svg"}/>
        <Tool name="JavaScript" description="Java's cousin" path={assetPaths.devToolPath + "javascript.svg"}/>
        <Tool name="HTML" description="A prog lang" path={assetPaths.devToolPath + "html.svg"}/>
        <Tool name="CSS" description="Same as HTML" path={assetPaths.devToolPath + "css.svg"}/>
        <Tool name="Java" description="Somone's cousin" path={assetPaths.devToolPath + "java.svg"}/>
        <Tool name="Haskell" description="Hawsk Tuell" path={assetPaths.devToolPath + "haskell.svg"}/>
        <Tool name="Ruby" description="It's the gem" path={assetPaths.devToolPath + "ruby.svg"}/>
        <Tool name="React" description="My reaction to the info:" path={assetPaths.devToolPath + "react.svg"}/>
        <Tool name="Webpack" description="bdsm bundle" path={assetPaths.devToolPath + "webpack.svg"}/>
        <Tool name="Vite" description="more bdsm bundle" path={assetPaths.devToolPath + "vite.svg"}/>
        <Tool name="GSAP" description="need to explore more" path={assetPaths.devToolPath + "gsap.png"}/>
        <Tool name="Happstack" description="cant even find the logo" path={assetPaths.devToolPath + "happstack.png"}/>
        <Tool name="SpringBoot" description="java" path={assetPaths.devToolPath + "springboot.svg"}/>
        <Tool name="Jest" description="testing" path={assetPaths.devToolPath + "jest.svg"}/>
        <Tool name="React Testing Library" description="more testing" path={assetPaths.devToolPath + "testing_library.svg"}/>
        <Tool name="SQLite" description="database" path={assetPaths.devToolPath + "sqlite.svg"}/>
        <Tool name="Postman" description="delivery guy" path={assetPaths.devToolPath + "postman.svg"}/>
        <Tool name="Git/GitHub" description="home" path={assetPaths.devToolPath + "git.svg"}/>
        <Tool name="Figma" description="what's ligma?" path={assetPaths.devToolPath + "figma.svg"}/>
        <Tool name="VS Code" description="chads use vim (not me)" path={assetPaths.devToolPath + "vscode.svg"}/>
        <Tool name="Pycharm" description="jet giving brain" path={assetPaths.devToolPath + "pycharm.svg"}/>
        <Tool name="IntelliJDEA" description="jet giving dumb brains" path={assetPaths.devToolPath + "intellijdea.svg"}/>
      </div>
    </div>
  )
}

export default TechStack