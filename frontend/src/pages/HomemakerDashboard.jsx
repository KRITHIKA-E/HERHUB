import React from 'react';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import Button from '../components/Button';

const HomemakerDashboard = () => {
  const jobs = [
    { title: 'Online Baking Workshop', description: 'Learn and earn from baking at home', image: '/images/homemaker1.jpg' },
    { title: 'Handmade Crafts', description: 'Sell your crafts online to buyers worldwide', image: '/images/homemaker2.jpg' },
  ];

  return (
    <div>
      <NavBar />
      <div className="container">
        <h2>Welcome Homemaker!</h2>
        <p>Job suggestions for you:</p>

        <div className="dashboard-cards">
          {jobs.map((job, index) => (
            <Card key={index} title={job.title} description={job.description}>
              <img src={job.image} alt={job.title} style={{ width: '100%', borderRadius: '10px', marginTop: '10px' }} />
              <Button style={{ marginTop: '10px' }}>View Details</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomemakerDashboard;
