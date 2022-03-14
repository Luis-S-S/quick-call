import './NavigationBar.scss';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav classname="NavigationBar">
        <input type="checkbox" id="check" />
        <label for="check" className='checkbtn'>&#9776;</label>
        <Link to='/'><img src='logo/quick-call-logo--colored.svg' alt="logo"/></Link>
        <input type="" placeholder="   ¿Qué necesitas?..." id='search'/>
        <ul>
          <li><Link to='/'>Servicios</Link></li>
          <li><Link to='/Signup'>Registrarse</Link></li>
          <li><Link to='/Login'>Iniciar Sesión</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar

