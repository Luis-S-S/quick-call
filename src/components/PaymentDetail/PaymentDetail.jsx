import PropTypes from 'prop-types';
import './PaymentDetail.scss';

export default function PaymentDetail({ payment }) {
  console.log(payment);

  return (
    <div className="payment-detail__container">
      <h1>Factura</h1>
    </div>
  );
}

PaymentDetail.propTypes = {
  payment: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};
