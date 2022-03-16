import React from 'react';
import Usuario from '../../../../data/Usuario.json';

export default function Historicodechats() {
  return (
    <>
      <h2>Mis chats dc gestion</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Profesional</th>
            <th>Reforma</th>
            <th>Estado reforma</th>
            <th>Estado de chat</th>
            <td />
          </tr>
        </thead>
        <tbody>
          {Usuario.map((Usuarios) => (
            <tr>
              <td>{Usuarios.nombre}</td>
              <td>{Usuarios.email}</td>
              <td>{Usuarios.contrasena}</td>
              <td>{Usuarios.ciudad}</td>
              <td>Abrir chats</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
