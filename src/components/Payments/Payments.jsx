import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';
import './Check.scss';

const stripePromise = loadStripe('pk_test_51Krv6hJ8N9jnWJGDkp3t64KqMPzcO0pEBYAu9tyHra11JNEwSXe7yoO9wOoxykQtJeYzGbm1SEQKHceGt8IPXKs000JEZrlnmd');

export default function Payments() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
