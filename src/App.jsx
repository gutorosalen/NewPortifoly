import { useState } from 'react'
import Navbar from './componentes/Navbar'
import Apresentation from './componentes/apresentation'
import './App.css'
import Project from './componentes/Project'
import Temple from './componentes/Temple'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Apresentation />
      <Project />
      <Temple />
    </>
  )
}

export default App
