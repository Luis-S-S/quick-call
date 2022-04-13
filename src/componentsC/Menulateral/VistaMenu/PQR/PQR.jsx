import React, { useState } from 'react';
import HacerPQR from './HacerPQR';
import MisPQR from './misPQR';

function PQR() {
  const [state, setState] = useState({ MisPQR: true });
  function click(e) {
    setState({ [e.target.name]: true });
  }

  return (
    <div className="VistaMenu">
      <div className="Cabezera">
        <button type="button" onClick={click} name="MisPQR">Mis PQR</button>
        <button type="button" onClick={click} name="HacerPQR">Hacer nuevo PQR</button>
      </div>
      <div className="Cuerpo">
        {state.MisPQR && (<MisPQR />) }
        {state.HacerPQR && (<HacerPQR />) }
      </div>
    </div>

  );
}

export default PQR;
