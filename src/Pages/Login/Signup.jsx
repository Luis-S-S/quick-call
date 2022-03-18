import './Login.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUsers } from '../../Services/Usuario';

function Signup() {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const datatosend = {
      ...form, profile: 'imagen.png',
    };
    createUsers(datatosend);
  };

  return (
    <div className="Login">
      <div><img className="imagen" src="/images/IMAGEN.png" alt="" /></div>
      <div className="principal">
        <div className="regresar">
          <div>
            <img src="images/back.svg" alt="" />
          </div>
        </div>
        <div className="register">
          <div className="register1">
            <span className="titulo_register">Register</span>
            <span className="texto_register">Create your new account</span>
          </div>
          <div className="ramita">
            <img src="images/ramita.png" alt="" />
          </div>
        </div>
        <form className="formulario" onSubmit={handleSubmit}>
          <input name="name" placeholder="Full name" type="text" onChange={handleChange} />
          <input name="email" placeholder="Michelle@example.com" type="email" onChange={handleChange} />
          <input name="password" placeholder="Password" type="password" onChange={handleChange} />
          <input name="password2" placeholder="Repeat password" type="password" onChange={handleChange} />
          <button type="submit">Enviar</button>
        </form>

        <span className="signing">
          By signing up you agree to Our
          {' '}
          <span className="signing1">Terms of Use And Privacy Notice </span>
          {' '}
        </span>

        <span className="footer">
          Already have an account?
          {' '}
          <Link to="/login"> Login</Link>
        </span>
      </div>
    </div>
  );
}

export default Signup;
