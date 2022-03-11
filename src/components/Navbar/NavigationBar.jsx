import './NavigationBar.scss';

function NavBar() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" className='checkbtn'>&#9776;</label>
      <img src='logo/quick-call-logo--colored.svg' alt="logo"/>
      <input type="" placeholder="   ¿Qué necesitas?..." id='search'/>
      <ul>
        <li><a href='#'>Servicios</a></li>
        <li><a href='#'>Registrarse</a></li>
        <li><a href='#'>Iniciar Sesión</a></li>
      </ul>
    </nav>
  )
}

export default NavBar

