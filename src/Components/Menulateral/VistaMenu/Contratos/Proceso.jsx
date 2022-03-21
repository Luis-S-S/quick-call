import React from 'react';
import { useSelector } from 'react-redux';
import data from '../../../../data/db.json';

function Proceso() {
  const email = useSelector((state) => state.user);
  return (
    <>
      <h2 className="Titulo">Contratos activos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Profesional</th>
            <th>Reforma</th>
            <th>Fecha de inicio</th>
            <th>Calificado</th>
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
                <td keys={usuario.id}>Ver detalle</td>
                <td keys={usuario.id}>Calificar</td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Proceso;
