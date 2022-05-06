import PropTypes from 'prop-types';
import './ButtonSquare.scss';

function ButtonSquare({
  children, color, className, isSubmit, onClickFunction,
}) {
  return (
    <button
      className={`button-square ${className} ${color}`}
      onClick={onClickFunction}
      type={isSubmit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
}

ButtonSquare.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  isSubmit: PropTypes.bool.isRequired,
  onClickFunction: PropTypes.func,
};

ButtonSquare.defaultProps = {
  color: 'dark-purple',
  className: '',
  onClickFunction: () => {},
};

export default ButtonSquare;
