import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import data from '../../../../data/db.json';
import { detalle } from '../../../../store/actions';

export default function HacerPQR() {
  const dispatch = useDispatch();

  function handlePQR(usuario) {
    dispatch(detalle(['FormPQR', usuario.target.name]));
  }

  const email = useSelector((state) => state.user);

  return (
    <>
      <h2 className="Titulo">Contratos activos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Reforma</th>
            <th>Fecha de inicio</th>
            <th>Estimado</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {data.trabajos.filter((users) => (
            users.usuario === email && users.Estado === 'EnProceso')).map((usuario) => (
              <tr>
                <td>{usuario.profesional}</td>
                <td>{usuario.funciones}</td>
                <td>{usuario.tiempo}</td>
                <td>nulo</td>
                <td><button type="button" name={usuario.id} onClick={handlePQR}>Hacer PQR</button></td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
