/* eslint-disable react/prop-types */
import React from 'react';

export default function Page2({ form, handlerOnChange, categories }) {
  return (
    <div className="formulario">
      <label htmlFor="phoneNumber" hidden>Numero de telefono</label>
      <input name="phoneNumber" placeholder="Numero de contacto" type="tel" onChange={handlerOnChange} value={form.phoneNumber} />
      <label htmlFor="city" hidden>Ciudad</label>
      <select name="city" id="city" onChange={handlerOnChange} value={form.city}>
        <option value="" key=""> </option>
        {categories?.filter((category) => category.filter === 'city').map(
          (todo) => (
            <option
              key={todo.value}
              value={todo.value}
            >
              {todo.value}
            </option>
          ),
        )}
      </select>
      <label htmlFor="myDescription" hidden>Mi Descripción</label>
      <textarea name="myDescription" placeholder="Cuentanos sobre ti" cols="30" rows="10" onChange={handlerOnChange} value={form.myDescription} />
    </div>
  );
}
