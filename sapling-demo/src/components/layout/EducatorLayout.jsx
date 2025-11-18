import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './EducatorLayout.css';

function EducatorLayout({ children, currentPage, onNavigate }) {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'updates', label: 'Updates', icon: '📝' },
    { id: 'observations', label: 'Observations', icon: '👀' },
    { id: 'food', label: 'Food & Meals', icon: '🍽️' },
    { id: 'health', label: 'Health', icon: '💊' },
    { id: 'rollcall', label: 'Roll Call', icon: '✓' },
  ];

  return (
    <div className="educator-layout">
      <header className="educator-header">
        <div className="header-content">
          <div className="header-left">
            <button 
              className="sidebar-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
            <h1>🌱 Sapling - Educator Portal</h1>
          </div>
          <div className="header-right">
            <span className="user-name">Welcome, {user.name}</span>
            <button onClick={logout} className="btn-logout">
              Log Out
            </button>
          </div>
        </div>
      </header>

      <div className="educator-content">
        <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <nav className="sidebar-nav">
            {menuItems.map(item => (
              <button
                key={item.id}
                className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                {sidebarOpen && <span className="nav-label">{item.label}</span>}
              </button>
            ))}
          </nav>
        </aside>

        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default EducatorLayout;