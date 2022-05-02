/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getJobById, updateJobById } from '../../services/jobs';
import { allCategories } from '../../services/categories';
import ButtonRound from '../ButtonRound/ButtonRound';
import LinkRound from '../LinkRound/LinkRound';

export default function FormProfessionals() {
  // const { _id } = useSelector((state) => state.user);
  const _id = '625ded5d64b874d78ccee7e4';
  const { id } = useParams();

  const [form, setForm] = useState({});
  const [category, setCategory] = useState();
  const [evidence, setEvidence] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [choice, setChoice] = useState();
  const [send, setSend] = useState(false);
  const [job, setJob] = useState({});
  const [edit, setEdit] = useState({});

  // useEffect(async () => {
  //   const job = await getJobById(id);
  //   const response = await job.json();
  //   setJob(response);
  // }, []);

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
    const formtodo = {
      client: _id,
      professional: id,
      status: 'oferta',
      ...form,
      evidence: { clients: [...evidence] },
      conditions: { clients: [...conditions] },
    };
    // createJobs(formtodo);
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

  const handlerEdit = (e) => {
    const { value } = e.target;
    console.log("value", value);
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
              {(edit.name)
                ? (
                  <>
                    <input name="title" placeholder="Ingresa nombre de reforma" type="text" onChange={handleChange} required />
                    <button className="button-edit" type="button" value="description" onClick={handlerEditChange}>Editar</button>
                  </>
                )
                : (
                  <>
                    <label htmlFor="title"></label>
                    <button className="button-edit" type="button" value="name" onClick={handlerEdit}>Editar</button>
                  </>
                )}
              ;

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
                <legend>Evidencias (opcional)</legend>
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
