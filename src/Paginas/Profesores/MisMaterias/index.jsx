import { useState } from 'react'
import Materia from '../../../componentes/profesor/Materia'
import Sidebar from '../../../componentes/alumnos/SideBar'
import Footer from '../../../componentes/footer'
import './misCursos.css'

function MisCursos() {
  const [materias, setMaterias] = useState([
  {
    id: 1,
    materia: "Matemáticas",
    grado: "5°A",
  },
  {
    id: 2,
    materia: "Lengua",
    grado: "5°A",
  },
  {
    id: 3,
    materia: "Ciencias Naturales",
    grado: "5°A",
  },
  {
    id: 4,
    materia: "Historia",
    grado: "5°A",
  },
  {
    id: 5,
    materia: "Geografía",
    grado: "5°A",
  }
  ])
  return (
    <>
    <Sidebar/>
      <section>
        <h1>Mis Cursos</h1>
          <div className="materias-grid">
          {materias.map((item) => (
            <Materia
              key={item.id}
              materia={item.materia}
              grado={item.grado}
            />
          ))}
      </div>
      </section>
    <Footer/>
    </>
  )
}

export default MisCursos
