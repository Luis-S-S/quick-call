import './App.scss';
import NavBar from './Components/Navbar/NavigationBar';

import React from "react";
import "./App.scss";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
