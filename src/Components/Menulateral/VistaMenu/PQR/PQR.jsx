import React, { useState } from 'react';
import HacerPQR from './HacerPQR';
import MisPQR from './MisPQR';

export default function PQR() {
  const [state, setState] = useState({ MisPQR: true });
  function click(e) {
    setState({ [e.target.name]: true });
  }

  return (
    <div className="VistaMenu">
      <div className="Cabezera">
        <button type="button" onClick={click} name="HacerPQR">Hacer nuevo PQR</button>
        <button type="button" onClick={click} name="MisPQR">Mis PQR</button>
      </div>
      <div className="Cuerpo">
        {state.MisPQR && (<MisPQR />) }
        {state.HacerPQR && (<HacerPQR />) }
      </div>
    </div>

  );
}
