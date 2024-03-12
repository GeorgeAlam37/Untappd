import React from 'react';
import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import how1 from '../how/how1.png';
import how2 from '../how/how2.png';
import how3 from '../how/how3.png';
import how4 from '../how/how4.png';
import how5 from '../how/how5.png';
import '../how/howitworks.css';
import num1 from '../assets/num1.svg';
import num2 from '../assets/num2.svg';
import num3 from '../assets/num3.svg';
import num4 from '../assets/num4.svg';
import { useInView } from 'react-intersection-observer';

function CustomContainer({ children }) {
  return (
    <div className="custom-container">
      {children}
    </div>
  );
}

function AnimatedRow({ children, index, handleInView }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      handleInView(index);
    }
  }, [inView, handleInView, index]);

  const isEven = index % 2 === 0;
  const translateXValue = isEven
    ? inView
      ? 'translateX(0)'
      : 'translateX(100%)'
    : inView
    ? 'translateX(0)'
    : 'translateX(-100%)';

  const rowStyles = {
    opacity: inView ? 1 : 0,
    transform: translateXValue,
    filter: inView ? 'blur(0)' : 'blur(4)',
    transition: 'all 0.8s',
  };

  return (
    <div ref={ref} className="custom-row" style={rowStyles}>
      {children}
    </div>
  );
}

function HowItWorks() {
  const handleInView = (index) => {
    // Handle the inView logic here if needed
  };

  return (
    <CustomContainer>
      <h1 className="text-center mb-5">How it works</h1>

      <AnimatedRow index={0} handleInView={handleInView}>
        <Row className="align-items-center my-5">
          {/* Left Side: SVG Image */}
          <Col md={6}>
            <div className="text-center text-md-end">
              <img
                src={how1}
                alt="how1"
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </Col>

          {/* Right Side: Text */}
          <Col md={6}>
            <div className="text-center text-md-start">
              <img src={num1} alt="num1" className="mr-4 my-4" />
              <h2 className="mb-4">Register for our<br />Discovery Day</h2>
              <p>
                Our curated training courses provide you with<br />professional and technical training.<br />These features enable you to actively work on your<br />development as an IT professional.
              </p>
            </div>
          </Col>
        </Row>
      </AnimatedRow>

      <AnimatedRow index={1} handleInView={handleInView}>
        <Row className="align-items-center my-5 custom-row">
          {/* Right Side: Text */}
          <Col md={6}>
            <div className="text-center text-md-end">
              <img src={num2} alt="num2" className="mr-4 my-4" />
              <h2 className="mb-4">Converse with one of<br />our coaches<span style={{ color: '#368342', fontSize: '23px' }}> so we can<br />make a mentor match</span></h2>
              <p>
                By putting you at the center of our matching
                process,<br />we get to discover what moves
                you.<br />Together we focus on what matters
                most to ensure<br />you land in the best possible<br />
                working environment.
              </p>
            </div>
          </Col>

          {/* Left Side: SVG Image */}
          <Col md={6}>
            <div className="text-center text-md-start">
              <img
                src={how2}
                alt="how2"
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </Col>
        </Row>
      </AnimatedRow>

      <AnimatedRow index={2} handleInView={handleInView}>
        <Row className="align-items-center my-5 custom-row">
          {/* Right Side: Text */}
          <Col md={6}>
            <div className="text-center text-md-end">
              <img
                src={how3}
                alt="how3"
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </Col>

          {/* Left Side: SVG Image */}
          <Col md={6}>
            <div className="text-center text-md-start">
              <img src={num3} alt="num3" className="mr-4 my-4" />
              <h2 className="mb-4">Start our course for free</h2>
              <p>
                Work from home on your laptop. Ask questions to your<br />mentor online. Lorem ipsum dolor sit amet<br />
                consectetur adipiscing elit.
              </p>
            </div>
          </Col>
        </Row>
      </AnimatedRow>

      <AnimatedRow index={3} handleInView={handleInView}>
        <Row className="align-items-center my-5 custom-row">
          {/* Right Side: Text */}
          <Col md={6}>
            <div className="text-center text-md-end">
              <img src={num4} alt="num4" className="mr-4 my-4" />
              <h2 className="mb-4">Make your own website</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam.
              </p>
            </div>
          </Col>

          {/* Left Side: SVG Image */}
          <Col md={6}>
            <div className="text-center text-md-start">
              <img
                src={how4}
                alt="how4"
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </Col>
        </Row>
      </AnimatedRow>

      <AnimatedRow index={4} handleInView={handleInView}>
        <Row className="align-items-center my-5 custom-row">
          {/* Right Side: Text */}
          <Col md={6}>
            <div className="text-center text-md-end">
              <img
                src={how5}
                alt="how5"
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </Col>

          {/* Left Side: SVG Image */}
          <Col md={6}>
            <div className="text-center text-md-start">
              <h2 className="mb-4">Graduate 🎉</h2>
              <p>
                Work from home on your laptop.
              </p>
            </div>
          </Col>
        </Row>
      </AnimatedRow>
    </CustomContainer>
  );
}

export default HowItWorks;
