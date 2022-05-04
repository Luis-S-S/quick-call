import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './JobListItem.scss';

export default function JobListItem({ jobInfo }) {
  const {
    _id,
    objective,
    status,
  } = jobInfo;

  return (
    <div className="job-list-container">
      <div className="job-list__objective">
        Objetivo:
        {' '}
        {objective}
      </div>
      <div className="job-list__status">
        Estado:
        {' '}
        {status}
      </div>
      <Link className="job-list__link" to={`/jobs/${_id}`}>Ver detalle</Link>
      <Link className="job-list__link" to={`/jobs/${_id}`}>Ver detalle</Link>
    </div>
  );
}

JobListItem.propTypes = {
  jobInfo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    objective: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
};

JobListItem.defaultProps = {
  jobInfo: PropTypes.shape({}),
};
