import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import data from '../../../../data/db.json';
import { detalle } from '../../../../store/actions';

export default function Historico() {
  const dispatch = useDispatch();

  function handleAdd(usuario) {
    dispatch(detalle(['Detalle', usuario.target.name]));
  }

  const email = useSelector((state) => state.user);

  return (
    <>
      <h2 className="Titulo">Contratos finalizados</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Reforma</th>
            <th>Fecha de inicio</th>
            <th>Fecha de finalizacion</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {data.trabajos.filter((users) => (
            users.usuario === email && users.Estado === 'Finalizado')).map((usuario) => (
              <tr>
                <td>{usuario.profesional}</td>
                <td>{usuario.funciones}</td>
                <td>{usuario.fechaInicio}</td>
                <td>{usuario.fechaFinal}</td>
                <td><button type="button" name={usuario.id} onClick={handleAdd}>Ver detalles</button></td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
