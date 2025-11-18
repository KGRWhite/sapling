import { useAuth } from '../context/AuthContext';
import { mockUpdates } from '../data/mockData';
import UpdateCard from '../components/updates/UpdateCard';
import './DashboardPage.css';

function DashboardPage() {
  const { child, logout } = useAuth();
  
  // Sort updates by timestamp desc
  const sortedUpdates = [...mockUpdates].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>🌱 Sapling</h1>
          <button onClick={logout} className="btn-logout">
            Log Out
          </button>
        </div>
      </header>
      
      <div className="dashboard-container">
        <div className="child-profile">
          <img 
            src={child.photo} 
            alt={child.firstName}
            className="child-photo"
          />
          <div className="child-info">
            <h2>{child.firstName} {child.lastName}</h2>
            <p>Age: {child.age} years • Room: {child.room}</p>
          </div>
        </div>
        
        <div className="updates-section">
          <h2>Today's Updates</h2>
          <p className="update-date">
            {new Date().toLocaleDateString('en-AU', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          
          <div className="updates-feed">
            {sortedUpdates.map(update => (
              <UpdateCard key={update.id} update={update} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;