import PropTypes from 'prop-types';
import './ButtonRound.scss';

function ButtonRound({
  children, onClickFunction, isSubmit, className,
}) {
  return (
    <button className={`button-round ${className}`} onClick={onClickFunction} type={isSubmit ? 'submit' : 'button'}>{children}</button>
  );
}

ButtonRound.propTypes = {
  children: PropTypes.node.isRequired,
  onClickFunction: PropTypes.func,
  isSubmit: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

ButtonRound.defaultProps = {
  onClickFunction: () => {},
  className: '',
};

export default ButtonRound;
