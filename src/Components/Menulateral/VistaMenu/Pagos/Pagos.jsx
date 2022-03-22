import React from 'react';
import Usuario from '../../../../data/Usuario.json';
import '../VistaMenu.scss';

export default function Pagos() {
  return (
    <div className="VistaMenu">
      <h2 className="Titulo">Mis datos de pago</h2>
      <div className="Cuerpo">
        <h4 className="titulo1">Numero de tarjeta</h4>
        <div className="Editar">
          <div>{Usuario[0].mipago.numerotarjeta}</div>
          <div className="Editar1">Editar</div>
        </div>
        <h4 className="titulo1">Fecha de vencimiento</h4>
        <div className="Editar"><div>{Usuario[0].mipago.fechavencimiento}</div></div>
        <h4 className="titulo1">Codigo</h4>
        <div className="Editar"><div>{Usuario[0].mipago.codigo}</div></div>

      </div>
    </div>
  );
}
