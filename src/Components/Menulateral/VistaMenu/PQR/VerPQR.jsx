// import '../VistaMenu.scss';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import data from '../../../../data/db.json';
// import { trabajo } from '../../../../store/actions';

// function Detalle({ id }) {
//   const PQR = data.PQR.filter((PQRS) => (PQRS.id === id))[0];
//   const dispatch = useDispatch();

//   function handleBack() {
//     dispatch(trabajo('PQR'));
//   }

//   return (
//     <div className="VistaMenu">
//       <h2 className="Titulo">
//         Detalle PQR Id:
//         {' '}
//         {PQR.id}
//       </h2>
//       <table className="table">
//         <tr className="tr">
//           <th>Id</th>
//           <th>Profesional</th>
//           <th>Titulo</th>
//         </tr>
//         <tr className="table">
//           <td>{PQR.id}</td>
//           <td>{PQR.profesional}</td>
//           <td>{PQR.titulo}</td>
//         </tr>
//         <tr className="table">
//           <th colSpan="3">Descripcion</th>
//         </tr>
//         <tr className="table">
//           <td colSpan="3">{PQR.descripcion}</td>
//         </tr>
//         <tr className="table">
//           <th colSpan="2">Imagenes</th>
//           <th colSpan="1">Videos</th>
//         </tr>
//         <tr>
//           <td colSpan="2">{PQR.evidencias.fotos}</td>
//           <td colSpan="1">{PQR.evidencias.videos}</td>
//         </tr>
//       </table>
//       <div className="FormularioAbajo">
//         <button type="button" onClick={handleBack}> Atras </button>
//       </div>
//     </div>
//   );
// }

// Detalle.propTypes = {
//   id: PropTypes.number.isRequired,
// };

// export default Detalle;
