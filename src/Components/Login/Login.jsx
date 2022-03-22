import { Link } from 'react-router-dom';
import './Login.scss';
import { useState } from 'react';

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
    // const datatosend = {
    //   ...form, profile: 'imagen.png',
    // };
  };
  return (
    <div className="login">
      <img className="imagen" src="images/logo/quick-call-logo--colored.svg" alt="" />
      <div className="principal">
        <div className="regresar">
          <Link to="/">Back</Link>
        </div>
        <div className="texto">
          <span className="titulo_register"> Welcome back </span>
          <span className="texto_register">Login in your accounts</span>
        </div>
        <form className="formulario" onSubmit={handleSubmit}>
          <input name="email" placeholder="Input your E-mail" type="email" onChange={handleChange} />
          <input name="password" placeholder="Input your Password" type="password" onChange={handleChange} />
          <button className="boton" type="submit">Enviar</button>
        </form>
        <div className="formulario" />

        <span className="signing">Usar login social </span>
        <div className="redes_sociales">
          <img src="images/icons/whatsapp-logo.svg" alt="whatsapp" />
          <img src="images/icons/facebook-icon.svg" alt="facebook" />
          <img src="images/icons/twitter-icon.svg" alt="twitter" />
          <img src="images/icons/linkedin-logo.svg" alt="linkedin" />
        </div>
        <span className="footer">
          ¿Dont have an account?
          <Link to="/Signup"> GO Sign Up</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
