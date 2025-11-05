// App.js - обновленная версия
import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import MainScreen from './components/MainScreen';
import PvpScreen from './components/PvpScreen';
import TasksScreen from './components/TasksScreen';
import Card1Screen from './components/Card1Screen';
import Card2Screen from './components/Card2Screen';
import Card3Screen from './components/Card3Screen';
import ProfileScreen from './components/ProfileScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('main');
  const [currentCardIndex, setCurrentCardIndex] = useState(2); // Состояние для активной карточки

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      webApp.ready();
      webApp.expand();
      
      console.log('✅ Telegram WebApp запущен в полноэкранном режиме');
    }
  }, []);

  const handleAssetsLoaded = () => {
    setAssetsLoaded(true);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const navigateTo = (screen, cardIndex = 2) => {
    setCurrentScreen(screen);
    setCurrentCardIndex(cardIndex); // Сохраняем индекс карточки
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'profile':
        return <ProfileScreen onNavigate={navigateTo}/>;
      case 'pvp':
        return <PvpScreen onNavigate={navigateTo} />;
      case 'tasks':
        return <TasksScreen onNavigate={navigateTo} />;
      case 'card1':
        return <Card1Screen onNavigate={navigateTo} currentCardIndex={currentCardIndex} />;
      case 'card2':
        return <Card2Screen onNavigate={navigateTo} currentCardIndex={currentCardIndex} />;
      case 'card3':
        return <Card3Screen onNavigate={navigateTo} currentCardIndex={currentCardIndex} />;
      case 'main':
      default:
        return <MainScreen onNavigate={navigateTo} initialCardIndex={currentCardIndex} />;
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoadingScreen 
          onLoaded={handleLoadingComplete} 
          onAssetsLoaded={handleAssetsLoaded}
          assetsLoaded={assetsLoaded}
        />
      ) : (
        renderScreen()
      )}
    </div>
  );
}