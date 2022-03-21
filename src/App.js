import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Search from './Pages/Search';
import ProfilePro from './Pages/ProfilePro';
import EditarPerfil from './Pages/EditarPerfil';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/ProfilePro" element={<ProfilePro />} />
          <Route path="/EditarPerfil" element={<EditarPerfil />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
