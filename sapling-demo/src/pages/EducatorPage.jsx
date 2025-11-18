import { useState } from 'react';
import EducatorLayout from '../components/layout/EducatorLayout';
import UpdatesView from '../components/educator/UpdatesView';
import ObservationsView from '../components/educator/ObservationsView';
import FoodView from '../components/educator/FoodView';
import HealthView from '../components/educator/HealthView';
import RollCallView from '../components/educator/RollCallView';

function EducatorPage() {
  const [currentPage, setCurrentPage] = useState('updates');

  const renderContent = () => {
    switch (currentPage) {
      case 'updates':
        return <UpdatesView />;
      case 'observations':
        return <ObservationsView />;
      case 'food':
        return <FoodView />;
      case 'health':
        return <HealthView />;
      case 'rollcall':
        return <RollCallView />;
      default:
        return <UpdatesView />;
    }
  };

  return (
    <EducatorLayout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderContent()}
    </EducatorLayout>
  );
}

export default EducatorPage;