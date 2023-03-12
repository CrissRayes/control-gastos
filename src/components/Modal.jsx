import cerrarIcon from '../assets/img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const cerrarModal = () => {
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
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
      <form className={`formulario ${animarModal ? 'animar' : ''}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  )
}

export default Modal
