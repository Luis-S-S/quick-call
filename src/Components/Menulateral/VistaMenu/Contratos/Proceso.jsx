import {Link} from 'react-router-dom';
import React from 'react';
import Usuario  from '../../../../data/Usuario';

export const Proceso = ()=> {
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
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td>{Usuario}</td>
            </tr>

        </tbody>
      </table>
    </>

    )}
