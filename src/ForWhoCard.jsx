import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import testimony1 from '../src/assets/testimony1.png';
import testimony2 from '../src/assets/testimony2.png';
import testimony3 from '../src/assets/testimony3.png';
import './index.css';
import { useInView } from 'react-intersection-observer';

const cardsData = [
  {
    id: 1,
    title: 'Bilal',
    imgSrc: testimony1,
    description:
      '“I am so grateful for this opportunity; currently, I work as a full-time app developer. My dream came true.',
  },
  {
    id: 2,
    title: 'Eva',
    imgSrc: testimony2,
    description:
      '“When I got stuck I could always ask my mentor for help. His support really made the difference.',
  },
  {
    id: 3,
    title: 'Yin',
    imgSrc: testimony3,
    description:
      '“After this course I was able to start a trainee-ship and now I have a full time job as an app developer.',
  },
];

function AnimatedCard({ card, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const animationDelay = inView ? index * 0.3 : 0; // Adjust the delay as needed

  const cardStyles = {
    animationDelay: inView ? `${animationDelay}s` : '0s',
  };

  return (
    <div
      ref={ref}
      className={`col-lg-4 mb-4 animated-card ${inView ? 'reveal' : ''}`}
      style={cardStyles}
    >
      <div className="card border-0 overflow-hidden h-100">
        <img
          src={card.imgSrc}
          className="card-img-top img-fluid"
          alt={card.title}
          style={{ objectFit: 'cover', height: '200px' }}
        />
        <div className="card-body text-center" style={{ background: '#66d978' }}>
          <h4 className="card-title fw-bold mb-3">{card.title}</h4>
          <p className="card-text fs-16">{card.description}</p>
        </div>
      </div>
    </div>
  );
}

function ForWhoCard() {
  return (
    <div className="container-fluid p-5">
      <div className="row p-5 text-center">
        <div className="col">
          <h2 className="fw-bold">We help you with</h2>
        </div>
      </div>

      <div className="row p-4">
        {cardsData.map((card, index) => (
          <AnimatedCard key={card.id} card={card} index={index} className="col-lg-4 mb-4" />
        ))}
      </div>
    </div>
  );
}

export default ForWhoCard;
