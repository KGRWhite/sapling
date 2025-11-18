import { AuthProvider, useAuth } from './context/AuthContext';
import LoginForm from './components/auth/LoginForm';
import DashboardPage from './pages/DashboardPage';
import EducatorPage from './pages/EducatorPage';

function AppContent() {
  const { user } = useAuth();
  if (!user) return <LoginForm />;
  
  if (user.role === 'educator') return <EducatorPage />;
  if (user.role === 'parent') return <DashboardPage />;
  
  return <LoginForm />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;