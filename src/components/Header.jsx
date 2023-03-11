import { useContext } from 'react'
import MyContext from '../my_context'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = () => {
  const { presupuestoValido, setPresupuestoValido } = useContext(MyContext)

  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {presupuestoValido ? (
        <ControlPresupuesto />
      ) : (
        <NuevoPresupuesto setPresupuestoValido={setPresupuestoValido} />
      )}
    </header>
  )
}

export default Header
