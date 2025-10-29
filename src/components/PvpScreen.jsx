import MainLayout from './MainLayout';

export default function PvpScreen({ onNavigate }) {
  return (
    <MainLayout onNavigate={onNavigate} currentScreen="pvp">
      <div className="content-section">
        <h1>Страница PVP</h1>
      </div>
    </MainLayout>
  );
}