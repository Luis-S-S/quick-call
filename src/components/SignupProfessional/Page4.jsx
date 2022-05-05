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
          <option value="" disabled selected hidden>Selecciona tu EPS ...</option>
          {categories[0].EPSs.map((result) => (
            <option
              key={result}
              value={result}
            >
              {result}
            </option>
          ))}
        </select>
        <label htmlFor="arl">ARL</label>
        <select name="socialSecurity.arl" id="socialSecurity.arl" onChange={handlerOnChange} value={form['socialSecurity.arl']}>
          <option value="" key=""> </option>
          <option value="" disabled selected hidden>Selecciona tu ARL ...</option>
          {categories[0].ARLs.map((result) => (
            <option
              key={result}
              value={result}
            >
              {result}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset>
        {(form['availability.fullAvailability'] !== 'on') && (
        <>
          <label htmlFor="availability.startTime">Hora de inicio</label>
          <input name="availability.startTime" type="time" onChange={handlerOnChange} value={form['availability.startTime']} />
          <label htmlFor="availability.endTime">Hora de terminación</label>
          <input name="availability.endTime" type="time" onChange={handlerOnChange} value={form['availability.endTime']} />
        </>
        )}
        <label htmlFor="availability.endTime">Disponible 24 horas</label>
        <input type="checkbox" name="availability.fullAvailability" onClick={handlerOnChange} />
      </fieldset>
    </div>
  );
}
