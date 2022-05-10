import { React, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { allCategories } from '../../services/categories';
import { urlQueryParamToObject } from '../../services/general';
import './Filter.scss';

export default function filter() {
  const incomingSearchObject = urlQueryParamToObject(window.location.href);
  // Llega encoded => envía espacio con %20
  const [category, setCategory] = useState();
  const [, setSearchParams] = useSearchParams();

  const [searchObject, setSearchObject] = useState(incomingSearchObject);

  useEffect(async () => {
    const response = await allCategories();
    const [document] = response;
    setCategory(document);
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
          <select name="city" id="city" className="filter__select" onClick={handlerOnChange} data-cy="filter-city">
            <option value="" key="" className="filter__option"> </option>
            {category?.cities.map(
              (city) => (
                <option
                  key={city}
                  value={city}
                  className="filter__option"
                >
                  {city}
                </option>
              ),
            )}
          </select>
        </div>
        <div className="filter__input">
          <label htmlFor="specialty" className="filter__label">Especialidad</label>
          <select name="specialties" id="specialties" className="filter__select" onClick={handlerOnChange} data-cy="filter-specialty">
            <option value="" key="" className="filter__option"> </option>
            {category?.specialties.map(
              (specialty) => (
                <option
                  key={specialty}
                  value={specialty}
                  className="filter__option"
                >
                  {specialty}
                </option>
              ),
            )}
          </select>
        </div>
        <br />
        <button type="submit" className="filter__button" data-cy="filter-button">Agregar filtros</button>
        <br />
        <button type="button" className="filter__button" onClick={handlerOnClick}>Limpiar filtros</button>
      </form>
    </div>
  );
}
