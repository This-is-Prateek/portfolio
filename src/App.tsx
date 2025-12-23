import About from "./components/about"
import Contacts from "./components/contacts"
import Header from "./components/header"
import HeroSection from "./components/hero-section"
import Layout from "./components/layout"
import Projects from "./components/projects"
import TechStack from "./components/tech-stack"
import Experience from "./components/experience"
import Education from "./components/education"
import Skills from "./components/skills"
import Footer from "./components/footer"

function App() {

  return (
    <Layout>
      <>
        <Header />
        <HeroSection />
        <About/>
        <Projects/>
        <Experience/>
        <Education/>
        <TechStack/>
        <Skills/>
        <Contacts/>
        <Footer/>
      </>
    </Layout>
  )
}

export default App
