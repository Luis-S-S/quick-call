import { useSelector, useDispatch } from 'react-redux';
import { setView } from '../../store/actions';
import ProfileClient from './DashboardComponents/ProfileClient/ProfileClient';
import ProfileProfessional from './DashboardComponents/ProfileProfessional/ProfileProfessional';
import Chats from './DashboardComponents/Chats';
import Favorites from './DashboardComponents/Favorites/Favorites';
import Jobs from './DashboardComponents/Jobs/Jobs';
import PQRs from './DashboardComponents/PQR/PQR';
import PaymentHistory from './DashboardComponents/PaymentHistory/PaymentHistory';
import './Dashboard.scss';

function MenuLateral() {
  const role = useSelector((state) => state.user.role);
  const viewState = useSelector((state) => state.view);
  const dispatch = useDispatch();

  const renderDashboard = (view) => {
    let profile;
    switch (view) {
      case 'Profile':
        if (role === 'client') { profile = <ProfileClient />; }
        if (role === 'professional') { profile = <ProfileProfessional />; }
        return profile;
      case 'Chats':
        return <Chats />;
      case 'Favorites':
        return <Favorites />;
      case 'Jobs':
        return <Jobs />;
      case 'PQRs':
        return <PQRs />;
      case 'PaymentHistory':
        return <PaymentHistory />;
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
        <button className="side-menu__btn" type="button" onClick={handleClick} value="Jobs">Trabajos</button>
        <button className="side-menu__btn" type="button" onClick={handleClick} value="PaymentHistory">Historial de Pagos</button>
        {
          role === 'client' && (<button className="side-menu__btn" type="button" onClick={handleClick} value="Favorites">Favoritos</button>)
        }
        <button className="side-menu__btn" type="button" onClick={handleClick} value="PQRs">PQRs</button>
      </div>
      <div className="dashboard__view">
        {renderDashboard(viewState)}
      </div>
    </div>
  );
}

export default MenuLateral;
