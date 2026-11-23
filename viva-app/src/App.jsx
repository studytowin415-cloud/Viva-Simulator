import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Compare from './components/Compare'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <div style={{ background: '#0D0D0D' }}>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Compare />
      <CTA />
      <Footer />
    </div>
  )
}
