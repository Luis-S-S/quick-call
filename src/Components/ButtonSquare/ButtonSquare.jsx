import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ButtonSquare.scss';

function ButtonSquare({ children, link, color }) {
  return (
    <Link className={`button-square ${color}`} to={link}>{children}</Link>
  );
}

ButtonSquare.propTypes = {
  children: PropTypes.element.isRequired,
  link: PropTypes.string,
  color: PropTypes.string,
};

ButtonSquare.defaultProps = {
  link: '',
  color: 'dark-purple',
};

export default ButtonSquare;
