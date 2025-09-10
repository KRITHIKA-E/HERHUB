import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entrance from "./pages/Entrance";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // required for dropdowns & toggler

const App = () => {
  return (
    <Router>
      <NavBar />  {/* optional, show in all pages */}
      <Routes>
        <Route path="/" element={<Entrance />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
