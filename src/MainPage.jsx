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
    // nav bar animation
    const navBarDur = 2
    let navBarAnimation = gsap.timeline();

    navBarAnimation.from("#nav-bar-home", { opacity: 0, duration: navBarDur }, 0)
    navBarAnimation.from("#nav-bar-about", { opacity: 0, duration: navBarDur }, 0.4)
    navBarAnimation.from("#nav-bar-experiences", { opacity: 0, duration: navBarDur }, 0.6)
    navBarAnimation.from("#nav-bar-projects", { opacity: 0, duration: navBarDur }, 0.8)
    navBarAnimation.from("#nav-bar-contacts", { opacity: 0, duration: navBarDur }, 1)
    navBarAnimation.from("#nav-bar-playground", { opacity: 0, duration: navBarDur }, 1.2)

    // header animation
    const headerDur = 0.8
    let headerAnimation = gsap.timeline({
      ScrollTrigger: {
        trigger: "#header",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=200",
      }
    })

    headerAnimation.from("#header-subheading", { opacity: 0, duration: headerDur, translateY: 50 }, 0)
    headerAnimation.from("#header-title", { opacity: 0, duration: headerDur, translateY: 100 }, 0.2)
    headerAnimation.from("#header-subtitle", { opacity: 0, duration: headerDur, translateY: 50 }, 0.6)

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
    </>
  )
}

export default MainPage
