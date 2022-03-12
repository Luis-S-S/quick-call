import './App.scss';
import NavBar from './Components/Navbar/NavigationBar';

import React from "react";
import "./App.scss";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Search } from "./Pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
