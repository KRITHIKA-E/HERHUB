import React from 'react';

const Entrance = () => {
  const handleEnter = () => {
    window.location.href = "/login";
  };

  return (
    <div className="page-container">
      <div className="container entrance-container">
        <img
           className="entrance-logo"
           src="/logo.jpg"
           alt="HER HUB Logo"
        />
        <h1 className="app-name">HER HUB</h1>
        <p className="slogan">"She is not the fate, she is born to be great!!"</p>
        <div className="button-container">
          <button className="button" onClick={handleEnter}>Enter</button>
        </div>
      </div>
    </div>
  );
};

export default Entrance;
