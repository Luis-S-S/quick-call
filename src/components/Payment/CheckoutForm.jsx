import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  CardExpiryElement, CardNumberElement, CardCvcElement, useElements, useStripe,
} from '@stripe/react-stripe-js';
import { setView } from '../../store/actions';
import { paymentIntent } from '../../services/payments';
import { getJobById } from '../../services/jobs';
import NavBar from '../Navbar/NavigationBar';
import Footer from '../Footer/Footer';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import PaymentDetail from '../PaymentDetail/PaymentDetail';
import './Check.scss';

export default function CheckoutForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    const response = await paymentIntent(error, paymentMethod, amount, description, jobId);
    const data = await response.json();

    if (data.decline_code) {
      alert(data.decline_code);
      navigate(-1);
    } else {
      alert('Payment Successful');
      dispatch(setView('PaymentHistory'));
      navigate('/profile');
    }
  };

  return (
    <div className="payment">
      {
        !job?.payment
          ? (
            <>
              <NavBar />
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
              <Footer />
            </>
          )
          : (
            <ErrorMessage code={500} message="Error verifique la información" />
          )
      }
    </div>
  );
}
