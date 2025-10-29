import MainLayout from './MainLayout';

export default function TasksScreen({ onNavigate }) {
  return (
    <MainLayout onNavigate={onNavigate} currentScreen="tasks">
      <div className="content-section">
        <h1>Страница Tasks</h1>
      </div>
    </MainLayout>
  );
}