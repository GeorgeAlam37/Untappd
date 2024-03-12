import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import card1 from '../src/assets/card1.png';
import card2 from '../src/assets/card2.png';
import card3 from '../src/assets/card3.png';
import './index.css';

import { useInView } from 'react-intersection-observer';


const cardsData = [
  {
    id: 1,
    title: 'Invest time in you',
    imgSrc: card1,
    description:
      'Our curated training courses provide you with professional and technical training. These features enable you to actively work on your development as an IT professional.',
  },
  {
    id: 2,
    title: 'Craft your career',
    imgSrc: card2,
    description:
      'Untappd grants you the ability to organize your own time and study in a flexible environment. Matched with our professionals to gain a head start in your IT career.',
  },
  {
    id: 3,
    title: 'Match with a mentor',
    imgSrc: card3,
    description:
      'By putting you at the center of our matching process, we get to discover what moves you. Together we focus on what matters most to ensure you land in the best possible working environment.',
  },
];

/*animate cards reveal */
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



function Card() {
  return (
    <div className="container-fluid">
      <div className="row p-5 text-center">
        <div className="col">
          <h2 className="fw-bold">We help you with</h2>
        </div>
      </div>

      <div className="row p-4">
        {cardsData.map((card,index) => (
          <AnimatedCard key={card.id} card={card} index={index} className="col-lg-4 mb-4">
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
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}

export default Card;
