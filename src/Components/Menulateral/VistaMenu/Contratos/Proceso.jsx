import React from 'react';
import Usuario from '../../../../data/Usuario.json';

function Proceso() {
  return (
    <>
      <h2>Pagos por Evaluar</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Reforma</th>
            <th>Fecha de inicio</th>
            <th>Fecha de finalizacion</th>
            <th>Listo paa evaluar</th>
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
              <td>VEr detalle</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Proceso;
