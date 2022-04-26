import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getClientByEmail, updateClient } from '../../../services/clients';
import { getSingleProfessional } from '../../../services/professional';
import ProListItem from '../../ProListItem/ProListItem';
import './Favorites.scss';

export default function Favorites() {
  const userEmail = useSelector((state) => state.user.email);
  const [favoritesIdArray, setFavoritesIdArray] = useState([]);
  const [favoritesProfessionals, setFavoritesProfessionals] = useState([]);
  const [searchId, setSearchId] = useState('');

  const handlerClickDeleteFavorite = async (e) => {
    const newArray = favoritesIdArray.filter((favorite) => favorite !== e.target.id);
    const response = await updateClient(searchId, { favorites: newArray });
    if (response.status === 200) { setFavoritesIdArray(newArray); } else { throw new Error('Error al eliminar intente nuevamente'); }
  };

  useEffect(async () => {
    const response = await getClientByEmail(userEmail);
    const { id, favorites } = await response.json();
    setSearchId(id);
    setFavoritesIdArray(favorites);
  }, [userEmail]);

  useEffect(async () => {
    const promiseArray = favoritesIdArray.map((favoriteId) => getSingleProfessional(favoriteId));
    const promiseAll = await Promise.all(promiseArray);
    setFavoritesProfessionals(promiseAll);
  }, [favoritesIdArray]);

  return (
    <div className="dashboard-favorites">
      {favoritesProfessionals.map((item) => (
        <ProListItem
          key={item?._id}
          details={item}
          deleteFunction={handlerClickDeleteFavorite}
        />
      ))}
    </div>
  );
}
