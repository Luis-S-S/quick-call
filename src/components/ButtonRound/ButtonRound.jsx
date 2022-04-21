import PropTypes from 'prop-types';
import './ButtonRound.scss';

function ButtonRound({ children, onClickFunction, isSubmit }) {
  return (
    <button className="button-round" onClick={onClickFunction} type={isSubmit ? 'submit' : 'button'}>{children}</button>
  );
}

ButtonRound.propTypes = {
  children: PropTypes.node.isRequired,
  onClickFunction: PropTypes.func,
  isSubmit: PropTypes.bool.isRequired,
};

ButtonRound.defaultProps = {
  onClickFunction: () => {},
};

export default ButtonRound;
