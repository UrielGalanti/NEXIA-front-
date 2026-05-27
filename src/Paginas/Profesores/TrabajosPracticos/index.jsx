import { useState } from 'react'
import Materia from '../../../componentes/profesor/Materia'
import Sidebar from '../../../componentes/alumnos/SideBar'
import Footer from '../../../componentes/footer'
import TrabajoPractico from '../../../componentes/profesor/TrabajoPractico'
import './misCursos.css'

function MisCursos() {
  const [trabajos, setTrabajos] = useState([
  ])
  return (
    <>
    <Sidebar/>
      <section>
        <h1>Mis Cursos</h1>
          <div className="materias-grid">
          {trabajos.map((item) => (
            <TrabajoPractico titulo={item.titulo} unidad={item.unidad}
            />
          ))}
      </div>
      </section>
    <Footer/>
    </>
  )
}

export default MisCursos
