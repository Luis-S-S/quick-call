import React, { useState } from 'react';
import Chatsabiertos from './Chatsabiertos';
import Historicodechats from './Historicodechats';

export default function Chats() {
  const [state, setState] = useState({ Chatsabiertos: true });
  function click(e) {
    setState({ [e.target.name]: true });
  }

  return (
    <div className="VistaMenu">
      <div className="Cabezera">
        <button type="button" onClick={click} name="Chatsabiertos">Mis chats</button>
        <button type="button" onClick={click} name="Historicodechats">Lista de Chat cerrados</button>
      </div>
      <div className="Cuerpo">
        {state.Historico && (<Chatsabiertos />) }
        {state.Proceso && (<Historicodechats />) }
      </div>
    </div>

  );
}
