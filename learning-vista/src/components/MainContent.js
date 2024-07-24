import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainContent.css';
import homepageImage from '../assets/images/homepageImage.png';

function MainContent() {
  return (
    <main className="main-content">
      <div className="position-relative">
        <img src={homepageImage} alt="Homepage" className="img-fluid w-100" />
        <div className="overlay-text position-absolute top-50 start-0 translate-middle-y text-white">
          <h1>Welcome to Learning Vista School</h1>
          <p>Exploring Horizons, Embracing Lifelong Learning</p>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
