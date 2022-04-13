import './Login.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createProfessional } from '../../services/professional';
import { allCategories } from '../../services/categories';
import { removeElementFromArray, addElementInArray } from '../../services/general';

export default function SignupProfessional() {
  const [categories, setCategories] = useState();
  let form = {};

  const handlerOnClick = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      form[name] = !form[name] ? [value] : addElementInArray(value, form[name]);
    } else {
      form[name] = removeElementFromArray(value, form[name]);
    }
    if (form[name].length === 0) { delete form[name]; }
  };

  const handlerOnChange = (e) => {
    const { name, value } = e.target;
    if (value === '') {
      delete form[name];
    } else {
      form = {
        ...form,
        [name]: value,
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProfessional(form);
    form = {};
    document.querySelector('form').reset();
  };

  useEffect(async () => {
    const response = await allCategories();
    setCategories(response);
  }, []);

  return (
    <div className="login">
      <div className="container">
        <Link className="link__logo" to="/">
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
          <label htmlFor="name" hidden>Nombre</label>
          <input name="name" placeholder="Ingresa tu nombre" type="text" onChange={handlerOnChange} />
          <label htmlFor="email" hidden>Correo Electrónico</label>
          <input name="email" placeholder="Michelle@ejemplo.com" type="email" onChange={handlerOnChange} />
          <label htmlFor="password" hidden>Contraseña</label>
          <input name="password" placeholder="Ingresa tu contraseña" type="password" onChange={handlerOnChange} />
          <label htmlFor="confirmPassword" hidden>Confirmar contraseña</label>
          <input name="confirmPassword" placeholder="Confirmar contraseña" type="password" onChange={handlerOnChange} />
          <label htmlFor="phoneNumber" hidden>Numero de telefono</label>
          <input name="phoneNumber" placeholder="Numero de contacto" type="tel" onChange={handlerOnChange} />
          <label htmlFor="city">Ciudad</label>
          <select name="city" id="city" onClick={handlerOnChange}>
            <option value="" key=""> </option>
            {categories?.filter((category) => category.filter === 'city').map(
              (todo) => (
                <option
                  key={todo.value}
                  value={todo.value}
                >
                  {todo.value}
                </option>
              ),
            )}
          </select>
          <label htmlFor="myDescription" hidden>Mi Descripción</label>
          <textarea name="myDescription" placeholder="Cuentanos sobre ti" cols="30" rows="10" onChange={handlerOnChange} />
          <label htmlFor="specialty" hidden>Especialidades</label>
          <fieldset>
            <legend>Especialidades</legend>
            <label htmlFor="certified" hidden>Certificado</label>
            <div id="certified">
              <p>Certificado</p>
              {categories?.filter((category) => category.filter === 'specialty')
                .map((category) => (
                  <label htmlFor="specialty.certified">
                    {category.value}
                    <input type="checkbox" name="specialty.certified" value={category.value} onClick={handlerOnClick} />
                  </label>
                ))}
            </div>
            <label htmlFor="inProgress" hidden>En Progreso</label>
            <div id="inProgress">
              <p>En Progreso</p>
              {categories?.filter((category) => category.filter === 'specialty')
                .map((category) => (
                  <label htmlFor="specialty.inProgress">
                    {category.value}
                    <input type="checkbox" name="specialty.inProgress" value={category.value} onClick={handlerOnClick} />
                  </label>
                ))}
            </div>
            <label htmlFor="nonCertified" hidden>No Certificado</label>
            <div id="nonCertified">
              <p>En Progreso</p>
              {categories?.filter((category) => category.filter === 'specialty')
                .map((category) => (
                  <label htmlFor="specialty.nonCertified">
                    {category.value}
                    <input type="checkbox" name="specialty.nonCertified" value={category.value} onClick={handlerOnClick} />
                  </label>
                ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>Seguridad Social</legend>
            <label htmlFor="eps">EPS</label>
            <select name="socialSecurity.eps" id="socialSecurity.eps" onClick={handlerOnChange}>
              <option value="" key=""> </option>
              {categories?.filter((result) => result.type === 'eps').map(
                (todo) => (
                  <option
                    key={todo.value}
                    value={todo.value}
                  >
                    {todo.value}
                  </option>
                ),
              )}
            </select>
            <label htmlFor="arl">ARL</label>
            <select name="socialSecurity.arl" id="socialSecurity.arl" onClick={handlerOnChange}>
              <option value="" key=""> </option>
              {categories?.filter((result) => result.type === 'arl').map(
                (todo) => (
                  <option
                    key={todo.value}
                    value={todo.value}
                  >
                    {todo.value}
                  </option>
                ),
              )}
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="availability.startTime">Hora de inicio</label>
            <input name="availability.startTime" type="time" onChange={handlerOnChange} />
            <label htmlFor="availability.endTime">Hora de terminación</label>
            <input name="availability.endTime" type="time" onChange={handlerOnChange} />
          </fieldset>
          <div className="footer1">
            <span className="footer11">
              Ya tienes un cuenta?
              <Link to="/login">Ingresa</Link>
            </span>
            <button type="submit">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
