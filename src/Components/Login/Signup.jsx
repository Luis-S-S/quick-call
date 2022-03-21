import './Login.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUsuarios } from '../../Services/user';

function Signup() {
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
      <img className="imagen" src="images/logo/quick-call-logo--colored.svg" alt="" />
      <div className="principal">
        <div className="regresar">
          <Link to="/">Back</Link>
        </div>
        <div className="texto">
          <span className="titulo_register">Register</span>
          <span className="texto_register">Create your new account</span>
        </div>
        <div className="redes_sociales">
          <img src="images/icons/whatsapp-logo.svg" alt="whatsapp" />
          <img src="images/icons/facebook-icon.svg" alt="facebook" />
          <img src="images/icons/twitter-icon.svg" alt="twitter" />
          <img src="images/icons/linkedin-logo.svg" alt="linkedin" />
        </div>
        <form className="formulario" onSubmit={handleSubmit}>
          <input name="name" placeholder="Full name" type="text" onChange={handleChange} />
          <input name="email" placeholder="Michelle@example.com" type="email" onChange={handleChange} />
          <input name="password" placeholder="Password" type="password" onChange={handleChange} />
          <input name="password2" placeholder="Repeat password" type="password" onChange={handleChange} />
          <button className="boton" type="submit">Enviar</button>
        </form>

        <span className="signing">
          {' '}
          By signing up you agree to Our.
          <Link to="/login">
            Terms of Use And Privacy Notice
            {' '}
          </Link>
          {' '}
        </span>
        <span className="footer">
          Already have an account?
          <Link to="/login"> Login</Link>
        </span>
      </div>
    </div>
  );
}

export default Signup;
