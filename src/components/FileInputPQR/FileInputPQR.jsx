import PropTypes from 'prop-types';
import './FileInputPQR.scss';

export default function FileInputPQR({ name, onClickFunction }) {
  return (
    <div className="file-input__container">
      <p>{name}</p>
      <button className="file-input__button" type="button" onClick={onClickFunction}>
        <img name={name} className="pro-list-item__icon" src="/images/icons/warning-icon.svg" alt="Eliminar Favorito" />
      </button>
    </div>
  );
}

FileInputPQR.propTypes = {
  name: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func.isRequired,
};
