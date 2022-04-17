/* eslint-disable react/prop-types */
import React from 'react';

export default function Page1({ form, handlerOnChange }) {
  let mystyle = {};
  if (form.password !== form.confirmPassword) {
    mystyle = {
      border: '2px solid red',
    };
  }
  return (
    <div className="formulario">
      <label htmlFor="name" hidden>Nombre</label>
      <input name="name" placeholder="Ingresa tu nombre" type="text" onChange={handlerOnChange} value={form.name} />
      <label htmlFor="email" hidden>Correo Electrónico</label>
      <input name="email" placeholder="Michelle@ejemplo.com" type="email" onChange={handlerOnChange} value={form.email} />
      <label htmlFor="password" hidden>Contraseña</label>
      <input name="password" style={mystyle} placeholder="Ingresa tu contraseña" type="password" onChange={handlerOnChange} value={form.password} />
      <label htmlFor="confirmPassword" hidden>Confirmar contraseña</label>
      <input name="confirmPassword" style={mystyle} placeholder="Confirmar contraseña" type="password" onChange={handlerOnChange} value={form.confirmPassword} />
    </div>
  );
}
