import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LinkSquare.scss';

function LinkSquare({ children, link, color }) {
  return (
    <div className="button__container">
      <Link className={`button-square ${color}`} to={link}>{children}</Link>
    </div>
  );
}

LinkSquare.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string,
  color: PropTypes.string,
};

LinkSquare.defaultProps = {
  link: '',
  color: 'dark-purple',
};

export default LinkSquare;
