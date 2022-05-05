import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../../store/actions';
import { updateClient } from '../../../../services/clients';
import { getSingleProfessional } from '../../../../services/professionals';
import LinkRound from '../../../LinkRound/LinkRound';
import ProListItem from '../../../ProListItem/ProListItem';
import './Favorites.scss';

export default function Favorites() {
  const dispatch = useDispatch();
  const { _id, favorites } = useSelector((state) => state.user);
  const [favoritesId, setFavoritesId] = useState(favorites);
  const [favoritesProfessionals, setFavoritesProfessionals] = useState([]);

  const handlerClickDeleteFavorite = async (e) => {
    const newArray = favoritesId.filter((favorite) => favorite !== e.target.id);
    const response = await updateClient(_id, { favorites: newArray });
    const {
      password, payment, location, ...rest
    } = await response.json();
    if (response.status === 200) {
      dispatch(setUser(rest));
      setFavoritesId(newArray);
    } else {
      throw new Error('Error al eliminar intente nuevamente');
    }
  };

  useEffect(async () => {
    const promiseArray = favoritesId.map((favoriteId) => getSingleProfessional(favoriteId));
    const promiseAll = await Promise.all(promiseArray);
    setFavoritesProfessionals(promiseAll);
  }, [favoritesId]);

  return (
    <div className="dashboard-favorites">
      <h1 className="dashboard-favorites__title">Tus Favoritos</h1>
      {
      favoritesProfessionals.length > 0
        ? favoritesProfessionals.map((item) => (
          <ProListItem
            key={item?._id}
            details={item}
            deleteFunction={handlerClickDeleteFavorite}
          />
        ))
        : (
          <>
            <h1 className="dashboard-favorites--error">Actualmente no tienes ningún favorito seleccionado</h1>
            <LinkRound link="/search">Encuentra a los mejores profesionales en QC</LinkRound>
          </>
        )
      }
    </div>
  );
}
