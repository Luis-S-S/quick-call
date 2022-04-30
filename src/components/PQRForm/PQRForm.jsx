import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPQR } from '../../services/pqrs';
import { setView } from '../../store/actions';
import ButtonRound from '../ButtonRound/ButtonRound';
import './PQRForm.scss';

export default function PQRForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const [form, setForm] = useState({ subject: '', description: '' });
  const [subjectErrorMsg, setSubjectErrorMsg] = useState('');
  const [descriptionErrorMsg, setDescriptionErrorMsg] = useState('');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value.trim() });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (form.subject.length === 0) {
      setSubjectErrorMsg('El asunto es requerido');
      return;
    }
    setSubjectErrorMsg('');

    if (form.description.length === 0) {
      setDescriptionErrorMsg('Una descripción es requerida');
      return;
    }
    setDescriptionErrorMsg('');

    const response = await createPQR(_id, form);
    if (response.status === 201) {
      dispatch(setView('PQRs'));
      navigate('/profile');
    }
  };

  return (
    <div className="pqr-form__container">
      <form onSubmit={handleOnSubmit} className="pqr-form">
        <h1 className="pqr-form__title">Crear PQR</h1>
        <div className="pqr-form__control">
          <label htmlFor="subject" className="pqr-form__label">Asunto</label>
          <input
            name="subject"
            type="text"
            className="pqr-form__input"
            placeholder="Ingrese una frase que describa el problema"
            aria-placeholder="Ingrese una frase que describa el problema"
            onChange={handleOnChange}
          />
        </div>
        <span className="pqr-form__msg--error">{subjectErrorMsg}</span>
        <div className="pqr-form__control">
          <label htmlFor="description" className="pqr-form__label">Descripción</label>
          <textarea
            name="description"
            type="text"
            className="pqr-form__input"
            aria-placeholder="Por favor describa en detalle su inconveniente"
            onChange={handleOnChange}
            placeholder="Por favor describa en detalle su inconveniente"
            rows={5}
            cols={50}
          />
        </div>
        <span className="pqr-form__msg--error">{descriptionErrorMsg}</span>
        <label htmlFor="file" className="pqr-form__label">Si tienes fotos o videos, puedes compartirlos para una solución más rápida</label>
        <input name="file" type="file" className="pqr-form__input--file" aria-placeholder="Ingrese una frase que describa el problema" />
        <ButtonRound isSubmit>Subir</ButtonRound>
      </form>
    </div>
  );
}
