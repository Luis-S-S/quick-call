import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateJobById } from '../../services/jobs';
import { API_URL } from '../../services/download';
import ButtonRound from '../ButtonRound/ButtonRound';
import LinkRound from '../LinkRound/LinkRound';
import './JobDetail.scss';

export default function JobDetail({ job }) {
  const user = useSelector((state) => state.user);
  const [jobInfo, setJobInfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setJobInfo(job);
  }, [job]);

  const handleStatusFinished = async () => {
    await updateJobById(job._id, { status: 'Finalizado' });
    setJobInfo({ ...jobInfo, status: 'Finalizado' });
  };
  const handleStatusClosed = async () => {
    await updateJobById(job._id, { status: 'Cerrado' });
    setJobInfo({ ...jobInfo, status: 'Cerrado' });
  };

  const handleDownloadJobPdf = async () => {
    window.open(`${API_URL}/download/job/${job._id}`);
  };

  const renderButtonActions = () => {
    if (user.role === 'client' && jobInfo?.status === 'Pendiente pago') {
      return (
        <LinkRound className="LinkRound" link={`/payment_suite/${jobInfo?._id}`}>Pagar</LinkRound>
      );
    }
    if (user.role === 'professional' && jobInfo?.status === 'En progreso') {
      return (
        <ButtonRound className="ButtonRound" isSubmit={false} onClickFunction={handleStatusFinished}>
          Finalizar trabajo
        </ButtonRound>
      );
    }
    if (user.role === 'client' && jobInfo?.status === 'Finalizado') {
      return (
        <ButtonRound className="ButtonRound" isSubmit={false} onClickFunction={handleStatusClosed}>
          Confirmar trabajo
        </ButtonRound>
      );
    }
    return null;
  };

  const renderDownloadButton = () => {
    if (jobInfo?.status === 'En progreso' || jobInfo?.status === 'Finalizado' || jobInfo?.status === 'Cerrado') {
      return (
        <ButtonRound className="ButtonRound" isSubmit={false} onClickFunction={handleDownloadJobPdf}>
          Descargar PDF
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
        {jobInfo?.title}
      </h3>
      <h3 className="job-detail__subtitle">
        Estado:
        {' '}
        {jobInfo?.status}
      </h3>
      <h3 className="job-detail__subtitle">
        Costo:
        {' '}
        {jobInfo?.amount === 0 ? 'Por definir' : jobInfo?.amount}
      </h3>
      <p className="job-detail__body">
        Descripción:
        {' '}
        {jobInfo?.objective}
      </p>
      <h3 className="job-detail__subtitle">Condiciones</h3>
      <div className="job-detail__section">
        <ul className="section__list">
          <h6 className="section__list__title">Cliente</h6>
          {jobInfo?.conditionsClients?.length > 0
            ? (
              jobInfo?.conditionsClients?.map((condition) => (
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
          {jobInfo?.conditionsProfessionals?.length > 0
            ? (
              jobInfo?.conditionsProfessionals?.map((condition) => (
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
          {jobInfo?.evidenceClients?.length > 0
            ? (
              jobInfo?.evidenceClients?.map((condition) => (
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
          {jobInfo?.evidenceProfessionals?.length > 0
            ? (
              jobInfo?.evidenceProfessionals?.map((condition) => (
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
        <ButtonRound className="ButtonRound" isSubmit={false} onClickFunction={() => { navigate(-1); }}>
          Volver
        </ButtonRound>
        {renderButtonActions()}
        {renderDownloadButton()}
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
