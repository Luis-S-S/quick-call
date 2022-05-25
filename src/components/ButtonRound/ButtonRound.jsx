import PropTypes from 'prop-types';
import './ButtonRound.scss';

function ButtonRound(props) {
  const {
    children, onClickFunction, isSubmit, className,
  } = props;
  return (
    <button
      className={`button-round ${className}`}
      onClick={onClickFunction}
      type={isSubmit ? 'submit' : 'button'}
      // eslint-disable-next-line react/destructuring-assignment
      data-cy={props['data-cy']}
    >
      {children}
    </button>
  );
}

ButtonRound.propTypes = {
  children: PropTypes.node.isRequired,
  onClickFunction: PropTypes.func,
  isSubmit: PropTypes.bool.isRequired,
  className: PropTypes.string,
  'data-cy': PropTypes.string,
};

ButtonRound.defaultProps = {
  onClickFunction: () => {},
  className: '',
  'data-cy': '',
};

export default ButtonRound;
