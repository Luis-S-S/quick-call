import './App.scss';

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUserProfile } from './store/actions';

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

function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(fetchUserProfile());
  }, []);

  return (
    <div className="App">
      <Router>
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
          <Route path="/payments/:id" element={<Payment />} />
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
