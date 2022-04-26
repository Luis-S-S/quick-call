import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSingleProfessional } from '../../../services/professional';
import ProListItem from '../../ProListItem/ProListItem';
import './Favorites.scss';

export default function Favorites() {
  const dashboardInformation = useSelector((state) => state.userDashboard);
  const [favoritesIdArray, setFavorites] = useState([]);
  const [favoritesProfessionals, setFavoritesProfessionals] = useState([]);

  useEffect(() => {
    setFavorites(dashboardInformation.favorites);
  }, [dashboardInformation]);

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
        />
      ))}
    </div>
  );
}
