/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Page3({
  handlerNewSpecialty, handlerChoice, handlerEliminate, handlerEvidence, categories, specialty,
}) {
  return (
    <div className="formulario">
      <fieldset>
        <legend>Especialidades</legend>
        {specialty.map((todo) => (

          <div className="specialty">
            <label htmlFor={todo.name}>{todo.name}</label>
            <button className="button-eliminate" type="submit" value={todo.name} onClick={handlerEliminate}>x</button>
            <input className="button-agregate" type="file" name={todo.name} onChange={handlerEvidence} />
          </div>
        ))}
        <div className="specialty">
          <select name="specialty" id="specialty" onChange={handlerChoice}>
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
