import './App.scss';

import React from "react";
import "./App.scss";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Login/Signup";
import { Search } from "./Pages/Search/Search";

function App() {
  return (
    <div className="App">
      <Router>
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
