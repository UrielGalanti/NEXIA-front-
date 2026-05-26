import { useState } from 'react'
import CardMateria from '../../../componentes/alumnos/CardMateria'
import Sidebar from '../../../componentes/alumnos/SideBar'
import Footer from '../../../componentes/footer'
import './misMaterias.css'

function MisMaterias() {
  const [materias, setMaterias] = useState([
    {
      id: 1,
      titulo: "Matemáticas",
      curso: "5° A",
      profesor: "Prof. Ricardo Espinoza",
      avatarUrl: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      titulo: "Lengua",
      curso: "5° A",
      profesor: "Prof. Mercedes Sosa",
      avatarUrl: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      titulo: "Ciencias Naturales",
      curso: "5° A",
      profesor: "Prof. Alejandro Gómez",
      avatarUrl: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      titulo: "Historia",
      curso: "5° A",
      profesor: "Prof. Julia Alvarez",
      avatarUrl: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      titulo: "Geografía",
      curso: "5° A",
      profesor: "Prof. Martín Rodríguez",
      avatarUrl: "https://via.placeholder.com/150"
    }
  ])

  return (
    <>
      <Sidebar />
      <section>
        <h1>Mis Materias</h1>
        <div className="materias-grid">
          {materias.map((item) => (
            <CardMateria
              key={item.id}
              titulo={item.titulo}
              curso={item.curso}
              profesor={item.profesor}
              avatarUrl={item.avatarUrl}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default MisMaterias