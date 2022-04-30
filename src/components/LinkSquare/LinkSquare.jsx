import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LinkSquare.scss';

function LinkSquare({
  children, link, color, className,
}) {
  return (
    <div className="button__container">
      <Link className={`button-square ${className} ${color}`} to={link}>{children}</Link>
    </div>
  );
}

LinkSquare.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

LinkSquare.defaultProps = {
  link: '',
  color: 'dark-purple',
  className: '',
};

export default LinkSquare;
