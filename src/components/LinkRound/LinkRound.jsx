import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LinkRound.scss';

function LinkRound({ children, link }) {
  return (
    <Link className="button-round" to={link}>{children}</Link>
  );
}

LinkRound.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
};

LinkRound.defaultProps = {
  link: '',
};

export default LinkRound;
