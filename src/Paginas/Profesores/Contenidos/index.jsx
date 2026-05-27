import { useState } from 'react'
import Sidebar from '../../../componentes/alumnos/SideBar'
import Footer from '../../../componentes/footer'
import Contenido from '../../../componentes/profesor/Contenido'

function Contenidos() {
  const [trabajos, setTrabajos] = useState([
  ])
  return (
    <>
    <Sidebar/>
      <section>
        <h1>Contenidos</h1>
          <div className="materias-grid">
          {trabajos.map((item) => (
            <Contenido titulo={item.titulo} descripcion={item.descripcion} tipo={item.tipo}
            />
          ))}
      </div>
      </section>
    <Footer/>
    </>
  )
}

export default Contenidos
