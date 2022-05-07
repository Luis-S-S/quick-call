/* eslint-disable react/prop-types */
import React from 'react';

export default function Page2({ form, handlerOnChange, categories }) {
  return (
    <div className="formulario">
      <label htmlFor="phoneNumber" hidden>Numero de telefono</label>
      <input name="phoneNumber" placeholder="Numero de contacto" type="tel" onChange={handlerOnChange} value={form.phoneNumber} />
      <label htmlFor="city" hidden>Ciudad</label>
      <select name="city" id="city" onChange={handlerOnChange} value={form.city}>
        <option value="" disabled selected hidden>Selecciona tu ciudad ...</option>
        {categories[0].cities?.map((result) => (
          <option
            key={result}
            value={result}
          >
            {result}
          </option>
        ))}
      </select>
      <label htmlFor="myDescription" hidden>Mi Descripción</label>
      <textarea
        name="myDescription"
        placeholder="Cuentanos sobre ti, aquí comparte tu experiencia para los clientes que verán tu perfil"
        cols={5}
        rows={10}
        onChange={handlerOnChange}
        value={form.myDescription}
      />
    </div>
  );
}
