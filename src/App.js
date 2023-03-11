import Header from './components/Header'
import MyContext from './my_context'
import { useState } from 'react';

function App () {

  const [presupuesto, setPresupuesto] = useState( 0 )
  const presupuestoState = { presupuesto, setPresupuesto }

  return (
    <div>
      <MyContext.Provider value={ presupuestoState }>
        <Header />
      </MyContext.Provider>
    </div>
  );
}

export default App;
