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
        <li><button type="button" onClick={click}><Link to="google.com" name="Chatsabiertos">Mis chats</Link></button></li>
        <li><button type="button" onClick={click}><Link to="google.com" name="Historicodechats">Lista de Chat cerrados</Link></button></li>
        <li><button type="button" onClick={click}><Link to="google.com" name="Chats">Mis chats</Link></button></li>
      </div>
      <div className="Cuerpo">
        {state.Historico ? (<Chatsabiertos />) : <div />}
        {state.Proceso ? (<Historicodechats />) : <div />}
      </div>
    </div>

  );
}
