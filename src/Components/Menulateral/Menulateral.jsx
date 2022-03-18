import { useState } from 'react';
import DarseAlta from './VistaMenu/DarseAlta/DarseAlta';
import Editar from './VistaMenu/Editar/Editar';
import PQR from './VistaMenu/PQR/PQR';
import Calificaciones from './VistaMenu/Calificaciones/Calificaciones';
import Chats from './VistaMenu/Chats/Chats';
import Contratos from './VistaMenu/Contratos/Contratos';
import Favoritos from './VistaMenu/Favoritos/Favoritos';
import Pagos from './VistaMenu/Pagos/Pagos';
import Visibilidad from './VistaMenu/Visibilidad/Visibilidad';
import './Menulateral.scss';
import Historico from './VistaMenu/Contratos/Historico';

function MenuLateral() {
  const [state, setState] = useState('Contratos');
  function click(e) {
    setState(e.target.name);
  }
  function renderDashboard(vista) {
    switch (vista) {
      case 'Contratos':
        return (<Contratos />);
      case 'Calificaciones':
        return (<Calificaciones />);
      case 'Chats':
        return (<Chats />);
      case 'Editar':
        return (<Editar />);
      case 'Favoritos':
        return (<Favoritos />);
      case 'Pago':
        return (<Pagos />);
      case 'Historial':
        return (<Historico />);
      case 'DarseAlta':
        return (<DarseAlta />);
      case 'Visibilidad':
        return (<Visibilidad />);
      default:
        return Error;
    }
  }
  return (
    <div className="Menulateral">
      <div>
        <button type="button" onClick={click} name="Contratos">Mis contratos</button>
        <button type="button" onClick={click} name="Calificaciones">Mis calificaciones</button>
        <button type="button" onClick={click} name="Chats">Mis chats</button>
        <button type="button" onClick={click} name="Editar">Editar perfil</button>
        <button type="button" onClick={click} name="Visibilidad">Mi visibilidad</button>
        <button type="button" onClick={click} name="Favoritos">Mis favoritos</button>
        <button type="button" onClick={click} name="Pago">Mi informacion de pago</button>
        <button type="button" onClick={click} name="Historial">Historial de compras</button>
        <button type="button" onClick={click} name="DarseAlta">Darse de alta en pagina</button>
      </div>
      <div>
        {renderDashboard(state)}
      </div>
    </div>

  );
}

export default MenuLateral;
