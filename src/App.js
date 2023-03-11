import Header from './components/Header'
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
      </MyContext.Provider>
    </div>
  );
}

export default App;
