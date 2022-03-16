import './ProCard.scss';
import PropTypes from 'prop-types';

import ButtonSquare from '../ButtonSquare/ButtonSquare';

function ProCard({ details: { name, midescripcion, image } }) {
  return (
    <div className="pro-card">
      <div className="pro-card__header">
        <img className="pro-card__profile" src={image.perfil[0]} alt="profile" />
        <h1 className="pro-card__title">{name}</h1>
      </div>
      <p className="pro-card__body">{midescripcion}</p>
      <div className="calification">
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star-half-o" />
      </div>
      <div className="buttons">
        <ButtonSquare text="Ver Perfil" link="/ProfilePro" />
        <ButtonSquare text="Iniciar Chat" />
      </div>
    </div>

  );
}

ProCard.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    midescripcion: PropTypes.string,
    image: PropTypes.shape({
      perfil: PropTypes.shape([]),
    }),
  }),
};

ProCard.defaultProps = {
  details: {
    name: 'Pepito Perez default',
    midescripcion: 'Que hubo default',
    image: {
      perfil: [
        'url',
      ],
    },
  },
};

export default ProCard;
