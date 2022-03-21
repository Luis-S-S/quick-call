import React from 'react';
import Usuario from '../../../../data/Usuario.json';

export default function HistoricoCalificaciones() {
  return (
    <>
      <h2 className="Titulo">Mi historico de calificaciones</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Calificacion</th>
            <th>Ver detalle</th>
            <th>Fecha de finalizacion</th>
          </tr>
        </thead>
        <tbody>
          {Usuario.map((Usuarios) => (
            <tr>
              <td>{Usuarios.nombre}</td>
              <td />
              <td>{Usuarios.email}</td>
              <td />
              <td>{Usuarios.contrasena}</td>
              <td />
              <td>{Usuarios.ciudad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
