import { useState, useEffect, useRef } from 'react';
import '../styles/MainScreen.css';

import ava from '../assets/MainPage/ava.jpg';
import ton from '../assets/MainPage/ton.svg';
import add_balance from '../assets/MainPage/add_balance.svg';
import banner from '../assets/MainPage/banner.png';
import cardBack1 from '../assets/MainPage/chest1/back.png';
import cardBack2 from '../assets/MainPage/chest1/back2.png';
import cardBack3 from '../assets/MainPage/chest1/back3.png';
import cardMain1 from '../assets/MainPage/chest1/main.png';
import cardMain2 from '../assets/MainPage/chest2/main.png'; 
import cardMain3 from '../assets/MainPage/chest3/main.png';
import foot from '../assets/MainPage/foot.png';
import footover from '../assets/MainPage/foot-on.svg';
import pvpicon from '../assets/MainPage/pvp-icon.svg';
import homeicon from '../assets/MainPage/home-icon.svg';
import tasksicon from '../assets/MainPage/tasks-icon.svg';

const TOTAL = 3;

const cardImages = [cardBack1, cardBack2, cardBack3];
const cardMainImages = [cardMain1, cardMain2, cardMain3];

export default function MainScreen() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(2);
  const cardWidthRef = useRef(240);
  const touchStartX = useRef(0);
  const cooldownRef = useRef(false);

  useEffect(() => {
    const updateCardWidth = () => {
      const card = document.querySelector('.card');
      if (card) {
        const style = window.getComputedStyle(card);
        const width = parseFloat(style.width);
        const gap = 15;
        cardWidthRef.current = width + gap;
      }
    };
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const handleAnimationEnd = () => {
    if (Math.abs(offset) >= cardWidthRef.current) {
      const direction = offset > 0 ? -1 : 1;
      setCurrentIndex((prev) => (prev + direction + TOTAL) % TOTAL);
      setOffset(0);
      setTimeout(() => setActiveCardIndex(2), 10);
    }
    setIsAnimating(false);
  };

  const startCooldown = () => {
    cooldownRef.current = true;
    setIsAnimating(true);
    setTimeout(() => {
      cooldownRef.current = false;
    }, 900); 
  };

  const goToNext = () => {
    if (cooldownRef.current) return;
    startCooldown();
    setOffset((prev) => prev - cardWidthRef.current);
    setActiveCardIndex(-1);
  };

  const goToPrev = () => {
    if (cooldownRef.current) return;
    startCooldown();
    setOffset((prev) => prev + cardWidthRef.current);
    setActiveCardIndex(-1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (cooldownRef.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 10) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
  };

  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (cooldownRef.current) return;
    const diff = touchStartX.current - e.clientX;
    if (Math.abs(diff) > 10) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
  };

  const getCards = () => {
    const cards = [];
    for (let i = -1; i <= 3; i++) {
      const id = (currentIndex + i + TOTAL) % TOTAL;
      cards.push(id);
    }
    return cards;
  };

  const cards = getCards();

  const getMainImageClass = (id) => {
    switch(id) {
      case 0: return 'card-main-image card-main-1';
      case 1: return 'card-main-image card-main-2';
      case 2: return 'card-main-image card-main-3';
      default: return 'card-main-image';
    }
  };

  return (
    <div className="main-screen">
      <header className="header-outer">
        <div className="header-inner">
          <div className="user-info">
            <img src={ava} alt="User" className="user-avatar" loading="lazy" />
            <span className="user-username">Username</span>

            <div className="balance-container">
              <img src={ton} alt="TON" className="balance-icon" />
              <span className="balance-amount">1337</span>
            </div>

            <div className="add_balance-button">
              <img src={add_balance} alt="add" className="add_balance-icon" />
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="banner-section">
          <img src={banner} alt="banner" className="banner-png" loading="lazy" />
        </div>

        <div
          className="cards-slider"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div
            className="cards-slider-inner"
            style={{
              transform: `translateX(${offset}px)`,
              transition: isAnimating ? 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' : 'none',
            }}
            onTransitionEnd={handleAnimationEnd}
          >
            {cards.map((id, index) => (
              <div 
                key={index}
                className={`card ${index === activeCardIndex ? 'card--active' : ''}`}
              >
                <img 
                  src={cardImages[id]}
                  alt={`Card ${id + 1}`} 
                  className="card-image"
                  loading="lazy"
                />
                {cardMainImages[id] && (
                  <img 
                    src={cardMainImages[id]}
                    alt="Main" 
                    className={getMainImageClass(id)}
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="main-footer">
        <div className="footer-blocks-container">
          <div className="footer-block-item">
            <div className="footer-block-wrapper">
              <img src={foot} alt="block" className="footer-block"/>
              <img src={pvpicon} alt="PVP" className="footer-block-icon"/>
              <img src={footover} alt="decoration" className="footer-block-overlay"/>
            </div>
            <span className="footer-label">PVP</span>
          </div>
          
          <div className="footer-block-item">
            <div className="footer-block-wrapper">
              <img src={foot} alt="block" className="footer-block"/>
              <img src={homeicon} alt="HOME" className="footer-block-icon"/>
              <img src={footover} alt="decoration" className="footer-block-overlay"/>
            </div>
            <span className="footer-label">MAIN</span>
          </div>
          
          <div className="footer-block-item">
            <div className="footer-block-wrapper">
              <img src={foot} alt="block" className="footer-block"/>
              <img src={tasksicon} alt="TASKS" className="footer-block-icon"/>
              <img src={footover} alt="decoration" className="footer-block-overlay"/>
            </div>
            <span className="footer-label">TASKS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}