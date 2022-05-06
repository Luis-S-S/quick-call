import './ProCard.scss';
import PropTypes from 'prop-types';
import LinkSquare from '../LinkSquare/LinkSquare';

function ProCard({
  details: {
    name, myDescription, image, _id,
  },
}) {
  return (
    <div className="pro-card">
      <div className="pro-card__header">
        <img className="pro-card__profile" src={(image?.profile)} alt="profile" />
        <h1 className="pro-card__title">{name}</h1>
      </div>
      <p className="pro-card__body">{myDescription}</p>
      <div className="buttons">
        <LinkSquare link={`/ProfilePro/${_id}`}>Ver Perfil</LinkSquare>
      </div>
    </div>

  );
}

ProCard.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    myDescription: PropTypes.string,
    image: PropTypes.shape({
      profile: PropTypes.string,
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
