// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="overlay">
        <div className="centered-text">
        <h1 className='mb-4 fw-bold fs-42'>Untapp your talent and learn<br />for free ✨</h1><br />
          <p className='fs-28 mb-4'>
          Sign up today for next steps, no previous experience required.
          </p>
          <Link to="/register">
          <button type="submit" className="btn btn-success w-70 rounded-pill">
              Sign up for free
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
