import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomemakerDashboard from './pages/HomemakerDashboard';
import ProfessionalDashboard from './pages/ProfessionalDashboard';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homemaker" element={<HomemakerDashboard />} />
        <Route path="/professional" element={<ProfessionalDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
