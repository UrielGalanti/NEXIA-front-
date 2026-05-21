import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sidebar from './componentes/alumnos/SideBar'
import Footer from './componentes/footer'
import MisMaterias from './componentes/profesor/paginas/MisMaterias/MisMaterias'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/>
      <MisMaterias/>
      <Footer/>
    </>
  )
}

export default App
