import '../VistaMenu.scss';
import data from '../../../../data/db.json';
import { trabajo } from '../../../../store/actions';

export default function Detalle(id) {
  const detalle = data.trabajos.filter((trabajoses) => (trabajoses.id === id));
  function click(e) {
    setState({ [e.target.name]: true });
  }

  return (
    <tr>

          <td>{detalle.profesional}</td>
          <td>{detalle.funciones}</td>
          <td>{detalle.tiempo}</td>
          <td>nulo</td>
          <td>Ver detalle</td>
          <td>Calificar</td>
          </tr>
  );
}
