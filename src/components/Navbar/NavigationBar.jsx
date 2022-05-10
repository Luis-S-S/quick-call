import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../../services/auth';
import { emptyUser, setView } from '../../store/actions';
import './NavigationBar.scss';

function NavBar() {
  const [token, setToken] = useState(window.localStorage.user);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const user = useSelector((state) => state.user);

  const handlerLogOut = () => {
    userLogOut();
    dispatch(emptyUser());
    dispatch(setView('Profile'));
    navigation('/');
    setToken(null);
  };
  return (
    <div className="navbar">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">&#9776;</label>
        <Link to="/"><img className="logo" src="/images/logo/quick-call-logo--colored.svg" alt="logo" data-cy="home-logo" /></Link>
        <ul>
          <li><Link to="/search" data-cy="home-search">Buscar</Link></li>
          {!token
            ? (
              <>
                <li><Link to="/signup" data-cy="home-signup">Registrarse</Link></li>
                <li><Link to="/login" data-cy="home-login">Iniciar Sesión</Link></li>

              </>
            )
            : (
              <>
                <li><Link to="/profile" data-cy="home-profile">{user.name}</Link></li>
                <li><button type="button" onClick={handlerLogOut} data-cy="home-logout">Cerrar Sesión</button></li>
              </>
            )}
        </ul>
      </nav>
    </div>

  );
}

export default NavBar;
