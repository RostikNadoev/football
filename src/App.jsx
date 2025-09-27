import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import MainScreen from './components/MainScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? <LoadingScreen onLoaded={handleLoaded} /> : <MainScreen />}
    </div>
  );
}
