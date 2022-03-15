import { useState } from 'react';
// Verificar state en los componentes
import { Link } from 'react-router-dom';
import DarseAlta from './VistaMenu/DarseAlta/DarseAlta';
import Editar from './VistaMenu/Editar/Editar';
import Historial from './VistaMenu/Historial/Historial';
import Calificaciones from './VistaMenu/Calificaciones/Calificaciones';
import Chats from './VistaMenu/Chats/Chats';
import Contratos from './VistaMenu/Contratos/Contratos';
import Favoritos from './VistaMenu/Favoritos/Favoritos';
import Pagos from './VistaMenu/Pagos/Pagos';
import Visibilidad from './VistaMenu/Visibilidad/Visibilidad';
import './Menulateral.scss';

function MenuLateral() {
  const vector = {
    Contratos: '',
    Calificaciones: '',
    Chats: '',
    Editar: '',
    Visibilidad: '',
    Favoritos: '',
    Pago: '',
    Historial: '',
    DarseAlta: '',
  };
  const [state, setState] = useState({ vector });
  function click(e) {
    setState({ ...vector, [e.target.name]: true });
  }
  return (
    <div className="Menulateral">
      <div>
        <li>
          <button type="button" onClick={click}><Link to="google.com" name="Contratos">Mis contratos</Link></button>
        </li>
        <li>
          <button type="button" onClick={click}><Link to="google.com" name="Calificaciones">Mis calificaciones</Link></button>
        </li>
        <li>
          <button type="button" onClick={click}><Link to="google.com" name="Chats">Mis chats</Link></button>
        </li>
        <li>
          <button type="button" onClick={click}><Link to="google.com" name="Editar">Editar perfil</Link></button>
        </li>
        <li>
          <button type="button" onClick={click}><Link to="google.com" name="Visibilidad">Mi visibilidad</Link></button>
        </li>
        <li>
          <button type="button" onClick={click}><Link to="google.com" name="Favoritos">Mis favoritos</Link></button>
        </li>
        <li>
          <button type="button" onClick={click}><Link to="google.com" name="Pago">Mi informacion de pago</Link></button>
        </li>
        <li>
          <button type="button" onClick={click}><Link to="google.com" name="Historial">Historial de compras</Link></button>
        </li>
        <li>
          <button type="button" onClick={click}><Link to="google.com" name="DarseAlta">Darse de alta en pagina</Link></button>
        </li>
      </div>
      <div>
        {state.Contratos ? (<Contratos />) : <div />}
        {state.Calificaciones ? (<Calificaciones />) : <div />}
        {state.Chats ? (<Chats />) : <div /> }
        {state.Editar ? (<Editar />) : <div /> }
        {state.Visibilidad ? (<Visibilidad />) : <div /> }
        {state.Favoritos ? (<Favoritos />) : <div /> }
        {state.Pago ? (<Pagos />) : <div />}
        {state.Historial ? (<Historial />) : <div /> }
        {state.DarseAlta ? (<DarseAlta />) : <div /> }
      </div>
    </div>

  );
}

export default MenuLateral;
