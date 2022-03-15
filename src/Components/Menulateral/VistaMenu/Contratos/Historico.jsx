import React from 'react';
import Usuario from '../../../../data/Usuario';

export const Historico = ()=> {
  return (
    <>
      <h2>Mi historico de pagos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th></th>
            <th>Reforma</th>
            <th></th>
            <th>Fecha de inicio</th>
            <th></th>
            <th>Fecha de finalizacion</th>
          </tr>
        </thead>
        <tbody>
        {Usuario.map((Usuarios) => (
            <tr>
              <td>{Usuarios.nombre}</td>
              <td></td>
              <td>{Usuarios.email}</td>
              <td></td>
              <td>{Usuarios.contrasena}</td>
              <td></td>
              <td>{Usuarios.ciudad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    )}
