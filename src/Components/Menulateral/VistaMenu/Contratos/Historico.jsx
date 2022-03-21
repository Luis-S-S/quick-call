import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import data from '../../../../data/db.json';
import { detalle } from '../../../../store/actions';

function Historico() {
  const email = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAdd = (usuario) => {
    console.log(usuario)
    dispatch(detalle(usuario));
  };
  return (
    <>
      <h2 className="Titulo">Contratos finalizados</h2>
      <table className="Table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Reforma</th>
            <th>Fecha de inicio</th>
            <th>Fecha de finalizacion</th>
            <th>Calificacion</th>
            <th>-</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {data.trabajos.filter((users) => (
            users.usuario === email && users.Estado === 'Finalizado')).map((usuario) => (
              <tr>
                <td>{usuario.profesional}</td>
                <td>{usuario.funciones}</td>
                <td>{usuario.tiempo}</td>
                <td>nulo</td>
                <td><button type="button" onClick={handleAdd(usuario)}>Ver detalles</button></td>
                <td>Calificar</td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Historico;
