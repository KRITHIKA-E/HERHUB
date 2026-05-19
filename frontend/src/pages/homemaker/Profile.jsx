import React, { useState, useEffect } from "react";
import "../../index.css";
import api from "../../api/client";
const Profile = () => {

  const [profile, setProfile] = useState({
    name: "",
    city: "",
    interest: "",
    language: "",
  });

  // LOAD USER DATA

  useEffect(() => {

  const fetchProfile = async () => {

    try {

      const storedUser = JSON.parse(
        localStorage.getItem("user")
      );

      if (!storedUser?.id) {
        return;
      }

      const res = await api.get(
        `/profile/${storedUser.id}`
      );

      setProfile(res.data);

    } catch (err) {

      console.error(
        "Profile fetch failed:",
        err
      );
    }
  };

  fetchProfile();

}, []);

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // SAVE PROFILE

  const handleSave = async () => {

  try {

    const storedUser = JSON.parse(
      localStorage.getItem("user")
    );

    const res = await api.put(
      `/profile/${storedUser.id}`,
      profile
    );

    localStorage.setItem(
      "user",
      JSON.stringify(res.data)
    );

    alert(
      "Profile Updated Successfully 🌸"
    );

  } catch (err) {

    console.error(
      "Profile update failed:",
      err
    );

    alert(
      err.message ||
      "Update failed"
    );
  }
};

  return (

    <div className="profile-page">

      <div className="profile-card">

        <h1>Your Profile 🌸</h1>

        <p>
          Update your details and personalize
          your HER HUB experience.
        </p>

        <div className="profile-form">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={profile.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City / Village"
            value={profile.city}
            onChange={handleChange}
          />

          <select
            name="interest"
            value={profile.interest}
            onChange={handleChange}
          >

            <option value="">
              Select Interest
            </option>

            <option value="Tailoring">
              Tailoring
            </option>

            <option value="Baking">
              Baking
            </option>

            <option value="Beauty Care">
              Beauty Care
            </option>

            <option value="Teaching">
              Teaching
            </option>

          </select>

          <select
            name="language"
            value={profile.language}
            onChange={handleChange}
          >

            <option value="">
              Preferred Language
            </option>

            <option value="Tamil">
              Tamil
            </option>

            <option value="Hindi">
              Hindi
            </option>

            <option value="English">
              English
            </option>

          </select>

          <button onClick={handleSave}>
            Save Profile
          </button>

        </div>

      </div>

    </div>
  );
};

export default Profile;