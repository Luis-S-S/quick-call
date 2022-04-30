import { useState, useEffect } from 'react';
// import { createJobs } from '../../services/jobs';
import { allCategories } from '../../services/categories';
import ButtonRound from '../ButtonRound/ButtonRound';

export default function FormsClients() {
  const [form, setForm] = useState({});
  const [category, setCategory] = useState();
  const [evidence, setEvidence] = useState([]);

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
    // createJobs(form);
  };

  const handlerEvidence = (e) => {
    const { name } = e.target;
    setEvidence([...evidence, { name: [name], value: e.target.files[0] }]);
  };
  function handlerEliminate(e) {
    const { value } = e.target;
    const special = evidence.filter((eviden) => !(eviden.name[0] === value));
    setEvidence(special);
  }

  return (
    <div className="formUsers">
      <h2>Hacer consulta</h2>
      <h4>El profesional te contactara en las proximas 24 horas</h4>
      <div className="container">
        <form onSubmit={HandlerSubmit}>

          <label htmlFor="name">Nombre de reforma</label>
          <input name="name" placeholder="Ingresa aqui el nombre de tu reforma" type="text" onChange={handleChange} required />

          <label htmlFor="objectives">Breve descripcion</label>
          <textarea name="objectives" placeholder="Ingresa aqui una breve descripcion de tu reforma" type="text" onChange={handleChange} required />
          <label htmlFor="objectives">Condiciones (opcional)</label>
          <textarea name="conditions" placeholder="Ingresa aqui las condiciones del trabajo (opcional)" type="text" onChange={handleChange} required />

          <select name="conditions" id="conditions">
            <option value="" key=""> </option>
            {category?.conditions.map((condi) => (
              <option value={condi}>{condi}</option>
            ))}
          </select>

          {evidence.map((evide) => (
            <div className="specialty">
              <label htmlFor={evide.value}>{`${evide.name[0]} - ${evide.value.name}  `}</label>
              <button className="button-eliminate" type="button" value={evide.name} onClick={handlerEliminate}>
                Eliminar
              </button>
            </div>
          ))}
          <div className="specialty">
            <input className="button-agregate" type="file" name={`#${parseInt((Math.random() * 100000), 10)}`} onChange={handlerEvidence} />
          </div>

          <div className="ButtonRound">
            <ButtonRound type="submit">Enviar</ButtonRound>
          </div>
        </form>
      </div>
    </div>
  );
}
