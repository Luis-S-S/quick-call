/* eslint-disable no-unsafe-optional-chaining */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPaymentById } from '../../services/payments';
import NavBar from '../Navbar/NavigationBar';
import Footer from '../Footer/Footer';
import ButtonRound from '../ButtonRound/ButtonRound';
import './PaymentDetail.scss';

export default function PaymentDetail() {
  const navigate = useNavigate();
  const [payment, setPayment] = useState({});
  const { id } = useParams();

  const returnToProfile = () => navigate(-1);

  useEffect(async () => {
    const response = await getPaymentById(id);
    const data = await response.json();
    setPayment(data);
  }, []);

  return (
    <>
      <NavBar />
      <div className="payment-detail">
        <div className="payment-detail__container">
          <h1 className="payment-detail__title">
            Concepto de pago:
            {' '}
            {payment?.description}
          </h1>
          <h3 className="payment-detail__subtitle">
            Referencia:
            {' '}
            {payment?.refId}
          </h3>
          <p className="payment-detail__body">
            Fecha de pago:
            {' '}
            {new Date(payment?.createdAt).toLocaleDateString('es-ES')}
          </p>
          <p className="payment-detail__body">
            Monto:
            {' '}
            {`${payment?.value / 100} ${payment?.currency}`}
          </p>
          <ButtonRound className="payment-detail__button" onClickFunction={returnToProfile}>Volver</ButtonRound>
        </div>
      </div>
      <Footer />
    </>
  );
}
