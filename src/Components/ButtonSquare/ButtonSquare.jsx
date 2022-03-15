import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ButtonSquare.scss';

function ButtonSquare({ text, link }) {
  return (
    <Link className="button-square" to={link}>{text}</Link>
  );
}

ButtonSquare.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ButtonSquare.defaultProps = {
  link: '',
};

export default ButtonSquare;
