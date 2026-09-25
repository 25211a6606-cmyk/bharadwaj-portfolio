import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Expertise from './components/Expertise'
import TechMarquee from './components/TechMarquee'
import CareerFocus from './components/CareerFocus'
import Learning from './components/Learning'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Expertise />
        <TechMarquee />
        <CareerFocus />
        <Learning />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
