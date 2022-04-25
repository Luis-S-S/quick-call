import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import payments from '../../services/payments';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    const amount = 100_00;
    await payments(error, paymentMethod, amount);
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Submit</button>
    </form>
  );
}
