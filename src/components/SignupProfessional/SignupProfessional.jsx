import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createProfessional } from '../../services/professional';
import { allCategories } from '../../services/categories';
import './SignupProfessional.scss';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

export default function SignupProfessional() {
  const [page, setPage] = useState(0);
  const [categories, setCategories] = useState();
  const [specialty, setSpecialty] = useState([]);
  const [choice, setChoice] = useState();
  const [form, setForm] = useState({});

  const handlerNewSpecialty = () => {
    if (choice) {
      if (specialty.filter((element) => (element === choice)).length < 1) {
        setSpecialty([...specialty, choice]);
        setChoice();
      }
    }
  };

  const handlerChoice = (e) => {
    setChoice(e.target.value);
  };

  const handlerEliminate = (e) => {
    const { value } = e.target;
    const special = specialty.filter((specialy) => !(specialy === value));
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

  const handleOnClickSubmit = async () => {
    await createProfessional({ ...form, 'specialty.certified': specialty });
    setForm({});
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
          <Page1 form={form} handlerOnChange={handlerOnChange} />
        )}
        {(page === 1) && (
          <Page2 form={form} handlerOnChange={handlerOnChange} categories={categories} />
        )}
        {(page === 2) && (
          <Page3
            handlerNewSpecialty={handlerNewSpecialty}
            handlerChoice={handlerChoice}
            handlerEliminate={handlerEliminate}
            categories={categories}
            specialty={specialty}
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
              atras
            </button>
          )}
          <button
            className="button-round"
            type="submit"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                handleOnClickSubmit(form);
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
