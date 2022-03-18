/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Chatsabiertos from './Chatsabiertos';
import Historicodechats from './Historicodechats';

export default function Chats() {
  const vector = { Historicodechats: '', Chatsabiertos: '', Chats: '' };
  const [state, setState] = useState({ vector });
  function click(e) {
    setState({ ...vector, [e.target.name]: true });
  }

  return (
    <div className="VistaMenu">
      <div className="Cabezera">
        <Link to="" onClick={click} name="Chatsabiertos">Mis chats</Link>
        <Link to="" onClick={click} name="Historicodechats">Lista de Chat cerrados</Link>
      </div>
      <div className="Cuerpo">
        {state.Historico ? (<Chatsabiertos />) : <div />}
        {state.Proceso ? (<Historicodechats />) : <div />}
      </div>
    </div>

  );
}
