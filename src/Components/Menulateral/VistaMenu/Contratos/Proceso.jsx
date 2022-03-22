import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import data from '../../../../data/db.json';
import { detalle } from '../../../../store/actions';

function Proceso() {
  const dispatch = useDispatch();

  function handleAdd(usuario) {
    dispatch(detalle(['Detalle', usuario.target.name]));
  }

  function handleCalificar(usuario) {
    dispatch(detalle(['Calificar', usuario.target.name]));
  }

  const email = useSelector((state) => state.user);

  return (
    <>
      <h2 className="Titulo">Contratos activos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Funciones</th>
            <th>Fecha de inicio</th>
            <th>Ver detalle</th>
            <th>Calificacion</th>
          </tr>
        </thead>
        <tbody>
          {data.trabajos.filter((users) => (
            users.usuario === email && users.Estado === 'EnProceso')).map((usuario) => (
              <tr>
                <td>{usuario.profesional}</td>
                <td>{usuario.funciones}</td>
                <td>{usuario.fechaInicio}</td>
                <td><button type="button" name={usuario.id} onClick={handleAdd}>Ver detalles</button></td>
                <button type="button" name={usuario.id} onClick={handleCalificar}> Calificar </button>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Proceso;
