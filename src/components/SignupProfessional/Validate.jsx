/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { getAllProfessional } from '../../services/professionals';

export default function Validate({
  handleOnClickSubmit, form, setPage, page, validate, setValidate, setIsLoading,
}) {
  useEffect(async () => {
    setValidate({ ...validate, email: null });
    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegExp.test(form.email)) {
      setIsLoading(true);
      const user = await getAllProfessional(`?email=${form.email}`);
      if (user.length > 0) {
        setTimeout(() => {
          setIsLoading(false);
          setValidate({ ...validate, email: `El correo ${form.email} ya esta en uso` });
        }, 1200);
      } else {
        setTimeout(() => { setIsLoading(false); }, 1200);
      }
    } else {
      setValidate({ ...validate, email: 'Email no válido' });
    }
  }, [form.email]);

  useEffect(async () => {
    setValidate({ ...validate, name: null });
    if ((form.name).length <= 3) {
      setValidate({ ...validate, name: 'Longitud mínima de 4 caracteres' });
    }
  }, [form.name]);

  useEffect(async () => {
    setValidate({ ...validate, password: null, confirmPassword: null });
    if (form.password && form.confirmPassword) {
      if (form.password !== form.confirmPassword) {
        setValidate({ ...validate, confirmPassword: 'Las contraseñas no coinciden' });
      }
    }
    if ((form.password).length <= 4) {
      setValidate({ ...validate, password: 'Longitud mínima de 5 caracteres' });
    }
  }, [form.password, form.confirmPassword]);

  const handlerPage = async () => {
    let error = { ...validate };
    if (page === 0) {
      if (!form.name) {
        error = { ...error, name: 'Este campo es necesario' };
      }
      if (!form.email) {
        error = { ...error, email: 'Este campo es necesario' };
      }
      if (!form.password) {
        error = { ...error, password: 'Este campo es necesario' };
      }
      if (!form.confirmPassword) {
        error = { ...error, confirmPassword: 'Este campo es necesario' };
      }
    }
    setValidate({ ...error });
    if (page >= 3) {
      handleOnClickSubmit();
    } else if (error.name === null && error.email === null
      && error.password === null && error.confirmPassword === null) {
      setPage((currPage) => currPage + 1);
    }
  };
  return (
    <button className="button-round" type="submit" onClick={handlerPage}>
      {page === 4 - 1 ? 'Registrar' : 'Siguiente'}
    </button>
  );
}
