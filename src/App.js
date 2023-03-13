import Header from './components/Header'
import nuevoGastoIcon from './assets/img/nuevo-gasto.svg'
import { generarId } from './helpers/helpers';
import MyContext from './my_context'
import { useState } from 'react';
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos';

function App () {
  const [presupuesto, setPresupuesto] = useState( 0 )
  const [presupuestoValido, setPresupuestoValido] = useState( false )
  const [modal, setModal] = useState( false )
  const [animarModal, setAnimarModal] = useState( false )
  const [gastos, setGastos] = useState( [] )

  const handleNuevoGasto = () => {
    setModal( true )
    setTimeout( () => {
      setAnimarModal( true )
    }, 500 )
  }

  const guardarGasto = ( gasto ) => {
    gasto.id = generarId() // genera un id único y lo agrega al objeto gasto
    gasto.fecha = Date.now() // Retorna la fecha en la que se genera este objeto
    setGastos( [...gastos, gasto] )

    setAnimarModal( false )
    setTimeout( () => {
      setModal( false )
    }, 500 )
  }

  return (
    <div className={ modal && 'fijar' }>
      <MyContext.Provider value={ {
        presupuesto,
        setPresupuesto,
        presupuestoValido,
        setPresupuestoValido
      } }>
        <Header />
        { presupuestoValido && (
          <>
            <main>
              <ListadoGastos
                gastos={ gastos }
              />
            </main>
            <div className='nuevo-gasto'>
              <img
                src={ nuevoGastoIcon }
                alt='Nuevo gasto'
                onClick={ handleNuevoGasto }
              />
            </div>
          </>
        ) }

        { modal && <Modal
          setModal={ setModal }
          animarModal={ animarModal }
          setAnimarModal={ setAnimarModal }
          guardarGasto={ guardarGasto }
        /> }

      </MyContext.Provider>
    </div>
  );
}

export default App;
