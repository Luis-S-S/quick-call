import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LinkRound.scss';

function LinkRound({ children, link, className }) {
  return (
    <Link className={`button-round ${className}`} to={link}>{children}</Link>
  );
}

LinkRound.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
};

LinkRound.defaultProps = {
  link: '',
  className: '',
};

export default LinkRound;
