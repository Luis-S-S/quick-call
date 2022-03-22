import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUsuarios } from '../../../../Services/user';
import '../VistaMenu.scss';
import data from '../../../../data/db.json';
import { detalle } from '../../../../store/actions';

export default function FormPQR({ id }) {
  const detalles = data.trabajos.filter((trabajoses) => (trabajoses.id === id))[0];
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const datatosend = {
    //   ...form, profile: 'imagen.png',
    // };
    await createUsuarios(form);
    setForm({});
    document.querySelector('form').reset();
  };

  function handleBack(usuario) {
    dispatch(detalle(['Detalle', usuario.target.name]));
  }

  return (
    <div className="VistaMenu">
      <form className="formulario" onSubmit={handleSubmit}>
        <span className="titulo_register">
          Realizar PQR Id:
          {' '}
          {detalles.id}
        </span>
        <input name="name" placeholder="Titulo" type="titulo" onChange={handleChange} />
        <input name="email" placeholder="Asunto" type="subtitulo" onChange={handleChange} />
        <input name="password" placeholder="Descripcion PQR" type="texto" onChange={handleChange} />
        <input name="password" placeholder="Adjuntar evidencia" type="evidencia" onChange={handleChange} />
        <div className="FormularioAbajo">
          <button type="button" name={detalles.id} onClick={handleBack}> Atras </button>
          <button className="boton" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
