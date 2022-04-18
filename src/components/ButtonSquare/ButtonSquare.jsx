import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ButtonSquare.scss';

function ButtonSquare({ children, link, color }) {
  return (
    <div className="button__container">
      <Link className={`button-square ${color}`} to={link}>{children}</Link>
    </div>
  );
}

ButtonSquare.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string,
  color: PropTypes.string,
};

ButtonSquare.defaultProps = {
  link: '',
  color: 'dark-purple',
};

export default ButtonSquare;
