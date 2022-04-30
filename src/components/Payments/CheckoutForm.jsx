/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/alt-text */
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
    <div className="payment">
      <div className="payment-container">
        <form className="payment-form" onSubmit={handleSubmit}>
          <input className="StripeElement" />
          <label htmlFor="CardNumberElement">Card Number</label>
          <CardNumberElement className="payment-form__input" />
          <label htmlFor="CardNumberElement">Valid thru</label>
          <CardExpiryElement className="payment-form__input" />
          <label htmlFor="CardNumberElement">CVV</label>
          <CardCvcElement className="payment-form__input" />
          <button className="form-button" type="submit">Realizar pago</button>
        </form>
        {/* <div className="payment-contract">
          <h3>Información detallada compra</h3>
          <h4>Objetivos</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, inventore saepe
            voluptate eveniet sed vero dolorem perferendis dolor ipsam ad impedit maxime error
            rem magni dolore. Officia dolores quia totam!
          </p>
          <h4>Condiciones</h4>
          <p>
            1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore vitae veniam
            sit libero incidunt dolores error nisi similique facilis eum.
          </p>
          <p>
            2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus maxime
            mollitia illum itaque sit esse corrupti eos ab eligendi voluptate?
          </p>
          <p>
            3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia suscipit
            esse tempora aperiam. earum dolorum quas exercitationem?
          </p>
          <h4>Precio </h4>
          <p>$ 400</p>
        </div> */}
      </div>
    </div>
  );
}
