/* eslint-disable react/prop-types */
import React from 'react';

export default function Page4({ handlerOnChange, categories }) {
  return (
    <div className="formulario">
      <fieldset>
        <legend>Seguridad Social</legend>
        <label htmlFor="eps">EPS</label>
        <select name="socialSecurity.eps" id="socialSecurity.eps" placeholder="Escoge tu EPS" onClick={handlerOnChange}>
          <option value="" key=""> </option>
          {categories?.filter((result) => result.type === 'eps').map(
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
        <label htmlFor="arl">ARL</label>
        <select name="socialSecurity.arl" id="socialSecurity.arl" onClick={handlerOnChange}>
          <option value="" key=""> </option>
          {categories?.filter((result) => result.type === 'arl').map(
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
      </fieldset>
      <fieldset>
        <label htmlFor="availability.startTime">Hora de inicio</label>
        <input name="availability.startTime" type="time" onChange={handlerOnChange} />
        <label htmlFor="availability.endTime">Hora de terminación</label>
        <input name="availability.endTime" type="time" onChange={handlerOnChange} />
      </fieldset>
    </div>
  );
}
