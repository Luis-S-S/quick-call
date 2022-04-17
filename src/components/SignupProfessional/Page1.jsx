/* eslint-disable react/prop-types */
import React from 'react';

export default function Page1({ form, handlerOnChange, validate }) {
  let mystyle = {};
  if (validate.password || validate.confirmPassword ) {
    mystyle = {
      border: '2px solid red',
    };
  }
  const style = { color: 'red' };
  return (
    <div className="formulario">
      <label htmlFor="name" hidden>Nombre</label>
      {(validate.name) && (<label htmlFor="name" style={style}>{validate.name}</label>)}
      <input name="name" placeholder="Ingresa tu nombre" type="text" onChange={handlerOnChange} value={form.name} />
      <label htmlFor="email" hidden>Correo Electrónico</label>
      {(validate.email) && (<label htmlFor="confirmPassword" style={style}>{validate.email}</label>)}
      <input name="email" placeholder="Michelle@ejemplo.com" type="email" onChange={handlerOnChange} value={form.email} />
      <label htmlFor="password" hidden>Contraseña</label>
      {(validate.password) && (<label htmlFor="confirmPassword" style={style}>{validate.password}</label>)}
      <input name="password" style={mystyle} placeholder="Ingresa tu contraseña" type="password" onChange={handlerOnChange} value={form.password} />
      <label htmlFor="confirmPassword" hidden>Confirmar contraseña</label>
      {(validate.confirmPassword) && (<label htmlFor="confirmPassword" style={style}>{validate.confirmPassword}</label>)}
      <input name="confirmPassword" style={mystyle} placeholder="Confirmar contraseña" type="password" onChange={handlerOnChange} value={form.confirmPassword} />
    </div>
  );
}
