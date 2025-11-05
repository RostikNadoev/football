// components/Card1Screen.jsx
import CardScreen from './CardScreen';
import cardBack1 from '../assets/MainPage/chest1/back.png';
import cardMain1 from '../assets/MainPage/chest1/main.png';
import cardton1 from '../assets/MainPage/chest1/ton.png';
import star from '../assets/MainPage/star.svg';

export default function Card1Screen({ onNavigate, currentCardIndex = 0 }) {
  const handleCardClick = () => {
    console.log('Card 1 clicked!');
    // Здесь логика для первой кнопки
  };

  const handleSecondButtonClick = () => {
    console.log('Second button clicked!');
    // Здесь логика для второй кнопки
  };

  return (
    <CardScreen 
      onNavigate={onNavigate}
      cardData={{ id: 0, price: '1 TON' }}
      cardImage={cardBack1}
      cardMainImage={cardMain1}
      cardTonImage={cardton1}
      currentCardIndex={currentCardIndex}
    >
      <div className="card-detail-container card-1-custom">
        <div className="card-detail card-detail-0 card-1-enhanced">
          <img 
            src={cardBack1}
            alt="Card 1" 
            className="card-detail-image card-1-background"
            loading="lazy"
          />
          <img 
            src={cardMain1}
            alt="Main" 
            className="card-detail-main-image card-1-main"
            loading="lazy"
          />
          <img 
            src={cardton1}
            alt="TON" 
            className="card-detail-ton-image card-1-ton"
            loading="lazy"
          />
          
          <div className="card-detail-button card-1-button card-1-button-right" onClick={handleCardClick}>
            <span className="card-detail-button-text">
              <span className="card-detail-button-number card-1-number">1</span>
              <span className="card-detail-button-ton card-1-ton-text">TON</span>
            </span>
          </div>
          
          <div className="card-detail-button card-1-button card-1-button-left" onClick={handleSecondButtonClick}>
            <span className="card-detail-button-text">
              <img src={star} alt='star' className='card-detail-star-icon' loading='lazy'/>
            </span>
          </div>
        </div>
      </div>
    </CardScreen>
  );
}