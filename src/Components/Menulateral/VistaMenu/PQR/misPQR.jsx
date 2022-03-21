import React from 'react';
import Usuario from '../../../../data/Usuario.json';

export default function MisPQR() {
  return (
    <>
      <h2 className="Titulo">Mi historico de pagos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Reforma</th>
            <th>Fecha de inicio</th>
            <th>Fecha de finalizacion</th>
          </tr>
        </thead>
        <tbody>
          {Usuario.map((Usuarios) => (
            <tr>
              <td>{Usuarios.nombre}</td>
              <td>{Usuarios.email}</td>
              <td>{Usuarios.contrasena}</td>
              <td>{Usuarios.ciudad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
