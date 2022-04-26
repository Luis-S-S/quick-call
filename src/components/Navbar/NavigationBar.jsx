import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavigationBar.scss';
import { userLogOut } from '../../services/auth';

function NavBar() {
  const navigation = useNavigate();
  const [user, setUser] = useState(window.localStorage.user);
  const handlerLogOut = () => {
    userLogOut();
    navigation('/');
    setUser(null);
  };
  return (
    <div className="navbar">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">&#9776;</label>
        <Link to="/"><img className="logo" src="/images/logo/quick-call-logo--colored.svg" alt="logo" /></Link>
        <input type="" placeholder="   ¿Qué necesitas?..." id="search" />
        <ul>
          <li><Link to="/search">Buscar</Link></li>
          {!user
            ? (
              <>
                <li><Link to="/signup">Registrarse</Link></li>
                <li><Link to="/login">Iniciar Sesión</Link></li>

              </>
            )
            : (
              <>
                <li><Link to="/editarperfil">Editar perfil</Link></li>
                <li><button type="button" onClick={handlerLogOut}>Cerrar Sesión</button></li>
              </>
            )}
        </ul>
      </nav>
    </div>

  );
}

export default NavBar;
