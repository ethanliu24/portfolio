import Tool from "./Tool"
import assetPaths from '../../../assetPaths.js'

function TechStack() {
  return (
    <div id="tech-stack" className="apply-spacing txt-align-center">
      <h1 className="section-title">TECH STACK</h1>
      <p className="section-subtext">A non exaustive list of technologies that I've worked with</p>
      <div className="contents">
        <Tool name="Python" description="A type of snake" path={assetPaths.python}/>
        <Tool name="JavaScript" description="Java's cousin" path={assetPaths.javascript}/>
        <Tool name="HTML" description="A prog lang" path={assetPaths.html}/>
        <Tool name="CSS" description="Same as HTML" path={assetPaths.css}/>
        <Tool name="Java" description="Somone's cousin" path={assetPaths.java}/>
        <Tool name="Haskell" description="Hawsk Tuell" path={assetPaths.haskell}/>
        <Tool name="Ruby" description="It's the gem" path={assetPaths.ruby}/>
        <Tool name="React" description="My reaction to the info:" path={assetPaths.react}/>
        <Tool name="Webpack" description="bdsm bundle" path={assetPaths.webpack}/>
        <Tool name="Vite" description="more bdsm bundle" path={assetPaths.vite}/>
        <Tool name="GSAP" description="need to explore more" path={assetPaths.gsap}/>
        <Tool name="Rails" description="rails" path={assetPaths.rails}/>
        <Tool name="SpringBoot" description="java" path={assetPaths.springboot}/>
        <Tool name="Happstack" description="cant even find the logo" path={assetPaths.happstack}/>
        <Tool name="Jest" description="testing" path={assetPaths.jest}/>
        <Tool name="React Testing Library" description="more testing" path={assetPaths.reactTestingLibrary}/>
        <Tool name="MongoDB" description="ducking swing for 207 cant even connect to springboot" path={assetPaths.mongodb}/>
        <Tool name="SQLite" description="database" path={assetPaths.sqlite}/>
        <Tool name="Git/GitHub" description="home" path={assetPaths.git}/>
        <Tool name="Docker" description="so docky" path={assetPaths.docker}/>
        <Tool name="Postman" description="delivery guy" path={assetPaths.postman}/>
        <Tool name="Figma" description="what's ligma?" path={assetPaths.figma}/>
        <Tool name="VS Code" description="chads use vim (not me)" path={assetPaths.vsCode}/>
        <Tool name="Pycharm" description="jet giving brain" path={assetPaths.pycharm}/>
        <Tool name="IntelliJDEA" description="jet giving dumb brains" path={assetPaths.intellijdea}/>
      </div>
    </div>
  )
}

export default TechStack