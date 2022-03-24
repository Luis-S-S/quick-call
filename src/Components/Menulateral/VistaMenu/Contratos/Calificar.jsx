import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createUsuarios } from '../../../../Services/user';
import '../VistaMenu.scss';
import data from '../../../../data/db.json';
import { detalle } from '../../../../store/actions';

function Calificar({ id }) {
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
          Calificar Id:
          {' '}
          {detalles.id}
        </span>
        <input name="name" placeholder="Puntuacion" type="text" onChange={handleChange} />
        <input name="email" placeholder="Calificacion" type="email" onChange={handleChange} />
        <input name="password" placeholder="Comentarios" type="password" onChange={handleChange} />
        <div className="FormularioAbajo">
          <button type="button" name={detalles.id} onClick={handleBack}> Atras </button>
          <button className="boton" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

Calificar.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Calificar;
