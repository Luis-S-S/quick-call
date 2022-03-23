import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Signup0 from './Components/Login/Signup0';
import Search from './Pages/Search';
import ProfilePro from './Pages/ProfilePro';
import EditarPerfil from './Pages/EditarPerfil';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup0" element={<Signup0 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profilePro/:id" element={<ProfilePro />} />
          <Route path="/editarperfil" element={<EditarPerfil />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
