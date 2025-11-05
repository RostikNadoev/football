import CardScreen from './CardScreen';
import cardBack2 from '../assets/MainPage/chest1/back2.png';
import cardMain2 from '../assets/MainPage/chest2/main.png';
import cardton2 from '../assets/MainPage/chest2/ton.png';
import star from '../assets/MainPage/star.svg';

export default function Card2Screen({ onNavigate, currentCardIndex = 1 }) {
  const handleCardClick = () => {
    console.log('Card 2 clicked!');
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
        <div className="card-detail card-detail-1">
          <img 
            src={cardBack2}
            alt="Card 2" 
            className="card-detail-image"
            loading="lazy"
          />
          <img 
            src={cardMain2}
            alt="Main" 
            className="card-detail-main-image"
            loading="lazy"
          />
          <img 
            src={cardton2}
            alt="TON" 
            className="card-detail-ton-image"
            loading="lazy"
          />
          
          {/* Правая кнопка */}
          <div className="card-detail-button card-1-button-right" onClick={handleCardClick}>
            <span className="card-detail-button-text">
              <span className="card-detail-button-number">2</span>
              <span className="card-detail-button-ton">TON</span>
            </span>
          </div>
          
          {/* Левая кнопка со звездой */}
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