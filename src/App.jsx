import { useState } from 'react'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Sidebar from './componentes/alumnos/SideBar'
import Footer from './componentes/footer'
import MisMaterias from './Paginas/Profesor/MisMaterias'

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
