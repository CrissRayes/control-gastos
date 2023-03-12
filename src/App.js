import Header from './components/Header'
import nuevoGastoIcon from './assets/img/nuevo-gasto.svg'

import MyContext from './my_context'
import { useState } from 'react';
import Modal from './components/Modal';

function App () {
  const [presupuesto, setPresupuesto] = useState( 0 )
  const [presupuestoValido, setPresupuestoValido] = useState( false )
  const [modal, setModal] = useState( false )
  const [animarModal, setAnimarModal] = useState( false )

  const handleNuevoGasto = () => {
    setModal( true )
    setTimeout( () => {
      setAnimarModal( true )
    }, 500 )
  }

  return (
    <div>
      <MyContext.Provider value={ {
        presupuesto,
        setPresupuesto,
        presupuestoValido,
        setPresupuestoValido
      } }>
        <Header />
        { presupuestoValido && (
          <div className='nuevo-gasto'>
            <img
              src={ nuevoGastoIcon }
              alt='Nuevo gasto'
              onClick={ handleNuevoGasto }
            />
          </div>
        ) }

        { modal && <Modal
          setModal={ setModal }
          animarModal={ animarModal }
          setAnimarModal={ setAnimarModal }
        /> }

      </MyContext.Provider>
    </div>
  );
}

export default App;
