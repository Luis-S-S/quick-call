import React from 'react';
import Misfavoritos from '../../../../data/Misfavoritos.json';

export default function Favoritos() {
  return (
    <>
      <h2>Mis profesionales favoritos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Profesional</th>
            <th>Especialidad</th>
            <th>Horario disponibilidad</th>
            <th>Disponibilidad</th>
          </tr>
        </thead>
        <tbody>
          {Misfavoritos.map((Favorito) => (
            <tr>
              <td>{Favorito.nombre}</td>
              <td>{Favorito.email}</td>
              <td>{Favorito.contrasena}</td>
              <td>{Favorito.ciudad}</td>
              <td>Quitar</td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
