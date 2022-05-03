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
  const id = '627020dee23c7a9dec5ca8dc';
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
    // createJobs(jobs);
    setSend(true);
  };

  const handlerEvidence = (e) => {
    const { name } = e.target;
    setEvidence([...evidence, { name: [name], value: e.target.files[0] }]);
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
    console.log('sasasa');
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
                      <input name="title" placeholder="Ingresa nombre de reforma" type="text" onChange={handleChange} required />
                      <button className="button-agregate" type="button" value="name" onClick={handlerEditChange}>Editar</button>
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
                      <textarea name="objective" placeholder="Ingresa aqui una breve descripcion de tu reforma" type="text" onChange={handleChange} required />
                      <button className="button-agregate" type="button" value="objective" onClick={handlerEditChange}>Editar</button>
                    </>
                  )
                  : (
                    <>
                      <label htmlFor="title">{job.objective}</label>
                      <button className="button-edit" type="button" value="name" onClick={handlerEdit}>Editar</button>
                    </>
                  )}
              </div>
              <br />
              <fieldset>
                <legend>Condiciones</legend>
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
              {/* {job.conditions((result) => (
                  <div className="section">
                    <label htmlFor={todo.name}>{todo.name}</label>
                    <button className="button-eliminate" type="button" name="conditions" value={todo.name} onClick={handlerEliminate}>x</button>
                  </div>
                ))} */}

              {/* <form onSubmit={handleSubmit}>
                <label htmlFor="Nombre de reforma" />
                <input name="Nombre de reforma" placeholder="Ingresa aqui el nombre de tu reforma" type="text" onChange={handleChange} />
                <label htmlFor="Descripcion breve " />
                <input name="Descripcion breve" placeholder="Ingresa aqui una breve descripcion de tu reforma" type="text" onChange={handleChange} />
                <label htmlFor="Criterios de aceptacion" />
                <input name="Criterios de aceptacion" placeholder="Ingresa aqui los criterios de aceptacion del trabajo" type="text" onChange={handleChange} />
                <label htmlFor="Condiciones (opcional)" />
                <input name="Condiciones" placeholder="Ingresa aqui las condiciones del trabajo (opcional)" type="text" onChange={handleChange} />
                <ButtonRound isSubmit>Submit</ButtonRound>
              </form> */}
              <fieldset>
                <legend>Fotos (opcional)</legend>
                {evidence.map((evide) => (
                  <div className="section">
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
        )}
    </div>
  );
}
