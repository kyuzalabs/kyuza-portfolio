import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="bg-grid absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(900px 600px at 18% -8%, rgba(255,255,255,0.07), transparent 60%), radial-gradient(700px 500px at 88% 4%, rgba(255,255,255,0.04), transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}