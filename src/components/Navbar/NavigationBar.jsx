import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userLogOut } from '../../services/auth';
import './NavigationBar.scss';

function NavBar() {
  const user = useSelector((state) => state.user);
  const navigation = useNavigate();
  const [token, setToken] = useState(window.localStorage.user);
  const handlerLogOut = () => {
    userLogOut();
    navigation('/');
    setToken(null);
  };
  return (
    <div className="navbar">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">&#9776;</label>
        <Link to="/"><img className="logo" src="/images/logo/quick-call-logo--colored.svg" alt="logo" /></Link>
        <ul>
          <li><Link to="/search">Buscar</Link></li>
          {!token
            ? (
              <>
                <li><Link to="/signup">Registrarse</Link></li>
                <li><Link to="/login">Iniciar Sesión</Link></li>

              </>
            )
            : (
              <>
                <li><Link to="/profile">{user.name}</Link></li>
                <li><button type="button" onClick={handlerLogOut}>Cerrar Sesión</button></li>
              </>
            )}
        </ul>
      </nav>
    </div>

  );
}

export default NavBar;
