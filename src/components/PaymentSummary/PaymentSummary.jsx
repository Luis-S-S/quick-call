import PropTypes from 'prop-types';
import './PaymentSummary.scss';

export default function PaymentDetail({ payment }) {
  return (
    <div className="payment-detail__container">
      <h1 className="payment-detail__title">Resumen de pago</h1>
      <p>
        <span className="payment-detail__subtitle">Titulo: </span>
        <span className="payment-detail__body">{payment?.title}</span>
      </p>
      <p>
        <span className="payment-detail__subtitle">Estado: </span>
        <span className="payment-detail__body">{payment?.status}</span>
      </p>
      <p>
        <span className="payment-detail__subtitle">Objetivo: </span>
        <span className="payment-detail__body">{payment?.objective}</span>
      </p>
      <p>
        <span className="payment-detail__subtitle">Monto: </span>
        <span className="payment-detail__body">{`$ ${payment?.amount}`}</span>
      </p>
    </div>
  );
}

PaymentDetail.propTypes = {
  payment: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    status: PropTypes.string,
    objective: PropTypes.string,
    amount: PropTypes.number,
  }).isRequired,
};
