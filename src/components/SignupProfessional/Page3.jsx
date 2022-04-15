/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Page3({
  handlerNewSpecialty, handlerChoice, handlerEliminate, categories, specialty,
}) {
  return (
    <div className="formulario">
      <fieldset>
        <legend>Especialidades</legend>
        {specialty.map((todo) => (
          <div className="specialty">
            <label htmlFor={todo}>{todo}</label>
            <button className="button-eliminate" type="submit" value={todo} onClick={handlerEliminate}>x</button>
            <button className="button-agregate" type="submit" value={todo} onClick={handlerEliminate}>subir</button>
          </div>
        ))}
        <div className="specialty">
          <select name="specialty" id="specialty" onClick={handlerChoice}>
            <option value="" key=""> </option>
            {categories?.filter((result) => result.filter === 'specialty').map(
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
          <button className="button-agregate" type="submit" onClick={handlerNewSpecialty}> Agregar nueva</button>

        </div>
      </fieldset>
    </div>
  );
}
