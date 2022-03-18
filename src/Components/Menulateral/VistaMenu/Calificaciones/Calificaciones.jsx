/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HistoricoCalificaciones from './HistoricoCalificaciones';
import PorCalificar from './PorCalificar';

export default function Calificaciones() {
  const vector = { HistoricoCalificaciones: '', PorCalificar: '' };
  const [state, setState] = useState({ vector });
  function click(e) {
    setState({ ...vector, [e.target.name]: true });
  }

  return (
    <div className="VistaMenu">
      <div className="Cabezera">
        <Link to="" onClick={click} name="HistoricoCalificaciones">Mi historico de calificaciones</Link>
        <Link to="" onClick={click} name="PorCalificar">Trabajos por calificar</Link>
      </div>
      <div>
        <div className="Cuerpo">
          {state.Historico ? (<HistoricoCalificaciones />) : <span />}
          {state.Proceso ? (<PorCalificar />) : <span />}
        </div>
      </div>
    </div>

  );
}
