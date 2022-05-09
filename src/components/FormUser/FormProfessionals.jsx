/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateJobById } from '../../services/jobs';
import { allCategories } from '../../services/categories';
import { setView, activateMiddle } from '../../store/actions';
import ButtonRound from '../ButtonRound/ButtonRound';
import LinkRound from '../LinkRound/LinkRound';

export default function FormProfessionals({ job, id, setJob }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [category, setCategory] = useState();
  const [evidence, setEvidence] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [choice, setChoice] = useState();
  const [send, setSend] = useState(false);
  const [edit, setEdit] = useState({});

  useEffect(async () => {
    const response = await allCategories();
    const [document] = response;
    setCategory(document);
  }, []);

  const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    if (name === 'amount') { value = Number(value); } else { value = value.trim(); }
    setForm({
      ...form,
      [name]: value,
    });
  };

  const HandlerSubmit = async (e) => {
    e.preventDefault();
    dispatch(activateMiddle());
    const { title, objective, amount } = job;
    const statusUpdate = amount !== 0 ? 'Pendiente pago' : 'Oferta';
    const update = {
      title, objective, conditionsProfessionals: [...conditions], status: statusUpdate, amount,
    };
    await updateJobById(id, update);
    setSend(true);
    dispatch(setView('Jobs'));
    const payload = {
      title: 'Estado del trabajo',
      text: 'El trabajo ha sido actualizado',
      button: 'Aceptar',
      link: '/profile',
    };
    dispatch(activateMiddle(payload));
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
              <label htmlFor="amount">Precio en COP</label>
              <div className="section">
                {(edit.amount)
                  ? (
                    <>
                      <input name="amount" placeholder={job.amount} type="number" onChange={handleChange} required />
                      <button className="button-agregate" type="button" value="amount" onClick={handlerEditChange}>Cambiar</button>
                    </>
                  )
                  : (
                    <>
                      <label htmlFor="amount">{job.amount === 0 ? 'Digite el precio' : `$ ${job.amount}`}</label>
                      <button className="button-edit" type="button" value="amount" onClick={handlerEdit}>Editar</button>
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

              <div className="ButtonRound">
                <ButtonRound isSubmit onClickFunction={() => navigate(-1)}>Regresar</ButtonRound>
                <ButtonRound isSubmit onClickFunction={HandlerSubmit}>Enviar</ButtonRound>
              </div>
            </form>
          </div>
        )}
    </div>
  );
}

FormProfessionals.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string,
    objective: PropTypes.string,
    conditionsClients: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string,
    amount: PropTypes.number,
  }).isRequired,
  id: PropTypes.string.isRequired,
  setJob: PropTypes.func.isRequired,
};
