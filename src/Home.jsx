import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Rabobank from './Rabobank'
import Footer from './Footer'
import home1 from '../src/assets/home1.png'
import forwho2 from '../src/assets/forwho2.png'
import PartnerSlider from './PartnerSlider'
import ForWhoCard from './ForWhoCard'
import HowItWorks from './how/HowItWorks';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


function Home() {
  const goUp = () => {
    window.scrollTo(0,0)
  };

  return (
    <>
    <Navbar />

    <div className="container-fluid">
  <div className="row">
    {/* Right side with header and paragraph */}
    <div className="col-md-5 d-flex align-items-center justify-content-center text-center text-md-start my-4">
      <div>
        <h1 className="fw-bold fs-42 mb-4">Untapp your<br />talent and learn<br />for free ✨</h1>
        <p className="mb-4 fs-28">Sign up today for next steps, no previous<br />experience required.</p>
        <Link to="/register" onClick={goUp}>
          <button type="submit" className="btn btn-success px-4 rounded-pill mb-3">
            Sign up for free
          </button>
        </Link>
      </div>
    </div>

    {/* Left side with image */}
    <div className="col-md-7">
      <img
        src={home1}
        alt="home1"
        className="img-fluid"
        
      />
    </div>
  </div>
</div>

    
   
    

    <Rabobank />
    <ForWhoCard />
    <HowItWorks />

      {/* kick start div */}
      <div className="d-flex justify-content-center align-items-center kick-start py-md-5 rounded">
  <div className="container text-center">
    <div className="row">
      {/* Left side with text */}
      <div className="col-md-6">
        <h2 className="text-black fw-bold mb-4">Kick start your Career in Tech?</h2>
        <p className="text-black mb-4 text-md-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Link to="/register" onClick={goUp}>
          <button className="btn btn-outline-dark btn-md mt-2 fw-bold px-4 rounded-pill">Sign up for our Discovery Day 🎉</button>
        </Link>
        <p className="text-black mt-1 free">Don't worry, it's free.</p>
      </div>

      {/* Right side (empty) */}
      <div className="col-md-6">
        
      </div>
    </div>
  </div>
</div>


    {/* end for who div */}
    <div className="container-fluid">
        <div className="row py-5">
          {/* Left Side (Image) */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src={forwho2} alt="forwho2" className="img-fluid" />
          </div>

          {/* Right Side (Text Information) */}
          <div className="col-md-6 text-center text-md-start p-5">
            <h1 className="fw-bold fs-42">Did you know that...</h1>
            <h3 className='mb-4 fw-bold fs-38 we' style={{color: 'lightgreen'}}>we have a large community</h3>
            <p className="mt-5 d-flex">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    {/* end kick start div */}
    
    <PartnerSlider />
    <Footer />
    </>
  )
}

export default Home