/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LinkSquare.scss';

function LinkSquare(props) {
  const {
    children, link, color, className,
  } = props;
  return (
    <div className="button__container">
      <Link className={`button-square ${className} ${color}`} to={link} data-cy={props['data-cy']}>{children}</Link>
    </div>
  );
}

LinkSquare.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  'data-cy': PropTypes.string,
};

LinkSquare.defaultProps = {
  link: '',
  color: 'dark-purple',
  className: '',
  'data-cy': '',
};

export default LinkSquare;
