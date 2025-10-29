import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import MainScreen from './components/MainScreen';
import PvpScreen from './components/PvpScreen';
import TasksScreen from './components/TasksScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('main');

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

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'pvp':
        return <PvpScreen onNavigate={navigateTo} />;
      case 'tasks':
        return <TasksScreen onNavigate={navigateTo} />;
      case 'main':
      default:
        return <MainScreen onNavigate={navigateTo} />;
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