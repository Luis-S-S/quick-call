import { useSelector, useDispatch } from 'react-redux';
import { setView } from '../../store/actions';
import Profile from './DashboardItems/Profile';
import Chats from './DashboardItems/Chats';
import Favorites from './DashboardItems/Favorites';
import Contracts from './DashboardItems/Contracts';
import PQR from './DashboardItems/PQR';
import './Dashboard.scss';

function MenuLateral() {
  const viewState = useSelector((state) => state.view);
  const dispatch = useDispatch();

  const renderDashboard = (view) => {
    switch (view) {
      case 'Profile':
        return <Profile />;
      case 'Chats':
        return <Chats />;
      case 'Favorites':
        return <Favorites />;
      case 'Contracts':
        return <Contracts />;
      case 'PQR':
        return <PQR />;
      default:
        return Error;
    }
  };

  const handleClick = (e) => {
    const { value } = e.target;
    dispatch(setView(value));
  };

  return (
    <div className="dashboard">
      <div className="dashboard__side-menu">
        <button className="side-menu__btn" type="button" onClick={handleClick} value="Profile">Mi perfil</button>
        <button className="side-menu__btn" type="button" onClick={handleClick} value="Chats">Chats</button>
        <button className="side-menu__btn" type="button" onClick={handleClick} value="Favorites">Favoritos</button>
        <button className="side-menu__btn" type="button" onClick={handleClick} value="Contracts">Contratos</button>
        <button className="side-menu__btn" type="button" onClick={handleClick} value="PQR">PQRs</button>
      </div>
      <div className="dashboard__view">
        {renderDashboard(viewState)}
      </div>
    </div>
  );
}

export default MenuLateral;
