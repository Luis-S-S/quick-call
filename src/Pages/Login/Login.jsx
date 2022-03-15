import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  return (
    <div className="login">
      <img className="imagen" src="/images/IMAGEN.png" alt="" />
      <div className="principal">
        <div className="regresar">
          <div>
            <img src="images/back.svg" alt="" />
          </div>
        </div>
        <div className="register">
          <div className="register1">
            <span className="titulo_register">Welcome back</span>
            <span className="texto_register">Login in your accounts</span>
          </div>
          <div className="ramita">
            <img src="images/ramita.png" alt="" />
          </div>
        </div>
        <div className="formulario">
          <input placeholder="Input your E-mail" type="email" />
          <input placeholder="Input your Password" type="password" />
        </div>
        <span className="signing">Usar login social </span>
        <span className="footer">
          Already have an account?
          {' '}
          <Link to="/Signup"> Ir a Registro</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
