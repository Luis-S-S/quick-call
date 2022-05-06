/* eslint-disable no-useless-escape */
import './Login.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { activateMiddle } from '../../store/actions';
import { getAllClients, createClient } from '../../services/clients';
import ButtonRound from '../ButtonRound/ButtonRound';

export default function SignupClient() {
  const dispatch = useDispatch();
  let isValidated = true;
  const [form, setForm] = useState({});
  const [clients, setClients] = useState([]);
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
          isValidated = false;
        } else {
          setEmailError('');
          isValidated = true;
        }
        break;
      case 'password':
        if (value.length < 8) {
          setPasswordError('Longitud mínima de 8 caracteres');
          isValidated = false;
        } else {
          setPasswordError('');
          isValidated = true;
        }
        break;
      case 'confirmPassword':
        if (value !== form.password) {
          setConfirmPasswordError('Las contraseñas no coinciden');
          isValidated = false;
        } else {
          setConfirmPasswordError('');
          isValidated = true;
        }
        break;
      default:
        break;
    }
  };

  const validateOnSubmit = () => {
    const clientsEmailArray = clients.map((client) => client.email);

    if (!form.name) {
      setErrorMsg('El nombre es requerido');
      isValidated = false;
      return isValidated;
    }
    if (!form.email) {
      setErrorMsg('El email es requerido');
      isValidated = false;
      return isValidated;
    }
    if (clientsEmailArray.includes(form.email)) {
      setErrorMsg('Este email ya está en uso');
      isValidated = false;
      return isValidated;
    }
    if (!form.password) {
      setErrorMsg('La contraseña es requerida');
      isValidated = false;
      return isValidated;
    }
    if (!form.confirmPassword) {
      setErrorMsg('Debe confirmar la contraseña');
      isValidated = false;
      return isValidated;
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
      const payload = {
        title: 'Has creado tu cuenta',
        text: 'Ya tienes una cuenta de cliente, ya puedes iniciar sesion',
        button: 'Aceptar',
        link: '/',
      };
      dispatch(activateMiddle(payload));
    }
  };

  useEffect(async () => {
    const data = await getAllClients();
    setClients(data);
  }, []);

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
