/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateClient } from '../../services/clients';
import './ProfileProDescription.scss';
import ButtonRound from '../ButtonRound/ButtonRound';
import { getSingleProfessional } from '../../services/professionals';
import { setUser } from '../../store/actions';

function ProfileProDescription({ HandlerOnClick, vist, id }) {
  const [pro, setPro] = useState([]);
  const dispatch = useDispatch();

  let user = useSelector((state) => state.user);

  const select = user.favorites?.filter((favorite) => (favorite !== id));

  const HandlerFavorites = async () => {
    let update;
    if (select.length === user.favorites.length) {
      update = [...select, id];
    } else {
      update = [...select];
    }
    await updateClient(user._id, { favorites: [...update] });
    user.favorites = [...update];
    dispatch(setUser(user));
    user = useSelector((state) => state.user);
  };

  useEffect(() => {
    getSingleProfessional(id).then((data) => setPro(data));
  }, [id]);

  return (
    <div className="profileDescription">
      <div className="row">
        {(!vist) && (
        <div className="column">
          <img className="photo" src={pro.image?.profile} alt="constructor" />
        </div>
        )}
        <div className="column">
          <div className="description">
            <h1>{pro.name}</h1>
            <p>{pro.myDescription}</p>
          </div>
          <div className="categories">
            <h1>Mis especialidades</h1>
            <div className="categoriesList">
              {pro.specialties?.map((specialty) => (
                <h4>{specialty.name}</h4>
              ))}
            </div>
          </div>
          <div className="calification">
            <ButtonRound isSubmit={false} onClickFunction={HandlerOnClick}>{vist ? 'Ocultar formulario' : 'Hacer consulta'}</ButtonRound>
            <ButtonRound isSubmit={false} onClickFunction={HandlerFavorites}>
              {(select?.length === user.favorites?.length) ? 'Añadir a favorito' : 'Mi favorito'}
            </ButtonRound>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ProfileProDescription;
