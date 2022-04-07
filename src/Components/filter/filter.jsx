import { React, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { allCategories } from '../../Services/categories';

export default function filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categorie, setcategorie] = useState([searchParams.toString().split('&')]);
  const [value, setValue] = useState({});
  useEffect(async () => {
    const response = await allCategories();
    setcategorie(response);
  }, []);

  const handlerOnChange = (e) => {
    setValue({ ...value, [e.target.value[0]]: e.target.value[1] });
    console.log('------', value);
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault()
    console.log('handler submit', e);
    // setSearchParams(value);
  };

  return (
    <div className="Menulateral">
      <form onSubmit={handlerOnSubmit}>
        <h4>Ciudad</h4>
        <select name="city" id="city">
          <option value="" key="" selected> </option>
          {categorie.filter((result) => result.filter === 'city').map(
            (todo) => (
              <option key={todo.value} value={todo.value}>{todo.value}</option>),
          )}
        </select>
        <h4>Especialidad</h4>
        <select name="specialty" id="specialty">
          {categorie.filter((result) => result.filter === 'specialty').map(
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
  // return (
  //   <div className="Menulateral">
  //     <form onSubmit={handlerOnSubmit}>
  //       <h4>Ciudad</h4>
  //       <select name="" id="" onChange={handlerOnChange}>
  //         {categorie.filter((result) => result.filter === 'city').map(
  //           (todo) => (
  //             <option key={todo.value} value={[todo.filter, todo.value]}>{todo.value}</option>),
  //         )}
  //       </select>
  //       <h4>Especialidad</h4>
  //       <select name="" id="" onChange={handlerOnChange}>
  //         {categorie.filter((result) => result.filter === 'specialty').map(
  //           (todo) => (
  //             <option key={todo.value} name={[todo.filter, todo.value]}>{todo.value}</option>),
  //         )}
  //       </select>
  //       <h4>Eps</h4>
  //       <select name="" id="">
  //         {categorie.filter((result) => result.type === 'eps').map(
  //           (todo) => (
  //             <option key={todo.value} name={todo.value}>{todo.value}</option>),
  //         )}
  //       </select>
  //       <br />
  //       <button type="submit">Agregar filtro</button>
  //       <br />
  //       <button type="button">Limpiar formulario</button>
  //     </form>
  //   </div>
  // );
}
