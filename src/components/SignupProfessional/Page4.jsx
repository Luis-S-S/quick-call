/* eslint-disable react/prop-types */
import React from 'react';

export default function Page4({ form, handlerOnChange, categories }) {
  return (
    <div className="formulario">
      <fieldset>
        <legend>Seguridad Social</legend>
        <label htmlFor="eps">EPS</label>
        <select name="socialSecurity.eps" placeholder="Escoge tu EPS" onChange={handlerOnChange} value={form['socialSecurity.eps']}>
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
        <select name="socialSecurity.arl" id="socialSecurity.arl" onChange={handlerOnChange} value={form['socialSecurity.arl']}>
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
        <input name="availability.startTime" type="time" onChange={handlerOnChange} value={form['availability.startTime']} />
        <label htmlFor="availability.endTime">Hora de terminación</label>
        <input name="availability.endTime" type="time" onChange={handlerOnChange} value={form['availability.endTime']} />
      </fieldset>
    </div>
  );
}
