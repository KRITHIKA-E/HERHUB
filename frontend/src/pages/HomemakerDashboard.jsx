import React from 'react';
import NavBar from '../components/NavBar';

const HomemakerDashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <h2>Welcome Homemaker!</h2>
        <p>AI Job Suggestions and Learning Videos will appear here.</p>
        {/* Later connect AI + YouTube API */}
      </div>
    </div>
  );
};

export default HomemakerDashboard;
