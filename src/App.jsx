import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Projects from './components/Projects'
import Technos from './components/Technos'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Technos />
      <Contact />
      <SocialLinks />
    </div>
  )
}

export default App
