import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ButtonRound.scss';

function ButtonRound({ text, link }) {
  return (
    <Link className="button-round" to={link}>{text}</Link>
  );
}

ButtonRound.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ButtonRound.defaultProps = {
  link: '',
};

export default ButtonRound;
