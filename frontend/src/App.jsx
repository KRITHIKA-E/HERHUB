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
import CommunityFeed from "./pages/common/CommunityFeed";
import Settings from "./pages/common/Settings";
import Homemakers from "./pages/hirer/Homemakers";
import Professionals from "./pages/trainer/Professionals";
import NotFound from "./pages/common/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import HirerJobs from "./pages/hirer/HirerJobs";
import Applications from "./pages/hirer/Applications";
import CreateCourse from "./pages/trainer/CreateCourse";
import MyCourses from "./pages/homemaker/MyCourses";
import TrainerCourses from "./pages/trainer/TrainerCourses";
import Analytics from "./pages/trainer/Analytics";
import CreateSession from "./pages/trainer/CreateSession";
import LiveSessions from "./pages/common/LiveSessions";
import MentorRequest from "./pages/common/MentorRequest";
import MentorRequests from "./pages/trainer/MentorRequests";
import AppliedJobs from "./pages/homemaker/AppliedJobs";
import Certificates from "./pages/homemaker/Certificates";
import Badges from "./pages/homemaker/Badges";
import TrainerSessions from "./pages/trainer/TrainerSessions";
import HomemakerProfiles from "./pages/hirer/HomemakerProfiles";
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
        <Route
  path="/my-courses"
  element={
    <ProtectedRoute>
      <MyCourses />
    </ProtectedRoute>
  }
/>
        <Route path="/passions" element={<Passions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:section" element={<Resources />} />
       <Route
  path="/community-feed"
  element={
    <ProtectedRoute>
      <CommunityFeed />
    </ProtectedRoute>
  }
/>
        <Route path="/settings" element={<Settings />} />
        <Route path="/homemakers" element={<Homemakers />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/trainer/create-course" element={<CreateCourse />} />
        <Route path="*" element={<NotFound />} />
        <Route
  path="/hirer/applications"
  element={
    <ProtectedRoute>
      <Applications />
    </ProtectedRoute>
  }
/>
<Route
  path="/trainer/courses"
  element={
    <ProtectedRoute>
      <TrainerCourses />
    </ProtectedRoute>
  }
/>
<Route
  path="/trainer/analytics"
  element={
    <ProtectedRoute>
      <Analytics />
    </ProtectedRoute>
  }
/>
<Route
  path="/trainer/create-session"
  element={
    <ProtectedRoute>
      <CreateSession />
    </ProtectedRoute>
  }
/>
<Route
  path="/live-sessions"
  element={
    <ProtectedRoute>
      <LiveSessions />
    </ProtectedRoute>
  }
/>
<Route
  path="/mentor-request"
  element={
    <ProtectedRoute>
      <MentorRequest />
    </ProtectedRoute>
  }
/>
<Route
  path="/trainer/mentor-requests"
  element={
    <ProtectedRoute>
      <MentorRequests />
    </ProtectedRoute>
  }
/>
<Route
  path="/my-applications"
  element={
    <ProtectedRoute>
      <AppliedJobs />
    </ProtectedRoute>
  }
/>
<Route
  path="/certificates"
  element={
    <ProtectedRoute>
      <Certificates />
    </ProtectedRoute>
  }
/>
<Route
  path="/badges"
  element={
    <ProtectedRoute>
      <Badges />
    </ProtectedRoute>
  }
/>
<Route
  path="/trainer/sessions"
  element={
    <ProtectedRoute>
      <TrainerSessions />
    </ProtectedRoute>
  }
/>
<Route
  path="/hirer/homemaker-profiles"
  element={
    <ProtectedRoute>
      <HomemakerProfiles />
    </ProtectedRoute>
  }
/>
      </Routes>
    </Router>
    
  );
};

export default App;
