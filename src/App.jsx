import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sidebar from './componentes/alumnos/SideBar'
import Footer from './componentes/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/>
      <Footer/>
    </>
  )
}

export default App
