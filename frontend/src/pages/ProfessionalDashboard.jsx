import React from 'react';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import Button from '../components/Button';
import job1 from '../assets/job1.jpg';
import job2 from '../assets/job2.jpg';

const ProfessionalDashboard = () => {
  const homemakers = [
    { name: 'Anita Sharma', skill: 'Baking & Cooking', image: job1 },
    { name: 'Priya Verma', skill: 'Handmade Crafts', image: job2 },
  ];

  return (
    <div>
      <NavBar />
      <div className="container">
        <h2>Welcome Professional!</h2>
        <p>Browse verified homemakers and post jobs:</p>

        <div className="dashboard-cards">
          {homemakers.map((hm, index) => (
            <Card key={index} title={hm.name} description={hm.skill}>
              <img src={hm.image} alt={hm.name} style={{ width: '100%', borderRadius: '10px', marginTop: '10px' }} />
              <Button style={{ marginTop: '10px' }}>Hire</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
