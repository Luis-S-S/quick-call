/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import ButtonRound from '../../ButtonRound/ButtonRound';
import { getClientProfile, updateClient } from '../../../services/clients';
import { objectDifference } from '../../../services/general';
import { allCategories } from '../../../services/categories';
import './Profile.scss';

export default function Profile() {
  const userToken = localStorage.getItem('user');
  const [responseMsg, setResponseMsg] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState();
  const [user, setUser] = useState({});
  const [newUser, setNewUser] = useState({});
  const [citiesList, setCities] = useState([]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phoneNumber' && value.length !== 10) {
      setPhoneNumberError('El número debe tener 10 dígitos');
    } else {
      setPhoneNumberError('');
    }
    setNewUser({ ...newUser, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const submitUser = objectDifference(user, newUser);
    if (submitUser.phoneNumber) {
      submitUser.phoneNumber = parseInt(submitUser.phoneNumber, 10);
      setResponseMsg('Ocurrió un error, intente nuevamente');
    }
    if (!phoneNumberError) {
      const result = await updateClient(user.id, submitUser);
      switch (result.status) {
        case 200:
          setResponseMsg('Se actualizó correctamente');
          break;
        default:
          setResponseMsg('Ocurrió un error, intente nuevamente');
          break;
      }
    }
  };

  useEffect(async () => {
    const [document] = await allCategories();
    setCities(document.cities);
    setUser(await getClientProfile(userToken));
    setNewUser(await getClientProfile(userToken));
  }, []);

  return (
    <div className="dashboard-profile">
      <h1 className="dashboard-profile__title">Actualiza tu perfil</h1>
      <form className="profile-update">
        <div className="input-control">
          <label className="profile__label" htmlFor="name">Nombre: </label>
          <input className="profile__input" name="name" value={newUser?.name || ''} onChange={handleOnChange} />
        </div>
        <div className="input-control">
          <label className="profile__label" htmlFor="email">Correo electrónico: </label>
          <input className="profile__input" name="email" value={newUser?.email || ''} disabled />
        </div>
        <div className="input-control">
          <label className="profile__label" htmlFor="phoneNumber">Teléfono: </label>
          <input className="profile__input" name="phoneNumber" value={newUser?.phoneNumber || ''} onChange={handleOnChange} />
          <span className="error-msg">{phoneNumberError}</span>
        </div>
        <div className="input-control">
          <label className="profile__label" htmlFor="city">Ciudad: </label>
          <select className="profile__input" name="city" value={newUser?.city || ''} onChange={handleOnChange}>
            {citiesList.map((city, idx) => (<option key={idx} value={city}>{city}</option>))}
          </select>
        </div>
        <ButtonRound onClickFunction={handleOnSubmit} isSubmit>Actualizar</ButtonRound>
      </form>
      <div className="result-msg">{responseMsg}</div>
    </div>

  );
}
