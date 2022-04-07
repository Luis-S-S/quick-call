import { useState } from 'react';
import Historico from './Historico';
import Proceso from './Proceso';
import '../VistaMenu.scss';

function Contratos() {
  const [state, setState] = useState({ Proceso: true });
  function click(e) {
    setState({ [e.target.name]: true });
  }

  return (

    <div className="VistaMenu">
      <div className="Cabezera">
        <button type="button" onClick={click} name="Proceso">Contratos activos</button>
        <button type="button" onClick={click} name="Historico">Contratos finalizados</button>
      </div>
      <div className="Cuerpo">
        {state.Historico && (<Historico />) }
        {/* {state.Proceso && (<Proceso />) } */}
      </div>
    </div>

  );
}

export default Contratos;
