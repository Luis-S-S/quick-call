import './App.scss';

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, activateMiddle } from './store/actions';

import Home from './pages/Home';
import Search from './pages/Search';
import ProfilePro from './pages/ProfilePro';
import Job from './pages/Job/Job';
import Signup from './components/Login/Signup';
import SignupClient from './components/Login/SignupClient';
import SignupProfessional from './components/SignupProfessional/SignupProfessional';
import Login from './components/Login/Login';
import Profile from './pages/Profile';
import CreatePQR from './pages/CreatePQR/CreatePQR';
import PQRDetail from './components/PQRDetail/PQRDetail';
import Payment from './components/Payment/Payment';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Chats from './pages/Chats';
import Middle from './components/Middle/Middle';
import socket from './utils/socket';
import PaymentDetail from './components/PaymentDetail/PaymentDetail';

function App() {
  const { _id, role } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    isActive, title, text, button, link, back,
  } = useSelector((state) => (state.middle));
  useEffect(async () => {
    await dispatch(fetchUserProfile());
    socket.on(`${_id}:createJobs`, async (idJob) => {
      const payload = {
        title: ((role === 'client') ? ('Has creado una nueva consulta') : ('Nueva solicitud de consulta')),
        text: 'Da click en aceptar para ver el detalle de la consulta o cancelar para mantenerte en la vista',
        button: 'Aceptar',
        link: `/jobs/${idJob}`,
        back: (-1),
      };
      dispatch(activateMiddle(payload));
    });
    socket.on(`${_id}:createPayment`, async (idJob) => {
      const payload = {
        title: ((role === 'client') ? ('Su pago fue realizado con éxito') : ('Se ha generado nuevo pago')),
        text: ((role === 'client') ? ('La confirmación de pago se ha enviado a su correo electrónico. Da click en aceptar para ver el detalle de la compra')
          : ('Has recibido nuevo pago, presiona aceptar para ver detalle de trabajo o cancelar para mantenerte en la vista')),
        button: 'Aceptar',
        link: ((role === 'client') ? (`/payment/${idJob}`) : (`/jobs/${idJob}`)),
        back: ((role === 'client') ? (undefined) : (-1)),
      };
      dispatch(activateMiddle(payload));
    });
  }, [_id, role]);

  return (
    <div className="App">
      <Router>
        {(isActive) && (
        <Middle
          title={title}
          text={text}
          button={button}
          link={link}
          back={back}
        />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profilePro/:id" element={<ProfilePro />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup_client" element={<SignupClient />} />
          <Route path="/signup_professional" element={<SignupProfessional />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pqr_form" element={<CreatePQR />} />
          <Route path="/pqr/:id" element={<PQRDetail />} />
          <Route path="/payment_suite/:id" element={<Payment />} />
          <Route path="/payment/:id" element={<PaymentDetail />} />
          <Route path="/chat/:id" element={<Chats />} />
          <Route path="/jobs/:id" element={<Job />} />
          <Route path="/login_redirect" element={<ErrorMessage code={401} message="Oops! Inicia sesión para continuar" />} />
          <Route path="*" element={<ErrorMessage code={404} message="Oops! Pagina no encontrada" />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
