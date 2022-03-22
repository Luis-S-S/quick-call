import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Search from './Pages/Search/Search';
import ProfilePro from './Pages/ProfilePro/ProfilePro';
import EditarPerfil from './Pages/EditarPerfil/EditarPerfil';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/ProfilePro/:id" element={<ProfilePro />} />
          <Route path="/EditarPerfil" element={<EditarPerfil />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
