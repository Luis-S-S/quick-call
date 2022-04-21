/* eslint-disable no-useless-escape */
import './Login.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '../../services/clients';
import ButtonRound from '../ButtonRound/ButtonRound';

export default function SignupClient() {
  const [form, setForm] = useState({});
  const [isValidated, setIsValidated] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();

  const validateOnChange = (name, value) => {
    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    switch (name) {
      case 'email':
        if (!emailRegExp.test(value)) {
          setEmailError('Email no válido');
          setIsValidated(false);
        } else {
          setEmailError('');
          setIsValidated(true);
        }
        break;
      case 'password':
        if (value.length < 8) {
          setPasswordError('Longitud mínima de 8 caracteres');
          setIsValidated(false);
        } else {
          setPasswordError('');
          setIsValidated(true);
        }
        break;
      case 'confirmPassword':
        if (value !== form.password) {
          setConfirmPasswordError('Las contraseñas no coinciden');
          setIsValidated(false);
        } else {
          setConfirmPasswordError('');
          setIsValidated(true);
        }
        break;
      default:
        break;
    }
  };

  const validateOnSubmit = () => {
    if (!form.name) {
      setErrorMsg('El nombre es requerido');
      return setIsValidated(false);
    }
    if (!form.email) {
      setErrorMsg('El email es requerido');
      return setIsValidated(false);
    }
    if (!form.password) {
      setErrorMsg('La contraseña es requerida');
      return setIsValidated(false);
    }
    if (!form.confirmPassword) {
      setErrorMsg('Debe confirmar la contraseña');
      return setIsValidated(false);
    }
    return isValidated;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateOnChange(name, value);
    setForm({
      ...form,
      [name]: value.trim(),
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    validateOnSubmit();
    if (isValidated) {
      await createClient(form);
      setForm({});
      setErrorMsg();
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
          <span className="titulo_register">Registrarse</span>
          <span className="texto_register">Crea tu nueva cuenta</span>
        </div>
        <div className="redes_sociales">
          <img src="images/icons/whatsapp-logo.svg" alt="whatsapp" />
          <img src="images/icons/facebook-icon.svg" alt="facebook" />
          <img src="images/icons/twitter-icon.svg" alt="twitter" />
          <img src="images/icons/linkedin-logo.svg" alt="linkedin" />
        </div>
        {errorMsg && (<div className="error-msg">{errorMsg}</div>)}
        <form className="formulario" onSubmit={handleSubmit}>
          <input name="name" placeholder="Ingresa tu nombre" type="text" onChange={handleChange} />
          <input name="email" placeholder="Ejemplo@ejemplo.com" type="text" onChange={handleChange} />
          {emailError && (<div className="error-msg">{emailError}</div>)}
          <input name="password" placeholder="Ingresa tu contraseña" type="password" onChange={handleChange} />
          {passwordError && (<div className="error-msg">{passwordError}</div>)}
          <input name="confirmPassword" placeholder="Repite tu contraseña" type="password" onChange={handleChange} />
          {confirmPasswordError && (<div className="error-msg">{confirmPasswordError}</div>)}
          <div className="footer1">
            <span className="footer11">
              Ya tienes un cuenta?
              <Link to="/login">Ingresa</Link>
            </span>
            <ButtonRound isSubmit>
              Registrarse
            </ButtonRound>
          </div>
        </form>
      </div>
    </div>
  );
}
