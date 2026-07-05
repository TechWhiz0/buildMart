import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Process from './components/Process.jsx'
import Projects from './components/Projects.jsx'
import Cta from './components/Cta.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'
import LanguagePopup from './components/LanguagePopup.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <LanguageProvider>
      <LanguagePopup />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Process />
        <Projects />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </LanguageProvider>
  )
}
