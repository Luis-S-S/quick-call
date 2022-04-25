import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import SignupProfessional from './components/SignupProfessional/SignupProfessional';
import SignupClient from './components/Login/SignupClient';
import Search from './pages/Search';
import ProfilePro from './pages/ProfilePro';
import EditarPerfil from './pages/EditarPerfil';
import Payments from './components/Payments/Payments';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup_client" element={<SignupClient />} />
          <Route path="/signup_professional" element={<SignupProfessional />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profilePro/:id" element={<ProfilePro />} />
          <Route path="/editarperfil" element={<EditarPerfil />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
