import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Projects from './components/Projects'
import Technos from './components/Technos'
import Contact from './components/Contact'
import ProjectDetails from './components/ProjectDetails'

function App() {
  const [showProjectDetails, setShowProjectDetails] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleShowProjectDetails = (project) => {
    setShowProjectDetails(true)
    setSelectedProject(project)
  }

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setShowProjectDetails(false);
  };

  return (
    <div>
      <NavBar />
      <SocialLinks />
      {!showProjectDetails && (
        <>
          <Home />
          <About />
          <Projects onShowProjectDetails={handleShowProjectDetails} />
          <Technos />
          <Contact />
        </>
      )}
      {showProjectDetails && (
        <ProjectDetails project={selectedProject} onBack={handleBackToProjects} />
      )}
    </div>
  )
}

export default App
