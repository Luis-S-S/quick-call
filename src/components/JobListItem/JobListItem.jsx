import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './JobListItem.scss';

export default function JobListItem({ jobInfo, role }) {
  const {
    _id,
    status,
    clientName,
    professionalName,
  } = jobInfo;
  let style = {};
  if (status === 'Oferta') {
    style = { color: 'rgb(233, 47, 26)' };
  } else if (status === 'En progreso') {
    style = { color: 'rgb(234, 154, 15)' };
  } else if (status === 'Pendiente pago') {
    style = { color: 'rgb(242, 255, 0)' };
  } else if (status === 'Finalizado') {
    style = { color: 'rgb(35, 216, 53)' };
  } else {
    style = { color: 'black' };
  }

  return (
    <div className="job-list-container">
      <div className="job-list__id">
        {`${_id[15]}${_id[16]}${_id[17]}${_id[18]}${_id[19]}${_id[20]}${_id[21]}${_id[22]}`}
      </div>
      <div className="job-list__title">
        {(role === 'client') ? professionalName : clientName}
      </div>
      <div className="job-list__status" style={style}>
        {status}
      </div>
      <Link className="job-list__link" to={`/chat/${_id}`}>Chat</Link>
      <Link className="job-list__link" to={`/jobs/${_id}`}>Detalle</Link>
    </div>
  );
}

JobListItem.propTypes = {
  role: PropTypes.string,
  jobInfo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    clientName: PropTypes.string.isRequired,
    professionalName: PropTypes.string.isRequired,
  }),
};

JobListItem.defaultProps = {
  jobInfo: PropTypes.shape({}),
  role: PropTypes.string,
};
