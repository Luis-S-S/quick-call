/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { createProfessional } from '../../services/professional';
import { allCategories } from '../../services/categories';
// import { removeElementFromArray, addElementInArray } from '../../services/general';
import './SignupProfessional.scss';
import ButtonRound from '../ButtonRound/ButtonRound';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

export default function SignupProfessional() {
  const [page, setPage] = useState(0);
  const [categories, setCategories] = useState();
  const [specialty, setSpecialty] = useState(['jardinero', 'plomero']);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    city: '',
    myDescription: '',
    'socialSecurity.eps': '',
    'socialSecurity.arl': '',
    'availability.startTime': '',
    'availability.endTime': '',
  });

  const handlerAgregate = (e) => {
    const { value } = e.target.value;
    if (specialty.filter((element) => (element === value)).length < 1) {
      console.log("specialtyvalue", value);
      setSpecialty([...specialty, value]);
    }
  };

  const handlerEliminate = (e) => {
    const { value } = e.target;
    const special = specialty.filter((specialy) => !(specialy.id === value));
    setSpecialty(special);
  };

  const handlerOnChange = (e) => {
    const { name, value } = e.target;
    if (value === '') {
      delete form[name];
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  useEffect(async () => {
    const response = await allCategories();
    setCategories(response);
  }, []);

  const FormTitles = ['Registrarse', 'Informacion de contacto',
    'Mis especialidades', 'Seguridad social y horario'];

  function PageDisplay() {
    if (page === 0) {
      return <Page1 form={form} handlerOnChange={handlerOnChange} />;
    } if (page === 1) {
      return <Page2 form={form} handlerOnChange={handlerOnChange} categories={categories} />;
    } if (page === 2) {
      return <Page3 form={form} handlerAgregate={handlerAgregate} handlerEliminate={handlerEliminate} categories={categories} specialty={specialty} />;
    }
    return <Page4 form={form} handlerOnChange={handlerOnChange} categories={categories} />;
  }

  return (
    <div className="signupprofessional">
      <div className="container">
        <Link className="link__logo" to="/">
          <img className="logo" src="images/logo/quick-call-logo.svg" alt="" />
        </Link>
        <div className="texto">
          <span className="titulo_register">{FormTitles[page]}</span>
          <span className="texto_register">Crea tu cuenta de profesional</span>
        </div>
        <div className="progressbar">
          <div
            style={{ width: page === 0 ? '33.3%' : page === 1 ? '66.6%' : '100%' }}
          />
        </div>
        {PageDisplay()}
        <div className="footersignup">
          {(page === 0) && (
          <span className="footer11">
            Ya tienes un cuenta?
            <Link to="/login">Ingresa</Link>
          </span>
          )}
          {!(page === 0) && (
            <button className="button-round" onClick={() => { setPage((currPage) => currPage - 1); }}>
              atras
            </button>
          )}
          <button
            className="button-round"
            type="submit"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert('FORM SUBMITTED');
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? 'enviar' : 'sig'}
          </button>
        </div>
      </div>
    </div>
  );
}
