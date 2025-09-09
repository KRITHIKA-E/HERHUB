// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Entrance from "./pages/Entrance";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import PhoneLogin from "./pages/PhoneLogin";

import "./index.css";  // only here

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Entrance />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/phonelogin" element={<PhoneLogin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
