import { useEffect } from 'react';
import '../styles/LoadingScreen.css';
import { useState } from 'react';

import logoImage from '../assets/LoadPage/logo.png';
import l1 from '../assets/LoadPage/b.png';
import l2 from '../assets/LoadPage/o.png';
import l3 from '../assets/LoadPage/u.png';
import l4 from '../assets/LoadPage/n.png';
import l5 from '../assets/LoadPage/c.png';
import l6 from '../assets/LoadPage/e.png';
import l1a from '../assets/LoadPage/1a.png';
import l2a from '../assets/LoadPage/2a.png';
import l3a from '../assets/LoadPage/3a.png';
import l4a from '../assets/LoadPage/4a.png';
import l5a from '../assets/LoadPage/5a.png';
import l6a from '../assets/LoadPage/6a.png';

const inactiveLetters = [l1, l2, l3, l4, l5, l6];
const activeLetters = [l1a, l2a, l3a, l4a, l5a, l6a];

export default function LoadingScreen({ onLoaded }) {
  // НЕ ждём загрузки — показываем сразу
  useEffect(() => {
    // Запускаем анимацию и вызов onLoaded как раньше
    const ROUNDS = 3;
    const LETTERS = 6;
    const DELAY = 200;
    const totalTime = ROUNDS * LETTERS * DELAY;

    const timer = setTimeout(() => {
      onLoaded();
    }, totalTime);

    return () => clearTimeout(timer);
  }, [onLoaded]);

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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AnimatedLetter({ index, inactiveSrc, activeSrc }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const ROUNDS = 3;
    const LETTERS = 6;
    const DELAY = 200;
    const timeouts = [];

    for (let round = 0; round < ROUNDS; round++) {
      timeouts.push(setTimeout(() => setOpacity(0), round * LETTERS * DELAY));
      timeouts.push(setTimeout(() => setOpacity(1), round * LETTERS * DELAY + index * DELAY));
    }

    return () => timeouts.forEach(clearTimeout);
  }, [index]);

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