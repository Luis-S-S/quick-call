/* eslint-disable react/prop-types */
import React from 'react';

export default function Page1({ form, handlerOnChange }) {
  return (
    <div className="formulario">
      <label htmlFor="name" hidden>Nombre</label>
      <input name="name" placeholder="Ingresa tu nombre" type="text" onChange={handlerOnChange} value={form.name} />
      <label htmlFor="email" hidden>Correo Electrónico</label>
      <input name="email" placeholder="Michelle@ejemplo.com" type="email" onChange={handlerOnChange} value={form.email} />
      <label htmlFor="password" hidden>Contraseña</label>
      <input name="password" placeholder="Ingresa tu contraseña" type="password" onChange={handlerOnChange} value={form.password} />
      <label htmlFor="confirmPassword" hidden>Confirmar contraseña</label>
      <input name="confirmPassword" placeholder="Confirmar contraseña" type="password" onChange={handlerOnChange} value={form.confirmPassword} />
      {/* onChange={(event) => setFormData({ ...formData, email: event.target.value })} */}
    </div>
  );
}
