import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateJobById } from '../../services/jobs';
import ButtonRound from '../ButtonRound/ButtonRound';
import LinkRound from '../LinkRound/LinkRound';
import './JobDetail.scss';

export default function JobDetail({ job }) {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleStatusFinished = async () => {
    await updateJobById(job._id, { status: 'Finalizado' });
  };
  const handleStatusClosed = async () => {
    await updateJobById(job._id, { status: 'Cerrado' });
  };

  const renderOption = () => {
    if (user.role === 'client' && job.status === 'Pendiente pago') {
      return (
        <LinkRound link={`/payments/${job?._id}`}>Pagar</LinkRound>
      );
    }
    if (user.role === 'professional' && job.status === 'En progreso') {
      return (
        <ButtonRound isSubmit={false} onClickFunction={handleStatusFinished}>
          Finalizar trabajo
        </ButtonRound>
      );
    }
    if (user.role === 'client' && job.status === 'Finalizado') {
      return (
        <ButtonRound isSubmit={false} onClickFunction={handleStatusClosed}>
          Confirmar trabajo
        </ButtonRound>
      );
    }
    return null;
  };

  return (
    <div className="job-detail__container">
      <h1 className="job-detail__title">Contrato de trabajo</h1>
      <h3 className="job-detail__subtitle">
        Nombre de la reforma:
        {' '}
        {job?.title}
      </h3>
      <h3 className="job-detail__subtitle">
        Estado:
        {' '}
        {job?.status}
      </h3>
      <h3 className="job-detail__subtitle">
        Costo:
        {' '}
        {job?.amount === 0 ? 'Por definir' : job?.amount}
      </h3>
      <p className="job-detail__body">
        Descripción:
        {' '}
        {job?.objective}
      </p>
      <h3 className="job-detail__subtitle">Condiciones</h3>
      <div className="job-detail__section">
        <ul className="section__list">
          <h6 className="section__list__title">Cliente</h6>
          {job?.conditionsClients?.length > 0
            ? (
              job?.conditionsClients?.map((condition) => (
                <li key={condition.name}>
                  {condition.name}
                </li>
              ))
            )
            : (<p>No se indicaron condiciones</p>
            )}
        </ul>
        <ul className="section__list">
          <h6 className="section__list__title">Profesional</h6>
          {job?.conditionsProfessionals?.length > 0
            ? (
              job?.conditionsProfessionals?.map((condition) => (
                <li key={condition.name}>
                  {condition.name}
                </li>
              ))
            )
            : (<p>No se indicaron condiciones</p>
            )}
        </ul>
      </div>
      <h3 className="job-detail__subtitle">Evidencias</h3>
      <div className="job-detail__section">
        <ul className="section__list">
          <h6 className="section__list__title">Cliente</h6>
          {job?.evidenceClients?.length > 0
            ? (
              job?.evidenceClients?.map((condition) => (
                <li key={condition.name}>
                  {condition.name}
                </li>
              ))
            )
            : (<p>No hay evidencias</p>
            )}
        </ul>
        <ul className="section__list">
          <h6 className="section__list__title">Profesional</h6>
          {job?.evidenceProfessionals?.length > 0
            ? (
              job?.evidenceProfessionals?.map((condition) => (
                <li key={condition.name}>
                  {condition.name}
                </li>
              ))
            )
            : (<p>No hay evidencias</p>
            )}
        </ul>
      </div>
      <div className="action__buttons">
        <ButtonRound isSubmit={false} onClickFunction={() => { navigate(-1); }}>
          Volver
        </ButtonRound>
        {renderOption()}
      </div>
    </div>
  );
}

JobDetail.propTypes = {
  job: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    objective: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    conditionsClients: PropTypes.arrayOf(PropTypes.string),
    conditionsProfessionals: PropTypes.arrayOf(PropTypes.string),
    evidenceClients: PropTypes.arrayOf(PropTypes.string),
    evidenceProfessionals: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
