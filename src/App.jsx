import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import MainScreen from './components/MainScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    // Инициализация Telegram WebApp для полного экрана
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      
      // 🔔 Сообщаем Telegram что приложение готово
      webApp.ready();
      // ⚡ ВКЛЮЧАЕМ ПОЛНЫЙ ЭКРАН
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

  return (
    <div>
      {isLoading ? (
        <LoadingScreen 
          onLoaded={handleLoadingComplete} 
          onAssetsLoaded={handleAssetsLoaded}
          assetsLoaded={assetsLoaded}
        />
      ) : (
        <MainScreen />
      )}
    </div>
  );
}