import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PaymentListItem.scss';

export default function PaymentListItem({ details }) {
  const {
    _id,
    createdAt,
    currency,
    value,
  } = details;

  const formatDate = () => new Date(createdAt).toLocaleDateString('es-ES');
  const formatAmount = () => `$${(value / 100).toFixed(2)} ${currency}`;

  return (
    <div className="payment-list-container">
      <div className="payment-list__text">
        Fecha:
        {' '}
        {formatDate()}
      </div>
      <div className="payment-list__text">
        Monto:
        {' '}
        {formatAmount()}
      </div>
      <Link className="payment-list__link" to={`/payment/${_id}`}>Ver detalle</Link>
    </div>
  );
}

PaymentListItem.propTypes = {
  details: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};
