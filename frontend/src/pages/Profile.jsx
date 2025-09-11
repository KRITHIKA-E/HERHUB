import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/auth/profile/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!user) return <p className="loading-text">Loading profile...</p>;

  return (
    <div className="profile-container">
      <h2 className="profile-title">👩‍🦱 {user.name}'s Profile</h2>
      <div className="profile-card">
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Passion:</strong> {user.passion}</p>
        <p><strong>Education:</strong> {user.education}</p>
      </div>
    </div>
  );
};

export default Profile;
