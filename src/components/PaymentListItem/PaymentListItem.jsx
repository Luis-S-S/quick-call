import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PaymentListItem.scss';

export default function PaymentListItem({ details }) {
  const {
    _id,
    description,
    createdAt,
    currency,
    value,
  } = details;

  const formatDate = () => new Date(createdAt).toLocaleDateString('es-ES');
  const formatAmount = () => `$${(value / 100)} ${currency}`;

  return (
    <div className="payment-list-container">
      <div className="payment-list__id">
        {_id?.slice(15, 22)}
      </div>
      <div className="payment-list__text">
        {description}
      </div>
      <div className="payment-list__text">
        {formatDate()}
      </div>
      <div className="payment-list__amount">
        {formatAmount()}
      </div>
      <Link className="payment-list__link" to={`/payment/${_id}`}>Detalle</Link>
    </div>
  );
}

PaymentListItem.propTypes = {
  details: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};
