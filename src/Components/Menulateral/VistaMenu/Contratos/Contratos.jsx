import { useState } from 'react';
import { Link } from 'react-router-dom';
import Historico from './Historico';
import Proceso from './Proceso';
import '../VistaMenu.scss';

function Contratos() {
  const vector = { Historico: '', Proceso: '' };
  const [state, setState] = useState({ vector });
  function click(e) {
    setState({ ...vector, [e.target.name]: true });
  }

  return (

    <div className="VistaMenu">
      <div className="Cabezera">
        <li><button type="button" onClick={click}><Link to="google.com" name="Historico">Mis Historico de contrato</Link></button></li>
        <li><button type="button" onClick={click}><Link to="google.com" name="Proceso">Contratos en Proceso</Link></button></li>
      </div>
      <div className="Cuerpo">
        {state.Historico ? (<Historico />) : <div />}
        {state.Proceso ? (<Proceso />) : <div />}
      </div>
    </div>

  );
}

export default Contratos;
