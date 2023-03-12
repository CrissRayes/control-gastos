import { useContext } from 'react'
import MyContext from '../my_context'

const ControlPresupuesto = () => {
  const { presupuesto } = useContext(MyContext)

  const formatearCantidad = cantidad => {
    return cantidad.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP',
    })
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>Grafico</div>
      <div className='contenido-prespuesto'>
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span> {formatearCantidad(0)}
        </p>
        <p>
          <span>Gastado: </span> {formatearCantidad(0)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
