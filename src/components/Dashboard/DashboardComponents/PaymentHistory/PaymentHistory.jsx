import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getJobsByUserId } from '../../../../services/jobs';
import { getPaymentsByUserId } from '../../../../services/payments';
import LinkRound from '../../../LinkRound/LinkRound';
import './PaymentHistory.scss';

export default function PaymentHistory() {
  const { id, role } = useSelector((state) => state.user);
  const [jobsArray, setJobsArray] = useState([]);
  const [paymentsArray, setPaymentArray] = useState([]);

  const renderClientPayments = () => (
    paymentsArray.length > 0
      ? (
        paymentsArray.map((payment) => (
          <div>
            <span>Cliente</span>
            <span>{payment.createdAt}</span>
            <span>{payment.value}</span>
            <span>{payment.currency}</span>
          </div>
        )))
      : (
        <>
          <h1 className="dashboard-jobs--error">Actualmente no has realizado pagos</h1>
          <LinkRound link="/search">Solicita un trabajo con un profesional!</LinkRound>
        </>
      )
  );

  const renderProfessionalPayments = () => (
    paymentsArray.length > 0
      ? (
        paymentsArray.map((payment) => (
          <div>
            <span>Profesional</span>
            <span>{payment.createdAt}</span>
            <span>{payment.value}</span>
            <span>{payment.currency}</span>
          </div>
        )))
      : (
        <h1 className="dashboard-jobs--error">Actualmente no has recibido pagos</h1>
      )
  );

  const renderView = () => {
    let view;
    if (role === 'client') { view = renderClientPayments(); }
    if (role === 'professional') { view = renderProfessionalPayments(); }
    return view;
  };

  useEffect(async () => {
    const jobs = await getJobsByUserId(id);
    const response = await jobs.json();
    setJobsArray(response);
  }, []);

  useEffect(async () => {
    const payments = jobsArray.map((job) => getPaymentsByUserId(id, job.payment));
    const promises = await Promise.all(payments);
    const response = promises.map((payment) => payment.json());
    Promise.all(response)
      .then((data) => setPaymentArray(data))
      .catch((err) => err);
  }, [jobsArray]);

  return (
    <div className="dashboard-payment">
      <h1 className="dashboard-payment__title">Tus Pagos</h1>
      {renderView()}
    </div>
  );
}
