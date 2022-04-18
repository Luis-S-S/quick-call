/* eslint-disable react/prop-types */
import { getAllProfessional } from '../../services/professional';

export default function Validate({
  handleOnClickSubmit, form, setPage, page, setValidate,
}) {
  const handlerPage = async () => {
    let array = {};
    if (page === 0) {
      if (!form.name) {
        array = { ...array, name: 'Este campo es necesario' };
      }
      if (!form.email) {
        array = { ...array, email: 'Este campo es necesario' };
      }
      if (!form.password) {
        array = { ...array, password: 'Este campo es necesario' };
      }
      if (!form.confirmPassword) {
        array = { ...array, confirmPassword: 'Este campo es necesario' };
      }
      if (!array.email) {
        const user = await getAllProfessional(`?email=${form.email}`);
        if (user.length > 0) {
          array = { ...array, email: 'El correo ya esta en uso' };
        }
      }
      if (!array.password) {
        if (form.password !== form.confirmPassword) {
          array = { ...array, confirmPassword: 'Las contraseñas no coinciden' };
        }
      }
    }
    setValidate(array);
    if (Object.keys(array).length === 0) {
      setPage((currPage) => currPage + 1);
    }
    if (page === 3) {
      handleOnClickSubmit();
    }
  };
  return (
    <button className="button-round" type="submit" onClick={handlerPage}>
      {page === 4 - 1 ? 'enviar' : 'sig'}
    </button>
  );
}
