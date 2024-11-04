import NavBar from './components/common/NavBar.jsx'
import Header from './components/main_page/Header.jsx'
import About from './components/main_page/About.jsx'
import Footer from './components/common/Footer.jsx'
import InfoBar from './components/main_page/InfoBar.jsx'
import TechStack from './components/main_page/TechStack.jsx'
import Experiences from './components/main_page/Experiences.jsx'
import ProjectSect from './components/main_page/ProjectSect.jsx'
import Contact from './components/common/Contact.jsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

function MainPage() {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const animation = gsap.timeline({})
    const scrollAnimation = triggerElem =>  {
      return gsap.timeline({
        scrollTrigger: {
          trigger: triggerElem,
          start: "top center",
        }
      })
    }

    // nav bar animation
    const navBarDur = 2
    const navBar = document.querySelectorAll("#nav-bar li")
    console.log(navBar)
    for (let i = 0; i < navBar.length; i++) {
      console.log(navBar[i])
      animation.from(navBar[i], { opacity: 0, duration: navBarDur }, i * 0.2)
    }

    // header animation
    const headerDur = 0.8
    animation.from("#header-subheading", { opacity: 0, duration: headerDur, translateY: 50 }, 0)
    animation.from("#header-title", { opacity: 0, duration: headerDur, translateY: 100 }, 0.2)
    animation.from("#header-subtitle", { opacity: 0, duration: headerDur, translateY: 50 }, 0.6)
    
    const sections = ["#about", "#tech-stack", "#experiences", "#project-sect", "#contact"]

    // title animation
    sections.forEach(title => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: "top center",
        }
      })

      titleAnimation.from(title + " .section-title", {
        opacity: 0,
        x: 150, 
        skewX: 30, 
        duration: 1
      }, 0)
    })


  })

  
  return (
    <>
      <NavBar />
      <Header />
      <InfoBar />
      <About /> 
      <TechStack />
      <Experiences />
      <ProjectSect />
      <Contact />
      <Footer />
      <script type="module" src="animations/mainPageAnimation.js"></script>
    </>
  )
}

export default MainPage
