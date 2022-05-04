import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './JobListItem.scss';

export default function JobListItem({ jobInfo }) {
  const {
    _id,
    title,
    status,
  } = jobInfo;

  return (
    <div className="job-list-container">
      <div className="job-list__title">
        Objetivo:
        {' '}
        {title}
      </div>
      <div className="job-list__status">
        Estado:
        {' '}
        {status}
      </div>
      <Link className="job-list__link" to={`/chat/${_id}`}>Ver chat</Link>
      <Link className="job-list__link" to={`/jobs/${_id}`}>Ver detalle</Link>
    </div>
  );
}

JobListItem.propTypes = {
  jobInfo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
};

JobListItem.defaultProps = {
  jobInfo: PropTypes.shape({}),
};
