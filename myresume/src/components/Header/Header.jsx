import React from 'react';
import './Header.css';
import profilePic from "../../assets/profile2.jpg"  

const Header = () => {
  return (
    <header className="header">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div>
        <h1>Aditya Raj</h1>
        <p>Software Developer</p>
      </div>
    </header>
  );
};

export default Header;
