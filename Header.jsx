import React from 'react';
import './Header.css'; // Import CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-bar">
        <div className="left-section">
          <p>DEV@Deakin</p>
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
        <div className="right-section">
          <button className="post-button">Post</button>
          <button className="login-button">Login</button>
        </div>
      </div>
      <img src="https://youthincmag.com/wp-content/uploads/2018/09/Travel-And-Tourism-Sector.jpg" alt="Header" className="image" />
    </header>
  );
};

export default Header;
