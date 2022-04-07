import './ProCard.scss';
import PropTypes from 'prop-types';
import ButtonSquare from '../ButtonSquare/ButtonSquare';

function ProCard({
  details: {
    name, myDescription, image, _id,
  },
}) {
  // console.log('image type ', typeof image.profile[0]);
  return (
    <div className="pro-card">
      <div className="pro-card__header">
        <img className="pro-card__profile" src={(image.profile[0])} alt="profile" />
        <h1 className="pro-card__title">{name}</h1>
      </div>
      <p className="pro-card__body">{myDescription}</p>
      <div className="calification">
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star-half-o" />
      </div>
      <div className="buttons">
        <ButtonSquare link={`/ProfilePro/${_id}`}>Ver Perfil</ButtonSquare>
        <ButtonSquare>Iniciar Chat</ButtonSquare>
      </div>
    </div>

  );
}

ProCard.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    myDescription: PropTypes.string,
    image: PropTypes.shape({
      profile: PropTypes.arrayOf(PropTypes.string),
    }),
    _id: PropTypes.string.isRequired,
  }),
};

ProCard.defaultProps = {
  details: {
    name: 'Pepito Perez default',
    myDescription: 'Que hubo default',
    image: {
      profile: [
        'url',
      ],
    },
  },
};

export default ProCard;
