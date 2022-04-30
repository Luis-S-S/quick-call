import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getJobsByUserId } from '../../../../services/jobs';
import { getPaymentsByUserId } from '../../../../services/payments';
import PaymentListItem from '../../../PaymentListItem/PaymentListItem';
import LinkRound from '../../../LinkRound/LinkRound';
import './PaymentHistory.scss';

export default function PaymentHistory() {
  const { _id, role } = useSelector((state) => state.user);
  const [jobsArray, setJobsArray] = useState([]);
  const [paymentsArray, setPaymentArray] = useState([]);

  const renderError = () => {
    switch (role) {
      case 'client':
        return (
          <>
            <h1 className="dashboard-jobs--error">Actualmente no has realizado pagos</h1>
            <LinkRound link="/search">Solicita un trabajo con un profesional!</LinkRound>
          </>
        );
      case 'professional':
        return (<h1 className="dashboard-jobs--error">Actualmente no has recibido pagos</h1>);
      default:
        return (<h1 className="dashboard-jobs--error">No existe registro de pago</h1>);
    }
  };

  useEffect(async () => {
    const jobs = await getJobsByUserId(_id);
    const response = await jobs.json();
    setJobsArray(response);
  }, []);

  useEffect(async () => {
    const payments = jobsArray.map((job) => getPaymentsByUserId(_id, job.payment));
    const promises = await Promise.all(payments);
    const response = promises.map((payment) => payment.json());
    Promise.all(response)
      .then((data) => setPaymentArray(data))
      .catch((err) => err);
  }, [jobsArray]);

  return (
    <div className="dashboard-payment">
      <h1 className="dashboard-payment__title">{role === 'client' ? 'Tus Pagos' : 'Tus Ganancias'}</h1>
      {
        paymentsArray.length > 0
          ? (
            paymentsArray.map((payment) => (
              <PaymentListItem details={payment} />
            ))
          )
          : (
            renderError()
          )
      }
    </div>
  );
}
