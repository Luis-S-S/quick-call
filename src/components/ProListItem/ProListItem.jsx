import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRemoveFavorite } from '../../store/actions';
import LinkSquare from '../LinkSquare/LinkSquare';
import './ProListItem.scss';

function ProListItem({
  details: {
    name, image, _id,
  },
}) {
  const dashboardInformation = useSelector((state) => state.userDashboard);
  const { favorites } = useSelector((state) => state.userDashboard);
  const dispatch = useDispatch();

  const handlerDeleteFavorite = (e) => {
    const { id } = e.target;
    const indexOf = favorites.indexOf(id);
    if (indexOf !== -1) {
      favorites.splice(indexOf, 1);
    }
    const payload = { key: 'favorites', value: favorites };
    dispatch(fetchRemoveFavorite(dashboardInformation.id, payload));
  };

  return (
    <div className="pro-list-item">
      <div className="pro-list-item__start">
        <img className="pro-card__profile" src={(image.profile)} alt="profile" />
        <h1 className="pro-card__title">{name}</h1>
      </div>
      <div className="pro-list-item__end">
        <LinkSquare link={`/ProfilePro/${_id}`}>Ver Perfil</LinkSquare>
        <LinkSquare>Iniciar Chat</LinkSquare>
        <button className="pro-list-item__button" type="button" onClick={handlerDeleteFavorite}>
          <img id={_id} className="pro-list-item__icon" src="/images/icons/warning-icon.svg" alt="Eliminar Favorito" />
        </button>
      </div>

    </div>

  );
}

ProListItem.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.shape({
      profile: PropTypes.string,
    }),
    _id: PropTypes.string.isRequired,
  }),
};

ProListItem.defaultProps = {
  details: {
    name: 'Error de carga',
    image: {
      profile: [
        'url',
      ],
    },
  },
};

export default ProListItem;
