import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import data from '../../../../data/db.json';
import { detalle } from '../../../../store/actions';

function Proceso() {
  const dispatch = useDispatch();

  function handlePQR(usuario) {
    dispatch(detalle(['VerPQR', usuario.target.name]));
  }

  const email = useSelector((state) => state.user);

  return (
    <>
      <h2 className="Titulo">Mis PQR</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Profesional</th>
            <th>Fecha</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {data.PQR.filter((PQRs) => (
            PQRs.usuario === email)).map((usuario) => (
              <tr>
                <td>{usuario.id}</td>
                <td>{usuario.profesional}</td>
                <td>{usuario.fecha}</td>
                <button type="button" name={usuario.id} onClick={handlePQR}> Ver detalle </button>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Proceso;
