import React from 'react';
import Usuario from '../../../../data/Usuario.json';
import '../VistaMenu.scss';

export default function Editar() {
  return (
    <div className="VistaMenu">
      <h2 className="Titulo">Mis datos</h2>
      <div className="Cuerpo">
        <h4 className="titulo1">Nombre</h4>
        <div className="Editar">
          <div>{Usuario[0].nombre}</div>
          <div className="Editar1">Editar</div>
        </div>
        <h4 className="titulo1">Correo</h4>
        <div className="Editar">
          <div>{Usuario[0].nombre}</div>
          <div />
        </div>
        <h4 className="titulo1">Contraseña</h4>
        <div className="Editar">
          <div>***********</div>
          <div className="Editar1">Editar</div>
        </div>
        <h4 className="titulo1">Telefono celular</h4>
        <div className="Editar">
          <div>{Usuario[0].telefonocelular}</div>
          <div className="Editar1">Editar</div>
        </div>
        <h4 className="titulo1">Ciudad</h4>
        <div className="Editar">
          <div>{Usuario[0].ciudad}</div>
          <div className="Editar1">Editar</div>
        </div>

        <h4 className="titulo1">Fotos (subir)</h4>
        <div className="Editar">
          <div>{Usuario[0].perfil[0]}</div>
          <div className="Editar1">Eliminar</div>
        </div>
        <div className="Editar">
          <div>{Usuario[0].perfil[1]}</div>
          <div className="Editar1">Eliminar</div>
        </div>
      </div>
    </div>
  );
}
