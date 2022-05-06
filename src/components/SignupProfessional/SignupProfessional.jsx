/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { activateMiddle } from '../../store/actions';
import { createProfessional } from '../../services/professionals';
import { uploadImage } from '../../services/upload';
import { allCategories } from '../../services/categories';
import './SignupProfessional.scss';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Validate from './Validate';

export default function SignupProfessional() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [categories, setCategories] = useState();
  const [specialty, setSpecialty] = useState([]);
  const [form, setForm] = useState({});
  const [validate, setValidate] = useState({});

  const handlerOnChange = (e) => {
    const { name, value } = e.target;
    // if (value === '') {
    //   const copy = { ...form };
    //   delete copy[name];
    //   setForm(copy);
    // } else {
    //   setForm({ ...form, [name]: value });
    // }
    if (name === 'availability.fullAvailability') {
      setForm({ ...form, [name]: e.target.checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleOnClickSubmit = async () => {
    const names = [];
    for (const special of specialty) {
      let result = null;
      if (special.evidence) {
        const formData = new FormData();
        await formData.append('file', special.evidence);
        result = await uploadImage(formData);
      }
      names.push({ name: special.name, certification: result.url });
    }
    delete form.confirmPassword;
    const data = ({ ...form, specialty: [...names] });
    const payload = {
      title: 'Has creado tu cuenta',
      text: 'Ya tienes una cuenta de profesional, ya puedes iniciar sesion',
      button: 'Aceptar',
      link: '/',
    };
    dispatch(activateMiddle(payload));
    await createProfessional(data);
  };

  useEffect(async () => {
    const response = await allCategories();
    setCategories(response);
  }, []);

  const FormTitles = ['Registrarse', 'Informacion de contacto',
    'Mis especialidades', 'Seguridad social y horario'];

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
        {(page === 0) && (
          <Page1 form={form} handlerOnChange={handlerOnChange} validate={validate} />
        )}
        {(page === 1) && (
          <Page2 form={form} handlerOnChange={handlerOnChange} categories={categories} />
        )}
        {(page === 2) && (
          <Page3
            categories={categories}
            specialty={specialty}
            setSpecialty={setSpecialty}
          />
        )}
        {(page === 3) && (
          <Page4 form={form} handlerOnChange={handlerOnChange} categories={categories} />
        )}
        <div className="footersignup">
          {(page === 0) && (
          <span className="footer11">
            Ya tienes un cuenta?
            <Link to="/login">Ingresa</Link>
          </span>
          )}
          {!(page === 0) && (
            <button className="button-round" type="button" onClick={() => { setPage((currPage) => currPage - 1); }}>
              Atras
            </button>
          )}
          <Validate
            handleOnClickSubmit={handleOnClickSubmit}
            form={form}
            setPage={setPage}
            page={page}
            setValidate={setValidate}
            validate={validate}
          />
        </div>
      </div>
    </div>
  );
}
