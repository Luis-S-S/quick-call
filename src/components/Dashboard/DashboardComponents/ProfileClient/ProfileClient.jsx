/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../../store/actions';
import { updateClient } from '../../../../services/clients';
import { objectDifference } from '../../../../services/general';
import { allCategories } from '../../../../services/categories';
import ButtonRound from '../../../ButtonRound/ButtonRound';
import './ProfileClient.scss';

export default function Profile() {
  const dispatch = useDispatch();
  const [citiesList, setCitiesList] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [phoneNumberError, setPhoneNumberError] = useState();
  const [responseMsg, setResponseMsg] = useState('');
  const [userCopy, setCopy] = useState({});
  const {
    id, name, email, phoneNumber, city, profilePicture,
  } = useSelector((state) => state.user);

  const handleOnChange = (e) => {
    const { name: targetName, value } = e.target;
    if (targetName === 'phoneNumber' && value.length !== 10) {
      setPhoneNumberError('El número debe tener 10 dígitos');
      setIsSuccess(false);
    } else {
      setPhoneNumberError('');
    }
    setNewUser({ ...newUser, [targetName]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const submitUser = objectDifference(userCopy, newUser);

    if (Object.keys(submitUser).length !== 0) {
      if (!phoneNumberError) {
        if (submitUser.phoneNumber) {
          submitUser.phoneNumber = parseInt(submitUser.phoneNumber, 10);
        }
        const response = await updateClient(id, submitUser);
        if (response.status === 200) {
          const {
            password, payment, location, ...rest
          } = await response.json();
          dispatch(setUser(rest));
          setIsSuccess(true);
          setResponseMsg('Se actualizó correctamente');
        } else {
          setIsSuccess(false);
          setResponseMsg('Ocurrió un error');
        }
      } else {
        setResponseMsg('Ocurrió un error');
        setIsSuccess(false);
      }
    } else {
      setResponseMsg('No hay cambios para actualizar');
      setIsSuccess(false);
    }
  };

  useEffect(async () => {
    const [document] = await allCategories();
    setCopy({
      name, email, phoneNumber, city, profilePicture,
    });
    setNewUser({
      name, email, phoneNumber, city, profilePicture,
    });
    setCitiesList(document.cities);
  }, []);

  return (
    <div className="dashboard-profile">
      <h1 className="dashboard-profile__title">Actualiza tu perfil</h1>
      <img className="dashboard-profile__picture" src={newUser?.profilePicture} alt="Foto de perfil" />
      <form className="profile-update">
        <div className="input-control">
          <label className="profile__label" htmlFor="name">Nombre: </label>
          <input className="profile__input" name="name" value={newUser?.name || ''} onChange={handleOnChange} />
        </div>
        <div className="input-control">
          <label className="profile__label" htmlFor="email">Correo electrónico: </label>
          <input className="profile__input profile__input--lock" name="email" value={newUser?.email || ''} disabled />
        </div>
        <div className="input-control">
          <label className="profile__label" htmlFor="phoneNumber">Teléfono: </label>
          <input className="profile__input" name="phoneNumber" value={newUser?.phoneNumber || ''} onChange={handleOnChange} />
          <span className="error-msg">{phoneNumberError}</span>
        </div>
        <div className="input-control">
          <label className="profile__label" htmlFor="city">Ciudad: </label>
          <select className="profile__input" name="city" value={newUser?.city || ''} onChange={handleOnChange}>
            {citiesList.map(
              (cityItem, idx) => (<option key={idx} value={cityItem}>{cityItem}</option>),
            )}
          </select>
        </div>
        <ButtonRound onClickFunction={handleOnSubmit} isSubmit>Actualizar</ButtonRound>
      </form>
      <div className={isSuccess ? 'response--success' : 'response--fail'}>{responseMsg}</div>
    </div>

  );
}
