import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  CardExpiryElement, CardNumberElement, CardCvcElement, useElements, useStripe,
} from '@stripe/react-stripe-js';
import { setView, activateMiddle } from '../../store/actions';
import { paymentIntent } from '../../services/payments';
import { getJobById } from '../../services/jobs';
import NavBar from '../Navbar/NavigationBar';
import Footer from '../Footer/Footer';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import PaymentSummary from '../PaymentSummary/PaymentSummary';
import ButtonSquare from '../ButtonSquare/ButtonSquare';
import './Check.scss';

export default function CheckoutForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [job, setJob] = useState({});
  const jobId = useParams().id;

  const handleReturn = () => {
    navigate(-1);
  };

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

    console.log('Checkout form data: ', data.decline_code);

    if (!data.decline_code) {
      const middle = {
        title: 'Su pago no fue procesado',
        text: `El pago fue declinado con código: ${data.decline_code}. Revise con su banco e intente nuevamente`,
        button: 'Volver',
        link: '/profile',
      };
      dispatch(setView('PaymentHistory'));
      dispatch(activateMiddle(middle));
    } else {
      const middle = {
        title: 'Su pago no fue procesado',
        text: `El pago fue declinado con código: ${data.decline_code}. Revise con su banco e intente nuevamente`,
        button: 'Volver',
        link: '/profile',
      };
      dispatch(setView('PaymentHistory'));
      dispatch(activateMiddle(middle));
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
                  <h1 className="payment-form__title">Información de pago</h1>
                  <label className="payment-form__label" htmlFor="CardNumberElement">Card Number</label>
                  <CardNumberElement className="payment-form__input" />
                  <label className="payment-form__label" htmlFor="CardNumberElement">Valid thru</label>
                  <CardExpiryElement className="payment-form__input" />
                  <label className="payment-form__label" htmlFor="CardNumberElement">CVV</label>
                  <CardCvcElement className="payment-form__input" />
                  <div className="payment-form__buttons">
                    <ButtonSquare isSubmit={false} onClickFunction={handleReturn}>
                      Cancelar
                    </ButtonSquare>
                    <ButtonSquare isSubmit>Realizar pago</ButtonSquare>
                  </div>
                </form>
                <PaymentSummary payment={job} />
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
