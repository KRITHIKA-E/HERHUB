import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomemakerDashboard from './pages/HomemakerDashboard';
import ProfessionalDashboard from './pages/ProfessionalDashboard';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1 className="container">Welcome to HER HUB</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homemaker" element={<HomemakerDashboard />} />
        <Route path="/professional" element={<ProfessionalDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
