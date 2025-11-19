import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './EducatorLayout.css';

function EducatorLayout({ children, activeView, onNavigate }) {
  const { logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = (view) => {
    onNavigate(view);
    setSidebarOpen(false); // Close sidebar on mobile after navigation
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="educator-layout">
      {/* Mobile Header - Fixed at top */}
      <div className="mobile-header">
        <button className="menu-toggle" onClick={toggleSidebar} aria-label="Toggle menu">
          ☰
        </button>
        <h1>🌱 Sapling</h1>
        <div className="mobile-spacer"></div>
      </div>

      {/* Sidebar Overlay (mobile only) */}
      <div 
        className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
        onClick={closeSidebar}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        {/* Desktop Header (hidden on mobile) */}
        <div className="sidebar-header">
          <h1>🌱 Sapling - Educator Portal</h1>
        </div>

        <nav className="nav-menu">
          <a
            href="#"
            className={`nav-link ${activeView === 'updates' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('updates');
            }}
          >
            <span>📱</span>
            <span>Daily Updates</span>
          </a>

          <a
            href="#"
            className={`nav-link ${activeView === 'observations' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('observations');
            }}
          >
            <span>👀</span>
            <span>Observations</span>
          </a>

          <a
            href="#"
            className={`nav-link ${activeView === 'meals' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('meals');
            }}
          >
            <span>🍽️</span>
            <span>Food & Meals</span>
          </a>

          <a
            href="#"
            className={`nav-link ${activeView === 'health' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('health');
            }}
          >
            <span>💊</span>
            <span>Health</span>
          </a>

          <a
            href="#"
            className={`nav-link ${activeView === 'rollcall' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('rollcall');
            }}
          >
            <span>✓</span>
            <span>Roll Call</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <button onClick={logout} className="btn-logout">
            Log Out
          </button>
        </div>
      </aside>

      <main className="main-content">{children}</main>
    </div>
  );
}

export default EducatorLayout;