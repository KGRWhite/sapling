import { useState, useMemo, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import { mockUpdates } from '../data/mockData';
import UpdateCard from '../components/updates/UpdateCard';
import './DashboardPage.css';

function DashboardPageOptimised() {
  const { child, logout } = useAuth();
  
  const [filterType, setFilterType] = useState('all'); // 'all', 'meal', 'activity', 'nap'
  const [expandedUpdates, setExpandedUpdates] = useState(new Set());
  
  const filteredUpdates = useMemo(() => {
    console.log('Filtering updates...');
    
    let updates = [...mockUpdates];
    
    if (filterType !== 'all') {
      updates = updates.filter(update => update.type === filterType);
    }
    
    updates.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    return updates;
  }, [filterType]); 


  const handleToggleExpand = useCallback((updateId) => {
    setExpandedUpdates(prev => {
      const newSet = new Set(prev);
      if (newSet.has(updateId)) {
        newSet.delete(updateId);
      } else {
        newSet.add(updateId);
      }
      return newSet;
    });
  }, []);

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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h2>Today's Updates</h2>
              <p className="update-date">
                {new Date().toLocaleDateString('en-AU', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                onClick={() => setFilterType('all')}
                style={{
                  padding: '8px 16px',
                  background: filterType === 'all' ? '#667eea' : '#f0f0f0',
                  color: filterType === 'all' ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                All
              </button>
              <button 
                onClick={() => setFilterType('meal')}
                style={{
                  padding: '8px 16px',
                  background: filterType === 'meal' ? '#667eea' : '#f0f0f0',
                  color: filterType === 'meal' ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Meals
              </button>
              <button 
                onClick={() => setFilterType('activity')}
                style={{
                  padding: '8px 16px',
                  background: filterType === 'activity' ? '#667eea' : '#f0f0f0',
                  color: filterType === 'activity' ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Activities
              </button>
            </div>
          </div>
          
          <div className="updates-feed">
            {filteredUpdates.map(update => (
              <UpdateCard 
                key={update.id} 
                update={update}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPageOptimised;