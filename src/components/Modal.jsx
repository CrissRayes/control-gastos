import { useState } from 'react'
import cerrarIcon from '../assets/img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [mensaje, setMensaje] = useState('')

  const cerrarModal = () => {
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios')

      setTimeout(() => {
        setMensaje('')
      }, 3000)

      return
    }

    guardarGasto({ nombre, cantidad, categoria })
  }

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img
          alt='Cerrar modal'
          src={cerrarIcon}
          onClick={cerrarModal}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        <div className='campo'>
          <label htmlFor='nombre'>Nombre Gasto</label>
          <input
            id='nombre'
            type='text'
            placeholder='Nombre del gasto'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad</label>
          <input
            id='cantidad'
            type='text'
            placeholder='Ingresa la cantidad. Ej: 1000'
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className='campo'>
          <label htmlFor='cantidad'>Categoría</label>
          <select
            id='categoria'
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
          >
            <option value=''>--Seleccione--</option>
            <option value='vivienda'>Vivienda</option>
            <option value='alimentacion'>Alimentación</option>
            <option value='salud'>Salud</option>
            <option value='entretencion'>Entretención</option>
            <option value='otros'>Otros</option>
          </select>
        </div>
        <input
          type='submit'
          value='Agregar Gasto'
        />
      </form>
    </div>
  )
}

export default Modal
