import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ButtonRound from '../ButtonRound/ButtonRound';
import { userLogin } from '../../services/auth';
import './Login.scss';

function Login() {
  const [form, setForm] = useState({});
  const [errorMsg, setErrorMsg] = useState();
  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    if (name === 'email') { value = value.toLowerCase(); }

    setForm({
      ...form,
      [name]: value.trim(),
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await userLogin(form);
    if (user.status === 200) {
      localStorage.setItem('user', await user.json());
      navigation('/');
    } else {
      setErrorMsg(await user.json());
      document.querySelector('form').reset();
    }
  };
  return (
    <div className="login">
      <div className="container">
        <Link className="link__logo" to="/">
          <img className="logo" src="images/logo/quick-call-logo.svg" alt="" />
        </Link>

        <div className="texto">
          <span className="titulo_register"> Hola de nuevo! </span>
          <span className="texto_register">Ingresar a tu cuenta</span>
        </div>
        <form className="formulario" onSubmit={handleSubmit}>
          <input name="email" placeholder="Ingresa tu E-mail" type="email" onChange={handleChange} />
          <input name="password" placeholder="Ingresa tu Contraseña" type="password" onChange={handleChange} />
          {errorMsg && (<div className="error-msg">{errorMsg}</div>)}
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
            <ButtonRound isSubmit>
              Log in
            </ButtonRound>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
