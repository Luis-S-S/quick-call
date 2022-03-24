import './Login.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUsuarios } from '../../Services/user';
import ButtonRound from '../ButtonRound/ButtonRound';

export default function SignupProfessional() {
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
    await createUsuarios(form);
    setForm({});
    document.querySelector('form').reset();
  };

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
          <span className="texto_register">Crea tu cuenta de profesional</span>
        </div>
        <div className="redes_sociales">
          <img src="images/icons/whatsapp-logo.svg" alt="whatsapp" />
          <img src="images/icons/facebook-icon.svg" alt="facebook" />
          <img src="images/icons/twitter-icon.svg" alt="twitter" />
          <img src="images/icons/linkedin-logo.svg" alt="linkedin" />
        </div>
        <form className="formulario" onSubmit={handleSubmit}>
          <input name="name" placeholder="Ingresa tu nombre" type="text" onChange={handleChange} />
          <input name="email" placeholder="Michelle@ejemplo.com" type="email" onChange={handleChange} />
          <input name="password" placeholder="Ingresa tu contraseña" type="password" onChange={handleChange} />
          <input name="password2" placeholder="Ingresa tus especialidades" type="password" onChange={handleChange} />
          <input name="jobs" placeholder="Tipos de trabajo" type="password" onChange={handleChange} />
          <input name="socialsecure" placeholder="Seguridad social (EPS, ARL,etc)" type="password" onChange={handleChange} />
          <input name="disponibility" placeholder="Disponibilidad" type="password" onChange={handleChange} />
          <input name="phonenumber" placeholder="Numero de contacto" type="password" onChange={handleChange} />
          <div className="footer1">
            <span className="footer11">
              Ya tienes un cuenta?
              <Link to="/login">Ingresa</Link>
            </span>
            <ButtonRound type="submit">
              Registrarse
            </ButtonRound>
          </div>
        </form>
      </div>
    </div>
  );
}
