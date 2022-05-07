import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { getPQRById } from '../../services/pqrs';
import NavBar from '../Navbar/NavigationBar';
import Footer from '../Footer/Footer';
import './PQRDetail.scss';

export default function PQRDetail() {
  const [pqr, setPQR] = useState({});
  const { id } = useParams();

  useEffect(async () => {
    const response = await getPQRById(id);
    const data = await response.json();
    setPQR(data);
  }, []);

  return (
    <>
      <NavBar />
      <div className="pqr-detail">
        <div className="pqr-detail__container">
          <h1 className="pqr-detail__title">
            Asunto:
            {' '}
            {pqr?.subject}
          </h1>
          <h3 className="pqr-detail__subtitle">
            Estado:
            {' '}
            {pqr?.status}
          </h3>
          <p className="pqr-detail__body">
            Fecha de solicitud:
            {' '}
            {new Date(pqr?.date).toLocaleDateString('es-ES')}
          </p>
          <p className="pqr-detail__body">
            Descripción:
            {' '}
            {pqr?.description}
          </p>
          <h3 className="pqr-detail__subtitle">Evidencias: </h3>
          <Carousel>
            {pqr?.evidence?.map((evidence) => <img className="pqr-detail__evidence" src={evidence} alt="evidence" />)}
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
}
