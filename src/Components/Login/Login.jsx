import { Link } from 'react-router-dom';
import './Login.scss';
import { useState } from 'react';
import ButtonRound from '../ButtonRound/ButtonRound';

function Login() {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className="container">
        {/* Quitamos el Link que va a home="/" */}
        <img className="logo" src="images/logo/quick-call-logo.svg" alt="" />

        <div className="texto">
          <span className="titulo_register"> Hola de nuevo! </span>
          <span className="texto_register">Ingresar a tu cuenta</span>
        </div>
        <form className="formulario" onSubmit={handleSubmit}>
          <input name="email" placeholder="Ingresa tu E-mail" type="email" onChange={handleChange} />
          <input name="password" placeholder="Ingresa tu Contraseña" type="password" onChange={handleChange} />
          <div className="redes_sociales">
            <img src="images/icons/whatsapp-logo.svg" alt="whatsapp" />
            <img src="images/icons/facebook-icon.svg" alt="facebook" />
            <img src="images/icons/twitter-icon.svg" alt="twitter" />
            <img src="images/icons/linkedin-logo.svg" alt="linkedin" />
          </div>
          <div className="footer1">
            <span className="footer11">
              ¿No tienes una cuenta?.
              <Link to="/signup">Registrate aqui</Link>
            </span>
            <ButtonRound type="submit">
              Log in
            </ButtonRound>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
