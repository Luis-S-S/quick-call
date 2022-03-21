import '../VistaMenu.scss';
import { useDispatch } from 'react-redux';
import data from '../../../../data/db.json';
import { trabajo, detalle } from '../../../../store/actions';

export default function Detalle({ id }) {
  const detalles = data.trabajos.filter((trabajoses) => (trabajoses.id === id))[0];
  const dispatch = useDispatch();

  function handleBack() {
    dispatch(trabajo('Contratos'));
  }

  function handleCalificar(usuario) {
    dispatch(detalle(['Calificar', usuario.target.name]));
  }
  return (
    <div className="VistaMenu">
      <h2 className="Titulo">
        Contrato Id:
        {' '}
        {detalles.id}
      </h2>
      <table className="table">
        <tr className="tr">
          <th>Usuario</th>
          <th>Profesional</th>
          <th>Inicio</th>
          <th>Estimado</th>
        </tr>
        <tr className="table">
          <td>{detalles.usuario}</td>
          <td>{detalles.profesional}</td>
          <td>{detalles.fechaInicio}</td>
          <td>{detalles.tiempoEjecucion}</td>
        </tr>
        <tr className="table">
          <th colSpan="2">Reforma</th>
          <th>Funciones</th>
          <th>Estado</th>
        </tr>
        <tr className="table">
          <td colSpan="2">{detalles.Objetivos}</td>
          <td>{detalles.funciones}</td>
          <td>{detalles.Estado}</td>
        </tr>
        <tr className="table">
          <th colSpan="4">Condiciones</th>
        </tr>
        <tr>
          <td colSpan="4">{detalles.condiciones}</td>
        </tr>
        <tr className="table">
          <th colSpan="2">Calificacion</th>
          <th colSpan="2">Comentarios</th>
        </tr>
        <tr className="table">
          <td colSpan="2">{detalles.Comentario}</td>
          <td colSpan="2">{detalles.Puntuaciones}</td>
        </tr>
      </table>
      <div className="FormularioAbajo">
        <button type="button" onClick={handleBack}> Atras </button>
        <button type="button" name={detalles.id} onClick={handleCalificar}> Calificar </button>
      </div>
    </div>
  );
}
