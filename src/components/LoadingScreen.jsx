import { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';
import logoImage from '../assets/LoadPage/logo.svg';

import l1 from '../assets/LoadPage/1.svg';
import l2 from '../assets/LoadPage/2.svg';
import l3 from '../assets/LoadPage/3.svg';
import l4 from '../assets/LoadPage/4.svg';
import l5 from '../assets/LoadPage/5.svg';
import l6 from '../assets/LoadPage/6.svg';

import l1a from '../assets/LoadPage/1a.svg';
import l2a from '../assets/LoadPage/2a.svg';
import l3a from '../assets/LoadPage/3a.svg';
import l4a from '../assets/LoadPage/4a.svg';
import l5a from '../assets/LoadPage/5a.svg';
import l6a from '../assets/LoadPage/6a.svg';

const inactiveLetters = [l1, l2, l3, l4, l5, l6];
const activeLetters = [l1a, l2a, l3a, l4a, l5a, l6a];

export default function LoadingScreen({ onLoaded }) {
  return (
    <div className="loading-screen">
      <img src={logoImage} alt="Logo" className="loading-logo" />
      <div className="letters-container">
        <div className="loading-word">
          {inactiveLetters.map((_, index) => (
            <AnimatedLetter
              key={index}
              index={index}
              inactiveSrc={inactiveLetters[index]}
              activeSrc={activeLetters[index]}
              onLoaded={onLoaded}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AnimatedLetter({ index, inactiveSrc, activeSrc, onLoaded }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const ROUNDS = 3;
    const LETTERS = 6;
    const DELAY = 200; 

    const timeouts = [];

    for (let round = 0; round < ROUNDS; round++) {
      const resetTime = round * LETTERS * DELAY;
      timeouts.push(
        setTimeout(() => {
          setOpacity(0);
        }, resetTime)
      );

      const activateTime = resetTime + index * DELAY;
      timeouts.push(
        setTimeout(() => {
          setOpacity(1);
        }, activateTime)
      );
    }

    if (index === LETTERS - 1) {
      const totalTime = ROUNDS * LETTERS * DELAY;
      timeouts.push(
        setTimeout(() => {
          onLoaded();
        }, totalTime)
      );
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [index, onLoaded]);

  return (
    <div className="letter-wrapper">
      <img src={inactiveSrc} alt="" className="loading-letter loading-letter--base" />
      <img
        src={activeSrc}
        alt=""
        className="loading-letter loading-letter--active"
        style={{
          opacity,
          transition: 'opacity 300ms ease-in-out',
        }}
      />
    </div>
  );
}