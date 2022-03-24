import { Link } from 'react-router-dom';
import './Login.scss';
import ButtonRound from '../ButtonRound/ButtonRound';

export default function Signup() {
  return (
    <div className="login">
      <div>
        <img className="imagen" src="images/img/planta.png" alt="" />
      </div>
      <div className="principal">
        <Link to="/">
          <img className="logo" src="images/logo/quick-call-logo.svg" alt="" />
        </Link>
        <div className="texto">
          <span className="titulo_register">Registrarse</span>
          <span className="texto_register">Qué tipo de usuario quieres registrar</span>
        </div>
        <form className="formulario">
          <div className="boton11">
            <Link to="/signup_client"><ButtonRound href="/signup_client">Cliente</ButtonRound></Link>
            <Link to="/signup_professional"><ButtonRound>Profesional</ButtonRound></Link>
          </div>
          <div className="redes_sociales">
            <img src="images/icons/whatsapp-logo.svg" alt="whatsapp" />
            <img src="images/icons/facebook-icon.svg" alt="facebook" />
            <img src="images/icons/twitter-icon.svg" alt="twitter" />
            <img src="images/icons/linkedin-logo.svg" alt="linkedin" />
          </div>
          <div className="footer1">
            <span className="footer11">
              ¿Ya tienes una cuenta?.
              <Link to="/login">Ingresa aqui</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
