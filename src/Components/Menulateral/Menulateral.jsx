import { useSelector, useDispatch } from 'react-redux';
import DarseAlta from './VistaMenu/DarseAlta/DarseAlta';
import Editar from './VistaMenu/Editar/Editar';
import PQR from './VistaMenu/PQR/PQR';
import VerPQR from './VistaMenu/PQR/VerPQR';
import FormPQR from './VistaMenu/PQR/FormPQR';
import Chats from './VistaMenu/Chats/Chats';
import Contratos from './VistaMenu/Contratos/Contratos';
import Detalle from './VistaMenu/Contratos/Detalle';
import Calificar from './VistaMenu/Contratos/Calificar';
import Favoritos from './VistaMenu/Favoritos/Favoritos';
import Pagos from './VistaMenu/Pagos/Pagos';
import Visibilidad from './VistaMenu/Visibilidad/Visibilidad';
import './Menulateral.scss';
import { trabajo } from '../../store/actions';

function MenuLateral() {
  const states = useSelector((state) => state.vista);
  const id = useSelector((state) => state.id);
  const dispatch = useDispatch();

  function click(e) {
    dispatch(trabajo(e.target.name));
  }
  function renderDashboard(vista) {
    switch (vista) {
      case 'Contratos': return (<Contratos />);
      case 'Chats': return (<Chats />);
      case 'Editar': return (<Editar />);
      case 'Favoritos': return (<Favoritos />);
      case 'Pago': return (<Pagos />);
      case 'PQR': return (<PQR />);
      case 'DarseAlta': return (<DarseAlta />);
      case 'Visibilidad': return (<Visibilidad />);
      case 'Detalle': return (<Detalle id={id} />);
      case 'Calificar': return (<Calificar id={id} />);
      case 'VerPQR': return (<VerPQR id={id} />);
      case 'FormPQR': return (<FormPQR id={id} />);
      default: return Error;
    }
  }
  return (
    <div className="Menulateral">
      <div className="Menulateral1">
        <button type="button" onClick={click} name="Contratos">Mis contratos</button>
        <button type="button" onClick={click} name="Chats">Mis chats</button>
        <button type="button" onClick={click} name="Editar">Editar perfil</button>
        <button type="button" onClick={click} name="Visibilidad">Mi visibilidad</button>
        <button type="button" onClick={click} name="Favoritos">Mis favoritos</button>
        <button type="button" onClick={click} name="Pago">Mi pago</button>
        <button type="button" onClick={click} name="PQR">PQR</button>
        <button type="button" onClick={click} name="DarseAlta">Darse de alta</button>
      </div>
      <div>
        {renderDashboard(states)}
      </div>
    </div>

  );
}

export default MenuLateral;
