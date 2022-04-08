import { React, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { allCategories } from '../../Services/categories';

export default function filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState([searchParams.toString().split('&')]);

  useEffect(async () => {
    const response = await allCategories();
    setCategory(response);
  }, []);

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    setSearchParams('value');
  };

  return (
    <div className="Menulateral">
      <form onSubmit={handlerOnSubmit}>
        <h4>Ciudad</h4>
        <select name="city" id="city">
          <option value="" key="" selected> </option>
          {category.filter((result) => result.filter === 'city').map(
            (todo) => (
              <option key={todo.value} value={todo.value}>{todo.value}</option>),
          )}
        </select>
        <h4>Especialidad</h4>
        <select name="specialty" id="specialty">
          {category.filter((result) => result.filter === 'specialty').map(
            (todo) => (
              <option key={todo.value} name={todo.value}>{todo.value}</option>),
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
