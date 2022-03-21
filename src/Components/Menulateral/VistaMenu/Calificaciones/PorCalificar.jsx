import React from 'react';
import Usuario from '../../../../data/Usuario.json';

export default function PorCalificar() {
  return (
    <>
      <h2 className="Titulo">Mis Trabajos por calificar</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Profesional</th>
            <th>Reforma</th>
            <th>Estado</th>
            <th>Ver detalle</th>
            <th>Calificar</th>
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
