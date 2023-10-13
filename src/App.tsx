import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, SocialMedia, Hero, Navbar, Tech, Projects, StarsCanvas } from './components'

const App = () => {
  return (
   <BrowserRouter>
    <div className="relative z-0">
      <div className="bg-no-repeat bg-gradient-to-r from-pink-500 to-yellow-500">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Projects />
      <SocialMedia />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
   </BrowserRouter>
  )
}

export default App;
