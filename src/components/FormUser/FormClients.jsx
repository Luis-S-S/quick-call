/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createJobs } from '../../services/jobs';
import { allCategories } from '../../services/categories';
import ButtonRound from '../ButtonRound/ButtonRound';
import LinkRound from '../LinkRound/LinkRound';

export default function FormsClients() {
  const { _id } = useSelector((state) => state.user);
  const { id } = useParams();

  const [form, setForm] = useState({});
  const [category, setCategory] = useState();
  const [evidence, setEvidence] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [choice, setChoice] = useState();
  const [send, setSend] = useState(false);

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
      evidenceClients: [...evidence],
      conditionsClients: [...conditions],
    };
    console.log('xxxxxxxxxxx');
    createJobs(formtodo);
    // setSend(true);
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

  return (
    <div className="formUsers">
      <h2>Hacer consulta</h2>
      <h4>El profesional te contactara en las proximas 24 horas</h4>
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
        )}
    </div>
  );
}
