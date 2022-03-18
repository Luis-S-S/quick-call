/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
        <Link to="" onClick={click} name="Historico">Mis Historico de contrato</Link>
        <Link to="" onClick={click} name="Proceso">Contratos en Proceso</Link>
      </div>
      <div className="Cuerpo">
        {state.Historico ? (<Historico />) : <span />}
        {state.Proceso ? (<Proceso />) : <span />}
      </div>
    </div>

  );
}

export default Contratos;
