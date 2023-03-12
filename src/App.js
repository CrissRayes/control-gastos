import Header from './components/Header'
import nuevoGastoIcon from './assets/img/nuevo-gasto.svg'

import MyContext from './my_context'
import { useState } from 'react';

function App () {
  const [presupuesto, setPresupuesto] = useState( 0 )
  const [presupuestoValido, setPresupuestoValido] = useState( false )

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
            />
          </div>
        ) }
      </MyContext.Provider>
    </div>
  );
}

export default App;
