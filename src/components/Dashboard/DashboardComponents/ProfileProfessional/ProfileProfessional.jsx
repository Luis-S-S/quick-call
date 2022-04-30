/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../../store/actions';
import { updateClient } from '../../../../services/clients';
import { objectDifference } from '../../../../services/general';
import { allCategories } from '../../../../services/categories';
import ButtonRound from '../../../ButtonRound/ButtonRound';
import SpecialtyListItem from '../../../SpecialtyListItem/SpecialtyListItem';
import './ProfileProfessional.scss';

export default function ProfileProfessional() {
  const dispatch = useDispatch();
  const [citiesList, setCitiesList] = useState([]);
  const [epsList, setEpsList] = useState([]);
  const [arlList, setArlList] = useState([]);
  const [specialtiesList, setSpecialtiesList] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [phoneNumberError, setPhoneNumberError] = useState();
  const [responseMsg, setResponseMsg] = useState('');
  const [userCopy, setCopy] = useState({});
  const {
    password, availability, location, ...user
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
        const response = await updateClient(user.id, submitUser);
        if (response.status === 200) {
          const {
            passwordExt, locationExt, ...rest
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
    const [categories] = await allCategories();
    setCopy({ ...user });
    setNewUser({ ...user });
    setCitiesList(categories.cities);
    setEpsList(categories.EPSs);
    setArlList(categories.ARLs);
    setSpecialtiesList(categories.specialties);
  }, []);

  return (
    <div className="dashboard-profile">
      <h1 className="dashboard-profile__title">Actualiza tu perfil</h1>
      <img className="dashboard-profile__picture" src={newUser?.image?.profile} alt="Foto de perfil" />
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
        <div className="input-control">
          <label className="profile__label" htmlFor="myDescription">Descripción: </label>
          <textarea className="profile__input" name="myDescription" value={newUser?.myDescription || ''} onChange={handleOnChange} rows={8} />
        </div>
        <div className="input-control">
          <label className="profile__label" htmlFor="specialties">Especialidades: </label>
          <div className="profile__input--specialty">
            {
                newUser?.specialties?.map((specialty, idx) => (
                  <SpecialtyListItem key={idx} details={specialty} />
                ))
            }
            <select className="profile__input" name="specialties" onChange={handleOnChange}>
              {specialtiesList.map(
                (specialtyItem, idx) => (
                  <option key={idx} value={specialtyItem.name}>{specialtyItem.name}</option>
                ),
              )}
            </select>
          </div>
        </div>
        <div className="input-control">
          <label className="profile__label" htmlFor="image.myJobs">Trabajos: </label>
          <p>Imágenes para editar</p>
        </div>
        <div className="input-control">
          <label className="profile__label" htmlFor="eps">EPS: </label>
          <select className="profile__input" name="eps" value={newUser?.eps || ''} onChange={handleOnChange}>
            {epsList.map(
              (epsItem, idx) => (<option key={idx} value={epsItem}>{epsItem}</option>),
            )}
          </select>
        </div>
        <div className="input-control">
          <label className="profile__label" htmlFor="arl">ARL: </label>
          <select className="profile__input" name="arl" value={newUser?.arl || ''} onChange={handleOnChange}>
            {arlList.map(
              (arlItem, idx) => (<option key={idx} value={arlItem}>{arlItem}</option>),
            )}
          </select>
        </div>
        <div className="input-control" />
        <ButtonRound onClickFunction={handleOnSubmit} isSubmit>Actualizar</ButtonRound>
      </form>
      <div className={isSuccess ? 'response--success' : 'response--fail'}>{responseMsg}</div>
    </div>

  );
}
