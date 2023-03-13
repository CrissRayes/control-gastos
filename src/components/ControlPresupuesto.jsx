import { useContext, useEffect, useState } from 'react'
import MyContext from '../my_context'

const ControlPresupuesto = () => {
  const { presupuesto, gastos } = useContext(MyContext)
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    )
    setGastado(totalGastado)

    const totalDisponible = presupuesto - totalGastado
    setDisponible(totalDisponible)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gastos])

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
          <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
