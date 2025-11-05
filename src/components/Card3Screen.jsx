import CardScreen from './CardScreen';
import cardBack3 from '../assets/MainPage/chest1/back3.png';
import cardMain3 from '../assets/MainPage/chest3/main.png';
import cardton3 from '../assets/MainPage/chest3/ton.png';
import star from '../assets/MainPage/star.svg';

export default function Card3Screen({ onNavigate, currentCardIndex = 2 }) {
  const handleCardClick = () => {
    console.log('Card 3 clicked!');
    // Здесь логика для первой кнопки
  };

  const handleSecondButtonClick = () => {
    console.log('Second button clicked!');
    // Здесь логика для второй кнопки
  };

  return (
    <CardScreen 
      onNavigate={onNavigate}
      currentCardIndex={currentCardIndex}
    >
      <div className="card-detail-container">
        <div className="card-detail card-detail-2">
          <img 
            src={cardBack3}
            alt="Card 3" 
            className="card-detail-image"
            loading="lazy"
          />
          <img 
            src={cardMain3}
            alt="Main" 
            className="card-detail-main-image"
            loading="lazy"
          />
          <img 
            src={cardton3}
            alt="TON" 
            className="card-detail-ton-image"
            loading="lazy"
          />
          
          
          <div className="card-detail-button card-1-button-right" onClick={handleCardClick}>
            <span className="card-detail-button-text">
              <span className="card-detail-button-number">5</span>
              <span className="card-detail-button-ton">TON</span>
            </span>
          </div>
          
        
          <div className="card-detail-button card-1-button-left" onClick={handleSecondButtonClick}>
            <span className="card-detail-button-text">
              <img src={star} alt='star' className='card-detail-star-icon' loading='lazy'/>
            </span>
          </div>
        </div>
      </div>
    </CardScreen>
  );
}