import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUserProfile } from '../../store/actions';
import { userLogin } from '../../services/auth';
import ButtonRound from '../ButtonRound/ButtonRound';
import './Login.scss';

function Login() {
  const [form, setForm] = useState({});
  const [errorMsg, setErrorMsg] = useState();
  const dispatch = useDispatch();
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
      dispatch(fetchUserProfile());
      navigation('/');
    } else {
      setErrorMsg(await user.json());
      document.querySelector('form').reset();
    }
  };
  return (
    <div className="login">
      <div className="container">
        <div>
          <Link className="link__logo" to="/">
            <img className="logo" src="images/logo/quick-call-logo.svg" alt="" />
          </Link>
        </div>

        <div className="texto">
          <span className="titulo_register"> Hola de nuevo! </span>
          <span className="texto_register">Ingresar a tu cuenta</span>
        </div>
        <form className="formulario" onSubmit={handleSubmit}>
          <input name="email" placeholder="Ingresa tu E-mail" type="email" onChange={handleChange} />
          <input name="password" placeholder="Ingresa tu Contraseña" type="password" onChange={handleChange} />
          {errorMsg && (<div className="error-msg">{errorMsg}</div>)}
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
