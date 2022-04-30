import PropTypes from 'prop-types';
import './SpecialtyListItem.scss';

export default function SpecialtyListItem({ details: { name, isCertified } }) {
  return (
    <div className="specialty-list-item">
      <span>{name}</span>
      {isCertified && <img className="specialty-list-item__icon" src="/images/icons/checkmark-icon-green.svg" alt="Certificado" />}
      <button className="specialty-list-item__button" type="button">
        <img id={name} className="specialty-list-item__icon" src="/images/icons/warning-icon.svg" alt="Eliminar Favorito" />
      </button>
    </div>
  );
}

SpecialtyListItem.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    isCertified: PropTypes.bool,
  }),
};

SpecialtyListItem.defaultProps = {
  details: {
    name: 'Error de carga',
    isCertified: false,
  },
};
