import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CardExpiryElement, CardNumberElement, CardCvcElement, useElements, useStripe,
} from '@stripe/react-stripe-js';
import { paymentIntent } from '../../services/payments';
import { getJobById } from '../../services/jobs';
import PaymentDetail from '../PaymentDetail/PaymentDetail';
import './Check.scss';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [job, setJob] = useState({});
  const jobId = useParams().id;

  useEffect(async () => {
    const jobs = await getJobById(jobId);
    const response = await jobs.json();
    setJob(response);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    });
    const amount = job.amount * 100;
    const description = job.title;
    await paymentIntent(error, paymentMethod, amount, description, jobId);
  };

  return (
    <div className="payment">
      <div className="payment-container">
        <form className="payment-form" onSubmit={handleSubmit}>
          <label htmlFor="CardNumberElement">Card Number</label>
          <CardNumberElement className="payment-form__input" />
          <label htmlFor="CardNumberElement">Valid thru</label>
          <CardExpiryElement className="payment-form__input" />
          <label htmlFor="CardNumberElement">CVV</label>
          <CardCvcElement className="payment-form__input" />
          <button className="form-button" type="submit">Realizar pago</button>
        </form>
        <PaymentDetail payment={job} />
      </div>
    </div>
  );
}
