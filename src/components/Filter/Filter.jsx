import { React, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { allCategories } from '../../services/categories';
import { urlQueryParamToObject } from '../../services/general';
import './Filter.scss';

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

  const handlerOnClick = () => {
    setSearchParams({});
    setSearchObject({});
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setSearchParams(searchObject);
    setSearchObject({});
  };

  return (
    <div className="filter__container">
      <form onSubmit={handlerOnSubmit}>
        <div className="filter__input">
          <label htmlFor="city" className="filter__label">Ciudad</label>
          <select name="city" id="city" className="filter__select" onClick={handlerOnChange}>
            <option value="" key="" className="filter__option"> </option>
            {category?.filter((result) => result.filter === 'city').map(
              (todo) => (
                <option
                  key={todo.value}
                  value={todo.value}
                  className="filter__option"
                >
                  {todo.value}
                </option>
              ),
            )}
          </select>
        </div>
        <div className="filter__input">
          <label htmlFor="specialty" className="filter__label">Especialidad</label>
          <select name="specialty.certified" id="specialty.certified" className="filter__select" onClick={handlerOnChange}>
            <option value="" key="" className="filter__option"> </option>
            {category?.filter((result) => result.filter === 'specialty').map(
              (todo) => (
                <option
                  key={todo.value}
                  value={todo.value}
                  className="filter__option"
                >
                  {todo.value}
                </option>
              ),
            )}
          </select>
        </div>
        <br />
        <button type="submit" className="filter__button">Agregar filtros</button>
        <br />
        <button type="button" className="filter__button" onClick={handlerOnClick}>Limpiar filtros</button>
      </form>
    </div>
  );
}
