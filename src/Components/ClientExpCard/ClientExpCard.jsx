import './ClientExpCard.scss';
import PropTypes from 'prop-types';

function ClientExpCard({ details: { image, name, experience } }) {
  return (
    <div className="client-card">
      <div className="client-card__header">
        <img className="client-card__profile" src={image} alt="profile" />
        <h2 className="client-card__title">{name}</h2>
      </div>
      <p className="client-card__body">{experience}</p>
    </div>
  );
}

ClientExpCard.propTypes = {
  details: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClientExpCard;
