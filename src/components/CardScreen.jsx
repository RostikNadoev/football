// components/CardScreen.jsx
import '../styles/CardScreen.css';

import ava from '../assets/MainPage/ava.jpg';
import ton from '../assets/MainPage/ton.svg';
import add_balance from '../assets/MainPage/add_balance.svg';
import foot from '../assets/MainPage/foot.png';
import footover from '../assets/MainPage/foot-on.svg';
import closeIcon from '../assets/MainPage/close.svg';

// components/CardScreen.jsx - обновляем функцию закрытия
export default function CardScreen({ 
  children, 
  onNavigate, 
  cardData,
  cardImage,
  cardMainImage,
  cardTonImage,
  currentCardIndex = 2 // Добавляем пропс для индекса карточки
}) {
  
  const handleClose = () => {
    // При закрытии передаем обратно текущий индекс карточки
    onNavigate('main', currentCardIndex);
  };

  return (
    <div className="card-screen">
      {/* Header (без изменений) */}
      <header className="header-outer">
        <div className="header-inner">
          <div className="user-info" onClick={() => onNavigate('profile')}>
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

      {/* Контент карточки */}
      <main className="card-content">
        {children}
      </main>

      {/* Футер с кнопкой CLOSE */}
      <footer className="card-footer">
        <div className="footer-close-container">
          <div className="footer-close-item" onClick={handleClose}>
            <div className="footer-close-indicator"></div>
            <div className="footer-close-wrapper">
              <img src={foot} alt="block" className="footer-close-block"/>
              <img src={closeIcon} alt="CLOSE" className="footer-close-icon"/>
              <img src={footover} alt="decoration" className="footer-close-overlay"/>
            </div>
            <span className="footer-close-label">CLOSE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}