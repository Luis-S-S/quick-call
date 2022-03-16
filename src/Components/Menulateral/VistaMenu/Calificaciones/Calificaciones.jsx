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
        <li><button type="button" onClick={click}><Link to="google.com" name="HistoricoCalificaciones">-- Mi historico de calificaciones</Link></button></li>
        <li><button type="button" onClick={click}><Link to="google.com" name="PorCalificar">-- Trabajos por calificar</Link></button></li>
      </div>
      <div>
        <div className="Cuerpo">
          {state.Historico ? (<HistoricoCalificaciones />) : <div />}
          {state.Proceso ? (<PorCalificar />) : <div />}
        </div>
      </div>
    </div>

  );
}
