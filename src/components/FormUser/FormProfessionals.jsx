/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import { getJobById, updateJobById } from '../../services/jobs';
import { allCategories } from '../../services/categories';
import ButtonRound from '../ButtonRound/ButtonRound';
import LinkRound from '../LinkRound/LinkRound';

export default function FormProfessionals() {
  // const { _id } = useSelector((state) => state.user);
  const id = '6270a63f96f1980ecd58c4e5';
  const { _id } = useParams();

  const [form, setForm] = useState({});
  const [category, setCategory] = useState();
  const [evidence, setEvidence] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [choice, setChoice] = useState();
  const [send, setSend] = useState(false);
  const [job, setJob] = useState({});
  const [edit, setEdit] = useState({});

  useEffect(async () => {
    const jobs = await getJobById(id);
    const response = await jobs.json();
    console.log('xxxxxxx', response);
    setJob(response);
  }, []);

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
    const { title, objective } = job;
    const update = {
      title, objective, conditionsProfessionals: [...conditions],
    };
    updateJobById(id, update);
    // setSend(true);
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

  const handlerEditChange = (e) => {
    const { value } = e.target;
    setJob({ ...job, ...form });
    setEdit({ [value]: false });
    setForm();
  };

  const handlerEdit = (e) => {
    const { value } = e.target;
    setEdit({ [value]: true });
  };

  return (
    <div className="formUsers">
      <h2>Esquema de contrato</h2>
      <h4>Formulario para cliente </h4>
      {(send)
        ? (
          <div className="send">
            <h2>Formulario enviado</h2>
            <LinkRound type="submit" link="/">Volver a Home</LinkRound>
          </div>
        )
        : (
          <div className="container">
            <form onSubmit={HandlerSubmit}>

              <label htmlFor="title">Nombre de reforma</label>
              <div className="section">
                {(edit.name)
                  ? (
                    <>
                      <input name="title" placeholder={job.title} type="text" onChange={handleChange} required />
                      <button className="button-agregate" type="button" value="name" onClick={handlerEditChange}>Cambiar</button>
                    </>
                  )
                  : (
                    <>
                      <label htmlFor="title">{job.title}</label>
                      <button className="button-edit" type="button" value="name" onClick={handlerEdit}>Editar</button>
                    </>
                  )}
              </div>
              <br />
              <label htmlFor="objective">Breve descripcion</label>
              <div className="section">
                {(edit.objective)
                  ? (
                    <>
                      <textarea name="objective" placeholder={job.objective} type="text" onChange={handleChange} required />
                      <button className="button-agregate" type="button" value="objective" onClick={handlerEditChange}>Cambiar</button>
                    </>
                  )
                  : (
                    <>
                      <label htmlFor="objective">{job.objective}</label>
                      <button className="button-edit" type="button" value="objective" onClick={handlerEdit}>Editar</button>
                    </>
                  )}
              </div>
              <br />
              <fieldset>
                <legend>Condiciones profesional</legend>
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
                <legend>Condiciones Cliente</legend>
                {job.conditionsClients?.map((todo) => (
                  <div className="section1">
                    <label htmlFor={todo.name}>{todo.name}</label>
                  </div>
                ))}
              </fieldset>
              <div className="ButtonRound">
                <ButtonRound type="submit" onClickFunction={HandlerSubmit}>Enviar</ButtonRound>
              </div>
            </form>
          </div>
        )}
    </div>
  );
}
