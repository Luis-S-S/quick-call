import {
  CardExpiryElement, CardNumberElement, CardCvcElement, useElements, useStripe,
} from '@stripe/react-stripe-js';
import { paymentIntent } from '../../services/payments';
import './Check.scss';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    });
    const amount = 100_00;
    await paymentIntent(error, paymentMethod, amount);
  };
  return (
    <div className="payment-container">
      <form className="payment-form" onSubmit={handleSubmit}>
        <h1 className="form__title">Consola de Pago</h1>
        <CardNumberElement className="payment-form__input" />
        <CardExpiryElement className="payment-form__input" />
        <CardCvcElement className="payment-form__input" />
        <button className="form-button" type="submit">Realizar pago</button>
      </form>
      <div>
        Información detallada de la tarjeta
      </div>
    </div>
  );
}
