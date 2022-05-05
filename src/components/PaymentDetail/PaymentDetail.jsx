import PropTypes from 'prop-types';
import './PaymentDetail.scss';

export default function PaymentDetail({ payment }) {
  return (
    <div className="payment-detail__container">
      <h1>{payment?.value}</h1>
    </div>
  );
}

PaymentDetail.propTypes = {
  payment: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
};
