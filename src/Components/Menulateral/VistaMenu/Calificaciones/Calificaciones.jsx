import { useState } from 'react';
import HistoricoCalificaciones from './HistoricoCalificaciones';
import PorCalificar from './PorCalificar';

export default function Calificaciones() {
  const [state, setState] = useState({ HistoricoCalificaciones: true });
  function click(e) {
    setState({ [e.target.name]: true });
  }
  return (
    <div className="VistaMenu">
      <div className="Cabezera">
        <button type="button" onClick={click} name="HistoricoCalificaciones">Mi historico de calificaciones</button>
        <button type="button" onClick={click} name="PorCalificar">Trabajos por calificar</button>
      </div>
      <div>
        <div className="Cuerpo">
          {state.HistoricoCalificaciones && <HistoricoCalificaciones />}
          {state.PorCalificar && <PorCalificar />}
        </div>
      </div>
    </div>

  );
}
