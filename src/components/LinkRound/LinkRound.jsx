import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LinkRound.scss';

function LinkRound(props) {
  const { children, link, className } = props;
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <Link className={`link-round ${className}`} to={link} data-cy={props['data-cy']}>{children}</Link>
  );
}

LinkRound.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
  'data-cy': PropTypes.string,
};

LinkRound.defaultProps = {
  link: '',
  className: '',
  'data-cy': '',
};

export default LinkRound;
