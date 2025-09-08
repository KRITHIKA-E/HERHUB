import Entrance from './pages/Entrance';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Entrance />} /> {/* Entrance page */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homemaker" element={<HomemakerDashboard />} />
        <Route path="/professional" element={<ProfessionalDashboard />} />
      </Routes>
    </Router>
  );
}
