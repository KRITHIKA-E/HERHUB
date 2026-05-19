import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoleSelection from "./pages/common/RoleSelection";
import Home from "./pages/common/Home";
import Login from "./pages/common/Login";
import Signup from "./pages/common/Signup";
import HirerLogin from "./pages/hirer/HirerLogin";
import HirerSignup from "./pages/hirer/HirerSignup";
import Jobs from "./pages/common/Jobs";
import HirerDashboard from "./pages/hirer/HirerDashboard";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Profile from "./pages/homemaker/Profile";
import Dashboard from "./pages/homemaker/Dashboard";
import Passions from "./pages/common/Passions";
import Resources from "./pages/common/Resources";
import Community from "./pages/common/Community";
import Settings from "./pages/common/Settings";
import Homemakers from "./pages/hirer/Homemakers";
import Professionals from "./pages/trainer/Professionals";
import NotFound from "./pages/common/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import HirerJobs from "./pages/hirer/HirerJobs";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
  path="/hirer/jobs"
  element={<HirerJobs />}
/>
        <Route path="/select-role" element={<RoleSelection />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homemaker/login" element={<Login />} />
        <Route path="/homemaker/signup" element={<Signup />} />
        <Route
  path="/homemaker/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
        <Route path="/hirer/login" element={<HirerLogin />} />
        <Route path="/hirer/signup" element={<HirerSignup />} />
        <Route
  path="/hirer/dashboard"
  element={
    <ProtectedRoute>
      <HirerDashboard />
    </ProtectedRoute>
  }
/>
        <Route path="/trainer/login" element={<Login />} />
        <Route path="/trainer/signup" element={<Signup />} />
        <Route
  path="/trainer/dashboard"
  element={
    <ProtectedRoute>
      <Professionals />
    </ProtectedRoute>
  }
/>
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/browse" element={<Jobs />} />
        <Route path="/jobs/post" element={<Jobs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/passions" element={<Passions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:section" element={<Resources />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/:section" element={<Community />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/homemakers" element={<Homemakers />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
