import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../src/assets/logo.svg";
import './index.css';

const usePopAnimation = (isHovered) => {
  return useSpring({
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    config: config.wobbly,
  });
};

const Navbar = () => {
  const [isHomeHovered, setHomeHovered] = useState(false);
  const [isForWhoHovered, setForWhoHovered] = useState(false);
  const [isRegisterHovered, setRegisterHovered] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container m-4">
        <Link to="/home">
          <img className='cursor-pointer ml-md-5' src={logo} alt='logo' />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <animated.li
              style={usePopAnimation(isHomeHovered)}
              onMouseEnter={() => setHomeHovered(true)}
              onMouseLeave={() => setHomeHovered(false)}
              className="nav-item active"
            >
              <Link
                to="/home"
                style={{ fontSize: '17px', fontWeight: 'bold' }}
                className="nav-link"
              >
                Home<span className="sr-only">(current)</span>
              </Link>
            </animated.li>
            <animated.li
              style={usePopAnimation(isForWhoHovered)}
              onMouseEnter={() => setForWhoHovered(true)}
              onMouseLeave={() => setForWhoHovered(false)}
              className="nav-item active"
            >
              <Link
                to="/forwho"
                style={{ fontSize: '17px', fontWeight: 'bold' }}
                className="nav-link forwho"
              >
                Untapp<span className="sr-only">(current)</span>
              </Link>
            </animated.li>
            <animated.li
              style={usePopAnimation(isRegisterHovered)}
              onMouseEnter={() => setRegisterHovered(true)}
              onMouseLeave={() => setRegisterHovered(false)}
              className="nav-item"
            >
              <Link
                to="/register"
                className="btn rounded-pill px-3 ml-4 register"
                style={{ backgroundColor: '#66d978', fontWeight: 'bold' }}
              >
                Register here
              </Link>
            </animated.li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
