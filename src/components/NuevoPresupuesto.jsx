import { useContext, useState } from 'react'
import MyContext from '../my_context'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({ setPresupuestoValido }) => {
  const { presupuesto, setPresupuesto } = useContext(MyContext)

  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = e => {
    e.preventDefault()

    if (!presupuesto || presupuesto < 0) {
      setMensaje('El presupuesto es incorrecto')
      return
    }

    setMensaje('')
    setPresupuestoValido(true)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form
        onSubmit={handlePresupuesto}
        className='formulario'
      >
        <div className='campo'>
          <label>Definir Presupuesto</label>
          <input
            className='nuevo-presupuesto'
            type='number'
            placeholder='Agrega tu presupuesto'
            value={presupuesto}
            onChange={e => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input
          type='submit'
          value='Agregar'
        />
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto
