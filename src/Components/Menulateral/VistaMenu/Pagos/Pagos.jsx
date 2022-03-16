import React from 'react';
import Usuario from '../../../../data/Usuario.json';

export default function Pagos() {
  console.log(Usuario);
  return (
    <>
      <h2 className="Titulo">Mis datos de pago</h2>
      <h4>Numero de tarjeta</h4>
      <div className="Editar">
        <div>{Usuario[0].mipago.numerotarjeta}</div>
        <div>Editar</div>
      </div>
      <h4>Fecha de vencimiento</h4>
      <div className="Editar"><div>{Usuario[0].mipago.fechavencimiento}</div></div>
      <h4>Codigo</h4>
      <div className="Editar"><div>{Usuario[0].mipago.codigo}</div></div>

    </>
  );
}
