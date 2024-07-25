import { useState } from 'react'
import Navbar from './componentes/Navbar'
import Apresentation from './componentes/apresentation'
import './App.css'
import Project from './componentes/Project'
import Temple from './componentes/Temple'
import Footer from './componentes/Footer'
import Skills from './componentes/Skills'
import Navburguer from './componentes/Navburguer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Navburguer />
      <Apresentation />
      <Skills />
      <Project />
      <Temple />
      <Footer />

    </>
  )
}

export default App
