/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { activateMiddle, setView } from '../../store/actions';
import { getSingleProfessional } from '../../services/professionals';
import { uploadImage } from '../../services/upload';
import { createJobs } from '../../services/jobs';
import { createChat } from '../../services/chats';
import { allCategories } from '../../services/categories';
import ButtonRound from '../ButtonRound/ButtonRound';

export default function FormsClients() {
  const idClient = useSelector((state) => state.user._id);
  const nameClient = useSelector((state) => state.user.name);
  const { id } = useParams();

  const dispatch = useDispatch();

  const [form, setForm] = useState({});
  const [category, setCategory] = useState();
  const [evidence, setEvidence] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [choice, setChoice] = useState();

  useEffect(async () => {
    const response = await allCategories();
    const [document] = response;
    setCategory(document);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value.trim(),
    });
  };

  const HandlerSubmit = async (e) => {
    e.preventDefault();
    const names = [];
    dispatch(activateMiddle());
    const nameProfesional = (await getSingleProfessional(id)).name;
    console.log('nameClient', nameClient, 'nameProfesional', nameProfesional);
    for (const evi of evidence) {
      let result = null;

      if (evi.value) {
        const formData = new FormData();
        await formData.append('file', evi.value);
        result = await uploadImage(formData);
      }
      names.push({ name: evi.name, value: result.url });
    }
    delete form.confirmPassword;
    const formtodo = {
      client: idClient,
      clientName: nameClient,
      professional: id,
      professionalName: nameProfesional,
      status: 'Oferta',
      ...form,
      evidenceClients: [...names],
      conditionsClients: [...conditions],
    };
    dispatch(setView('Jobs'));
    // const payload = {
    //   title: 'Hemos recibido tu solicitud',
    //   text: 'El profesional se contactara con usted en las proximas 24 hrs',
    //   button: 'Aceptar',
    //   link: '/profile',
    // };
    // dispatch(activateMiddle(payload));
    const result = await createJobs(formtodo);
    await createChat({ jobId: result._id });
  };

  const handlerEvidence = (e) => {
    const { name } = e.target;
    setEvidence([...evidence, { name, value: e.target.files[0] }]);
  };
  function handlerEliminate(e) {
    const { value, name } = e.target;
    if (name === 'conditions') {
      setConditions(conditions.filter((result) => !(result.name === value)));
    } else {
      setEvidence(evidence.filter((result) => !(result.name === value)));
    }
  }

  const handlerConditions = () => {
    if (choice) {
      if (conditions.filter((element) => (element.name === choice)).length < 1) {
        setConditions([...conditions, { name: choice }]);
        setChoice();
      }
    }
  };

  const handlerChoice = (e) => {
    setChoice(e.target.value);
  };

  return (
    <div className="formUsers">
      <h2>Hacer consulta</h2>
      <h4>El profesional te contactara en las proximas 24 horas</h4>
      <div className="container">
        <form onSubmit={HandlerSubmit}>

          <label htmlFor="title">Nombre de reforma</label>
          <input name="title" placeholder="Ingresa aqui el nombre de tu reforma" type="text" onChange={handleChange} required />

          <label htmlFor="objective">Breve descripcion</label>
          <textarea name="objective" placeholder="Ingresa aqui una breve descripcion de tu reforma" type="text" onChange={handleChange} required />
          <fieldset>
            <legend>Condiciones (opcional)</legend>
            {conditions.map((todo) => (
              <div className="section">
                <label htmlFor={todo.name}>{todo.name}</label>
                <button className="button-eliminate" type="button" name="conditions" value={todo.name} onClick={handlerEliminate}>x</button>
              </div>
            ))}
            <div className="section">
              <select name="conditions" id="conditions" onChange={handlerChoice}>
                <option value="" disabled selected hidden>Selecciona las condiciones ...</option>
                {category?.conditions.map((condi) => (
                  <option value={condi}>{condi}</option>
                ))}
              </select>
              <button className="button-agregate" type="button" onClick={handlerConditions}>Agregar</button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Evidencias (opcional)</legend>
            {evidence.map((evide) => (
              <div className="section1">
                <label htmlFor={evide.value}>{`${evide.name[0]} - ${evide.value.name}  `}</label>
                <button className="button-eliminate" type="button" name="evidence" value={evide.name} onClick={handlerEliminate}>
                  x
                </button>
              </div>
            ))}
            <input type="file" name={`#${parseInt((Math.random() * 100000), 10)}`} onChange={handlerEvidence} />
          </fieldset>

          <div className="ButtonRound">
            <ButtonRound type="submit" onClickFunction={HandlerSubmit}>Enviar</ButtonRound>
          </div>
        </form>
      </div>
    </div>
  );
}
