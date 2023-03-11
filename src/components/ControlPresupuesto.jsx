import { useContext } from 'react'
import MyContext from '../my_context'

const ControlPresupuesto = () => {
  const { presupuesto } = useContext(MyContext)

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>Grafico</div>
      <div className='contenido-prespuesto'>
        <p>
          <span>Presupuesto: </span> {presupuesto}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
