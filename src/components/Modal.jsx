import cerrarIcon from '../assets/img/cerrar.svg'

const Modal = ({ setModal }) => {
  const cerrarModal = () => {
    setModal(false)
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
    </div>
  )
}

export default Modal
