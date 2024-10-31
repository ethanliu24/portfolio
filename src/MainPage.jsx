import NavBar from './components/common/NavBar.jsx'
import Header from './components/main_page/Header.jsx'
import About from './components/main_page/About.jsx'
import Footer from './components/common/Footer.jsx'
import InfoBar from './components/main_page/InfoBar.jsx'
import TechStack from './components/main_page/TechStack.jsx'

function MainPage() {
  return (
    <>
      <NavBar />
      <Header />
      <InfoBar />
      <About /> 
      <TechStack />
      <Footer />
    </>
  )
}

export default MainPage
