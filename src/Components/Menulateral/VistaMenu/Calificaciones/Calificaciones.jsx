import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Calificaciones() {
  const vector = { HistoricoCalificaciones: '', PorCalificar: '' };
  const [setState] = useState({ vector });
  function click(e) {
    setState({ ...vector, [e.target.name]: true });
  }

  return (
    <>
      <ul>
        <li><button type="button" onClick={click}><Link to="google.com" name="HistoricoCalificaciones">-- Mi historico de calificaciones</Link></button></li>
        <li><button type="button" onClick={click}><Link to="google.com" name="PorCalificar">-- Trabajos por calificar</Link></button></li>
      </ul>
      <ul />
    </>

  );
}

export default Calificaciones;
