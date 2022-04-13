import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ButtonRound.scss';

function ButtonRound({ children, link }) {
  return (
    <Link className="button-round" to={link}>{children}</Link>
  );
}

ButtonRound.propTypes = {
  children: PropTypes.element.isRequired,
  link: PropTypes.string,
};

ButtonRound.defaultProps = {
  link: '',
};

export default ButtonRound;
