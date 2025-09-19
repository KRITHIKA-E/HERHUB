import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entrance from "./pages/Entrance";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard"; // new
import Passions from "./pages/Passions"; // adjust path if needed


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Entrance />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ added */}
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/passions" element={<Passions />} /> {/* ✅ added */}
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
