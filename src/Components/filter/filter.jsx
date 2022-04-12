import { React, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { allCategories } from '../../Services/categories';
import { urlQueryParamToObject } from '../../Services/general';

export default function filter() {
  const incomingSearchObject = urlQueryParamToObject(window.location.href);
  const [category, setCategory] = useState();
  const [, setSearchParams] = useSearchParams();
  const [searchObject, setSearchObject] = useState(incomingSearchObject);

  useEffect(async () => {
    const response = await allCategories();
    setCategory(response);
  }, []);

  const handlerOnChange = (e) => {
    const filterSearchObject = { ...searchObject };

    if (e.target.value === '') {
      delete filterSearchObject[e.target.name];
      setSearchObject(filterSearchObject);
    } else {
      setSearchObject({
        ...filterSearchObject,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    setSearchParams(searchObject);
  };

  return (
    <div className="Menulateral">
      <form onSubmit={handlerOnSubmit}>
        <h4>Ciudad</h4>
        <select name="city" id="city" onClick={handlerOnChange}>
          <option value="" key=""> </option>
          {category?.filter((result) => result.filter === 'city').map(
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
        <h4>Especialidad</h4>
        <select name="specialty" id="specialty" onClick={handlerOnChange}>
          <option value="" key=""> </option>
          {category?.filter((result) => result.filter === 'specialty').map(
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
        <br />
        <button type="submit">Agregar filtro</button>
        <br />
        <button type="button">Limpiar formulario</button>
      </form>
    </div>
  );
}
