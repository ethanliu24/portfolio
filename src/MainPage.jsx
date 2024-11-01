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
    let navBarAnimation = gsap.timeline();

    navBarAnimation.from("#nav-bar-home", { opacity: 0, duration: 2 }, 0)
    navBarAnimation.from("#nav-bar-about", { opacity: 0, duration: 2 }, 0.4)
    navBarAnimation.from("#nav-bar-experiences", { opacity: 0, duration: 2 }, 0.6)
    navBarAnimation.from("#nav-bar-projects", { opacity: 0, duration: 2 }, 0.8)
    navBarAnimation.from("#nav-bar-contacts", { opacity: 0, duration: 2 }, 1)
    navBarAnimation.from("#nav-bar-playground", { opacity: 0, duration: 2 }, 1.2)

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
