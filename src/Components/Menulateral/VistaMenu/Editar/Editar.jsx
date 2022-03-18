import React from 'react';
import Usuario from '../../../../data/Usuario.json';
import '../VistaMenu.scss';

export default function Editar() {
  return (
    <div className="VistaMenu">
      <h2 className="Titulo">Mis datos</h2>
      <h4>Nombre</h4>
      <div className="Editar">
        <div>{Usuario[0].nombre}</div>
        <div>Editar</div>
      </div>
      <h4>Correo</h4>
      <div className="Editar">
        <div>{Usuario[0].nombre}</div>
        <div />
      </div>
      <h4>Contraseña</h4>
      <div className="Editar">
        <div>***********</div>
        <div>Editar</div>
      </div>
      <h4>Telefono celular</h4>
      <div className="Editar">
        <div>{Usuario[0].telefonocelular}</div>
        <div>Editar</div>
      </div>
      <h4>Ciudad</h4>
      <div className="Editar">
        <div>{Usuario[0].ciudad}</div>
        <div>Editar</div>
      </div>
      <h4>Fotos Subir</h4>
      <div className="Editar">
        <div>{Usuario[0].perfil[0]}</div>
        <div>Eliminar</div>
      </div>
      <div className="Editar">
        <div>{Usuario[0].perfil[1]}</div>
        <div>Eliminar</div>
      </div>

    </div>
  );
}
