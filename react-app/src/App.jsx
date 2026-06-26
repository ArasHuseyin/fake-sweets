import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import Gallery from './components/Gallery.jsx'
import Story from './components/Story.jsx'
import Manufaktur from './components/Manufaktur.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useReveal } from './useReveal.js'

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Products />
        <Gallery />
        <Story />
        <Manufaktur />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
