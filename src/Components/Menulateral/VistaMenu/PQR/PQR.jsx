/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function PQR() {
  const vector = { Contratos: '', Calificaciones: '', Chats: '' };
  const [setState] = useState({ vector });
  function click(e) {
    setState({ ...vector, [e.target.name]: true });
  }

  return (
    <>
      <ul>
        <Link to="" onClick={click} name="Contratos">Mis contratos</Link>
        <Link to="" onClick={click} name="Calificaciones">Mis calificaciones</Link>
        <Link to="" onClick={click} name="Chats">Mis chats</Link>
      </ul>
      <ul />
    </>

  );
}
