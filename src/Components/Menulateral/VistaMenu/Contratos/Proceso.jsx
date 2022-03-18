import React from 'react';
import Usuario from '../../../../data/Usuario.json';

function Proceso() {
  return (
    <>
      <h2 className="Titulo">Pagos por Evaluar</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Reforma</th>
            <th>Fecha de inicio</th>
            <th>Fecha de finalizacion</th>
            <th>Listo para evaluar</th>
          </tr>
        </thead>
        <tbody>
          {Usuario.map((Usuarios) => (
            <tr>
              <td>{Usuarios.nombre}</td>
              <td>{Usuarios.email}</td>
              <td>{Usuarios.contrasena}</td>
              <td>{Usuarios.ciudad}</td>
              <td>Ver detalle</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Proceso;
