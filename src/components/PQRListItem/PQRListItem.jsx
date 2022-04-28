import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PQRListItem.scss';

export default function PQRListItem({ pqrInfo }) {
  const {
    _id,
    subject,
    status,
  } = pqrInfo;

  return (
    <div className="pqr-list-container">
      <div className="pqr-list__subject">
        Asunto:
        {' '}
        {subject}
      </div>
      <div className="pqr-list__status">
        Estado:
        {' '}
        {status}
      </div>
      <Link className="pqr-list__link" to={`/pqr/${_id}`}>Ver detalle</Link>
    </div>
  );
}

PQRListItem.propTypes = {
  pqrInfo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
};

PQRListItem.defaultProps = {
  pqrInfo: PropTypes.shape({}),
};
