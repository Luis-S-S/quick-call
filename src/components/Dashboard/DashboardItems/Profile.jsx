/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClientDashboard } from '../../../store/actions';
import ButtonRound from '../../ButtonRound/ButtonRound';
import { updateClient } from '../../../services/clients';
import { objectDifference } from '../../../services/general';
import { allCategories } from '../../../services/categories';
import './Profile.scss';

export default function Profile() {
  const dashboardInformation = useSelector((state) => state.userDashboard);
  const dispatch = useDispatch();
  const [citiesList, setCities] = useState([]);
  const [newUser, setNewUser] = useState({});
  const [phoneNumberError, setPhoneNumberError] = useState();
  const [responseMsg, setResponseMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [user, setUser] = useState({});

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
    const submitUser = objectDifference(user, newUser);
    if (submitUser.phoneNumber) {
      submitUser.phoneNumber = parseInt(submitUser.phoneNumber, 10);
      setResponseMsg('Ocurrió un error, intente nuevamente');
    }
    if (!phoneNumberError) {
      const result = await updateClient(dashboardInformation.id, submitUser);
      switch (result.status) {
        case 200:
          setIsSuccess(true);
          setResponseMsg('Se actualizó correctamente');
          break;
        default:
          setIsSuccess(false);
          setResponseMsg('Ocurrió un error, intente nuevamente');
          break;
      }
    }
  };

  useEffect(async () => {
    dispatch(fetchClientDashboard(localStorage.getItem('user')));
    const [document] = await allCategories();
    setCities(document.cities);
  }, []);

  useEffect(() => {
    const {
      name, email, phoneNumber, city,
    } = dashboardInformation;
    setNewUser({
      name, email, phoneNumber, city,
    });
    setUser({
      name, email, phoneNumber, city,
    });
  }, [dashboardInformation]);

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
