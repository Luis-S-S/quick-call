/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Page3({
  categories, specialty, setSpecialty,
}) {
  const [choice, setChoice] = useState();
  const handlerNewSpecialty = () => {
    if (choice) {
      if (specialty.filter((element) => (element.name === choice)).length < 1) {
        setSpecialty([...specialty, { name: choice }]);
        setChoice();
      }
    }
  };
  const handlerEvidence = (e) => {
    const value = e.target.name;
    const search = specialty.filter((special) => !(special.name === value));
    setSpecialty([...search, { name: value, evidence: e.target.files[0] }]);
  };

  const handlerChoice = (e) => {
    setChoice(e.target.value);
  };

  function handlerEliminate(e) {
    const { value } = e.target;
    const special = specialty.filter((specialy) => !(specialy.name === value));
    setSpecialty(special);
  }
  return (
    <div className="formulario">
      <fieldset>
        <legend>Especialidades</legend>
        {specialty.map((todo) => (

          <div className="specialty">
            <label htmlFor={todo.name}>
              {todo.name}
              {' '}
            </label>
            <button className="button-eliminate" type="submit" value={todo.name} onClick={handlerEliminate}>x</button>
            <input className="button-agregate" type="file" name={todo.name} onChange={handlerEvidence} />
          </div>
        ))}
        <div className="specialty">
          <select name="specialty" id="specialty" onChange={handlerChoice}>
            <option value="" disabled selected hidden>Selecciona tus especialidades ...</option>
            {categories[0].specialties?.map((result) => (
              <option
                key={result}
                value={result}
              >
                {result}
              </option>
            ))}
          </select>
          <button className="button-agregate" type="submit" onClick={handlerNewSpecialty}> Agregar nueva</button>

        </div>
      </fieldset>
    </div>
  );
}
