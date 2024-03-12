import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick'; // Import Slider from react-slick
import rabo1 from '../src/assets/rabo1.png';
import rabo2 from '../src/assets/rabo2.png';
import rabo3 from '../src/assets/rabo3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './rabobank.css';

const HorizontalSlideshow = () => {
  const slickSettings = {
    dots: true, // Enable dots as indicators
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: null,
    prevArrow: null,
    style: {
      maxWidth: '1000px', // Adjust the maximum width of the carousel
      margin: '0 auto', // Center the carousel horizontally
    },
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
        <ul style={{ margin: '0', padding: '0', textAlign: 'center' }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div id="carousel-container" className='p-5 my-5'>
      <h2 className='text-center mb-5'>What our students created</h2>
      <Slider {...slickSettings}>
        <div>
          <img className="d-block w-100 rounded" src={rabo1} alt="First slide" />
        </div>
        <div>
          <img className="d-block w-100 rounded" src={rabo3} alt="Second slide" />
        </div>
        <div>
          <img className="d-block w-100 rounded" src={rabo2} alt="Third slide" />
        </div>
      </Slider>
    </div>
  );
};

export default HorizontalSlideshow;
