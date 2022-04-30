/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { createJobs } from '../../services/jobs';
import ButtonRound from '../ButtonRound/ButtonRound';

export default function FormsProfessionals() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createJobs(form);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Nombre de reforma" />
        <input name="Nombre de reforma" placeholder="Ingresa aqui el nombre de tu reforma" type="text" onChange={handleChange} />
        <label htmlFor="Descripcion breve " />
        <input name="Descripcion breve" placeholder="Ingresa aqui una breve descripcion de tu reforma" type="text" onChange={handleChange} />
        <label htmlFor="Criterios de aceptacion" />
        <input name="Criterios de aceptacion" placeholder="Ingresa aqui los criterios de aceptacion del trabajo" type="text" onChange={handleChange} />
        <label htmlFor="Condiciones (opcional)" />
        <input name="Condiciones" placeholder="Ingresa aqui las condiciones del trabajo (opcional)" type="text" onChange={handleChange} />
        <ButtonRound isSubmit>Submit</ButtonRound>
      </form>
    </div>
  );
}
