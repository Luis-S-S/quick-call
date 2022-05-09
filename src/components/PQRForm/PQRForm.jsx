import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createPQR } from '../../services/pqrs';
import { setView, activateMiddle } from '../../store/actions';
import { uploadImage } from '../../services/upload';
import FileInputPQR from '../FileInputPQR/FileInputPQR';
import ButtonRound from '../ButtonRound/ButtonRound';
import './PQRForm.scss';

export default function PQRForm() {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.user);
  const [form, setForm] = useState({ subject: '', description: '' });
  const [evidenceArray, setEvidenceArray] = useState([]);
  const [subjectErrorMsg, setSubjectErrorMsg] = useState('');
  const [descriptionErrorMsg, setDescriptionErrorMsg] = useState('');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value.trim() });
  };

  const handleAddEvidence = () => {
    const $fileInput = document.getElementById('fileInput');
    setEvidenceArray([...evidenceArray, $fileInput.files[0]]);
    $fileInput.value = '';
  };

  const handleDeleteEvidence = (e) => {
    const newArray = evidenceArray.filter((file) => file.name !== e.target.name);
    setEvidenceArray(newArray);
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

    const promises = evidenceArray.map((file) => {
      const formData = new FormData();
      formData.append('file', file);
      return uploadImage(formData);
    });
    const cloudinaryResp = await Promise.all(promises);
    const evidence = cloudinaryResp.map((cloudinary) => cloudinary.url);

    const response = await createPQR(_id, { ...form, evidence });
    if (response.status === 201) {
      const payload = {
        title: 'Solicitud de PQR',
        text: 'PQR creada con éxito',
        button: 'Aceptar',
        link: '/profile',
      };
      dispatch(setView('PQRs'));
      dispatch(activateMiddle(payload));
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
        {/* <label htmlFor="file" className="pqr-form__label">Si tienes fotos o videos, puedes compartirlos para una solución más rápida</label> */}
        {
          evidenceArray.map((evidence) => (
            <FileInputPQR
              key={evidence?.name}
              name={evidence?.name}
              onClickFunction={handleDeleteEvidence}
            />
          ))
        }
        <div className="pqr-form__input--container">
          <input
            id="fileInput"
            name="file"
            type="file"
            className="pqr-form__input--file"
            aria-label="Si tienes fotos o videos, puedes compartirlos para una solución más rápida"
          />
          <ButtonRound isSubmit={false} onClickFunction={handleAddEvidence}>
            Añadir evidencia
          </ButtonRound>
        </div>
        <ButtonRound isSubmit>Subir</ButtonRound>
      </form>
    </div>
  );
}
