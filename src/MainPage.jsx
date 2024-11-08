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
    const sections = ["#about", "#tech-stack", "#experiences", "#project-sect", "#contact"]
    const animation = gsap.timeline({})
    const scrollAnimation = triggerElem =>  {
      return gsap.timeline({
        scrollTrigger: {
          trigger: triggerElem,
          start: "top bottom",
        }
      })
    }

    // nav bar animation
    const navBarDur = 2
    const navBar = document.querySelectorAll("#nav-bar li")
    for (let i = 0; i < navBar.length; i++) {
      animation.from(navBar[i], { opacity: 0, duration: navBarDur }, i * 0.2)
    }

    // header animation
    const headerDur = 0.8
    animation.from("#header-subheading", { opacity: 0, duration: headerDur, translateY: 50 }, 0)
    animation.from("#header-title", { opacity: 0, duration: headerDur, translateY: 100 }, 0.2)
    animation.from("#header-subtitle", { opacity: 0, duration: headerDur, translateY: 50 }, 0.6)
    

    // info bar animation 
    scrollAnimation("#info-bar-location").from("#info-bar-location", { x: -50, duration: 1 }, 0)
    scrollAnimation("#get-resume").from("#get-resume", { opacity: 0, x: 50, duration: 1 }, 0.2)
    scrollAnimation("#info-bar-btns .playground").from("#info-bar-btns .playground", { opacity: 0, x: 50, duration: 1 }, 0.4)
    const infoBarIcons = document.querySelectorAll("#info-bar-socials .icon")
    for (let i = 0; i < infoBarIcons.length; i++) {
      scrollAnimation("#" + infoBarIcons[i].id).from(infoBarIcons[i], { opacity: 0 }, 0.1)
    }

    // about animation
    scrollAnimation("#about img").from("#about img", { opacity: 0, scaleX: 0.6, duration: 0.6 }, 0)
    scrollAnimation(".text-contents").from(".text-contents", { opacity: 0, x: 50, skewX: 10, duration: 1 }, 0)

    // tech stack animation
    scrollAnimation("#tech-stack").from(".dev-tool-div", { opacity: 0, y: 30, stagger: 0.05 }, 0)

    // experiences animation
    scrollAnimation("#experiences").from("#experiences", { opacity: 0, scaleY: 0.2, duration: 0.7 }, 0)
    const experiences = document.querySelectorAll(".experience-div")
    for (let i = 0; i < experiences.length; i++) {
      scrollAnimation("#experiences").from(experiences[i], {
        opacity: 0,
        duration: 0.4,
        y: 100,
      }, i * 0.2 + 0.1)
    }

    // projects animation
    const projects = document.querySelectorAll(".project-card-container")
    for (let i = 0; i < projects.length; i++) {
      // container
      scrollAnimation("#" + projects[i].id).from(projects[i], {
        opacity: 0,
        x: i % 2 === 0 ? 100 : -100,
        duration: 1,
      }, 0.2)

      // project info
      const projectTitle = document.getElementById(`#${projects[i].id} .title-container a`)
      const githubIcon = document.querySelector(`#${projects[i].id} .title-container .github-icon`)
      const webIcon = document.querySelector(`#${projects[i].id} .title-container .web-icon`)

      if (projectTitle) scrollAnimation("#" + projects[i].id).from(projectTitle, { opacity: 0 }, 1)
      if (githubIcon) scrollAnimation("#" + projects[i].id).from(githubIcon, { opacity: 0 }, 1.4)
      if (webIcon) scrollAnimation("#" + projects[i].id).from(webIcon, { opacity: 0 }, 1.8)
    }

    // contact animation
    scrollAnimation("#contact").from("#contact-txt", { opacity: 0, y: 100, duration: 0.8 }, 0)
    const contacts = document.querySelectorAll("#contact .icon")
    for (let i = 0; i < contacts.length; i++) {
      scrollAnimation("#contact").from(contacts[i], { opacity: 0, duration: 1 }, i * 0.4 + 1)
    }
    
    // general animations
    for (let i = 0; i < sections.length; i++) {
      const title = sections[i]
      
      // title animation
      scrollAnimation(title).from(title + " .section-title", {
        opacity: 0.5,
        x: -10, 
        skewX: -10, 
        duration: 1
      }, 0)

      // subtext animation
      const subtext = document.querySelector(`${title} .section-subtext`)
      if (subtext) {
        scrollAnimation(title).from(subtext, {
          opacity: 0.5,
          x: 10, 
          skewX: 10, 
          duration: 1
        }, 0)
      }
    }
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
