import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from '../assets/images/logo.png';
import searchIcon from '../assets/images/searchIcon.png';
import homeIcon from '../assets/images/homeIcon.png';

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search for:", searchQuery);
    alert("Search for: " + searchQuery);
    // Perform the search logic here, such as making an API call or filtering data
    // You can display the search results as needed
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li className="menuItem">
              <span><a href="#home" className="megaLink">
                <img src={homeIcon} alt="home" style={{ width: '27px', height: '30px' }} />
              </a></span>
            </li>
            <li className="menuItem">
              <span><a href="#academics" className="megaLink">Academics</a></span>
              <div className="megaContent">
                <div className="popOver">
                  <p><a href="#nursery">Nursery</a></p>
                </div>
                <div className="popOver">
                  <p><a href="#primary">Primary</a></p>
                </div>
                <div className="popOver">
                  <p><a href="#secondary">Secondary</a></p>
                </div>
                <div className="popOver">
                  <p><a href="#tertiary">Tertiary</a></p>
                </div>
              </div>
            </li>
            <li className="menuItem">
              <span><a href="#admissions" className="megaLink">Admissions</a></span>
              <div className="megaContent">
                <div className="popOver">
                  <p><a href="#admissions-process">Admissions Process</a></p>
                </div>
                <div className="popOver">
                  <p><a href="#admissions-portal">Admissions Portal</a></p>
                </div>
              </div>
            </li>
            <li className="menuItem">
              <span><a href="#collaborate" className="megaLink">Collaborate</a></span>
              <div className="megaContent">
                <div className="popOver">
                  <p><a href="#policy">Policy</a></p>
                </div>
                <div className="popOver">
                  <p><a href="#give">Give to Learning Vista</a></p>
                </div>
              </div>
            </li>
            <li className="menuItem">
              <span><a href="#connect" className="megaLink">Connect</a></span>
              <div className="megaContent">
                <div className="popOver">
                  <p><a href="#jobs">Jobs</a></p>
                </div>
                <div className="popOver">
                  <p><a href="#alumni">Alumni</a></p>
                </div>
                <div className="popOver">
                  <p><a href="#teachers">Teachers and Career Advisers</a></p>
                </div>
                <div className="popOver">
                  <p><a href="#social-media">Social Media</a></p>
                </div>
                <div className="popOver">
                  <p><a href="#contact">Contact Us</a></p>
                </div>
              </div>
            </li>
            <li className="menuItem">
              <span><a href="#about" className="megaLink">About</a></span>
              <div className="megaContent">
                <div className="popOver">
                  <p><a href="#about">About</a></p>
                </div>
                <div className="popOver">
                  <p><a href="#blog">Blog</a></p>
                </div>
                <div className="popOver">
                  <p><a href="#faqs">FAQs</a></p>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        <div className="search">
          <button onClick={handleSearchClick}>
            <img src={searchIcon} alt="Search" style={{ width: '16px', height: 'i6px', marginRight: '5px' }} />
            <span className="search-text">Search</span>
          </button>
        </div>
      </header>
      {showSearch && (
        <div className="search-input">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      )}
    </>
  );
}

export default Header;
