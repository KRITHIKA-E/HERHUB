import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../index.css";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/profile/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="profile-page">
      <div className="profile-card glass-card">
        <h1>
          {user.name}{" "}
          {user.isVerified && <span className="verified-badge">✔️</span>}
        </h1>
        <p><strong>Passion:</strong> {user.passion}</p>
        <p><strong>Skills:</strong> {user.skills || "Not updated yet"}</p>
        <p><strong>Bio:</strong> {user.bio || "No bio yet"}</p>
      </div>
    </div>
  );
};

export default Profile;
