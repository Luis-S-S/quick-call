/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Page3({
  handlerAgregate, handlerEliminate, handlerOnChange, categories, specialty,
}) {
  console.log('specialty: ', specialty);
  return (
    <div className="formulario">
      <fieldset>
        <legend>Especialidades</legend>
        {specialty.map((todo) => (
          <div className="specialty">
            <label htmlFor={todo}>{todo}</label>
            <button className="button-eliminate" type="submit" value={todo} onClick={handlerEliminate}>X</button>
            <button className="button-agregate" type="submit" value={todo} onClick={handlerEliminate}>subir</button>
          </div>
        ))}
        <div className="specialty">
          <select name="specialty" id="specialty" onClick={handlerOnChange}>
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
          <button className="button-agregate" type="submit" onClick={handlerAgregate}> Agregar nueva</button>

        </div>
        {/* <label htmlFor="certified" hidden>Certificado</label>
        <div id="certified">
          <p>Certificado</p>
          {categories?.filter((category) => category.filter === 'specialty')
            .map((category) => (
              <label htmlFor="specialty.certified">
                {category.value}
                <input type="checkbox" name="specialty.certified"
                 value={category.value} onClick={handlerOnClick} />
              </label>
            ))}
        </div> */}
        {/* <label htmlFor="inProgress" hidden>En Progreso</label>
        <div id="inProgress">
          <p>En Progreso</p>
          {categories?.filter((category) => category.filter === 'specialty')
            .map((category) => (
              <label htmlFor="specialty.inProgress">
                {category.value}
                <input type="checkbox" name="specialty.inProgress"
                value={category.value} onClick={handlerOnClick} />
              </label>
            ))}
        </div>
        <label htmlFor="nonCertified" hidden>No Certificado</label>
        <div id="nonCertified">
          <p>En Progreso</p>
          {categories?.filter((category) => category.filter === 'specialty')
            .map((category) => (
              <label htmlFor="specialty.nonCertified">
                {category.value}
                <input type="checkbox" name="specialty.nonCertified"
                value={category.value} onClick={handlerOnClick} />
              </label>
            ))}
        </div> */}
      </fieldset>
    </div>
  );
}
