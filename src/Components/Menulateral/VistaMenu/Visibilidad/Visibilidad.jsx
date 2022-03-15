import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Visibilidad() {
  const vector = { Contratos: '', Calificaciones: '', Chats: '' };
  const [setState] = useState({ vector });
  function click(e) {
    setState({ ...vector, [e.target.name]: true });
  }

  return (
    <>
      <ul>
        <li>
          <button type="button" onClick={click}><Link to="google.com" name="Contratos">Mis contratos</Link></button>
        </li>
        <li>
          <button type="button" onClick={click}><Link to="google.com" name="Calificaciones">Mis calificaciones</Link></button>
        </li>
        <li>
          <button type="button" onClick={click}><Link to="google.com" name="Chats">Mis chats</Link></button>
        </li>
      </ul>
      <ul />
    </>

  );
}

export default Visibilidad;
