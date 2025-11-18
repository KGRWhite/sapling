import { useState } from 'react';
import './EducatorViews.css';

function RollCallView() {
  const [children] = useState([
    { id: 1, name: 'Emma Appleton', room: 'Butterflies', status: 'present', checkIn: '08:30' },
    { id: 2, name: 'Oliver Chen', room: 'Butterflies', status: 'present', checkIn: '08:15' },
    { id: 3, name: 'Sophie Martin', room: 'Butterflies', status: 'absent', checkIn: null },
    { id: 4, name: 'Lucas Brown', room: 'Butterflies', status: 'present', checkIn: '09:00' },
    { id: 5, name: 'Mia Taylor', room: 'Butterflies', status: 'present', checkIn: '08:45' },
  ]);

  const presentCount = children.filter(c => c.status === 'present').length;
  const totalCount = children.length;

  return (
    <div className="view-container">
      <div className="view-header">
        <h2>✓ Roll Call</h2>
        <p>Daily attendance tracking</p>
      </div>

      <div className="stats-cards">
        <div className="stat-card present">
          <div className="stat-number">{presentCount}</div>
          <div className="stat-label">Present</div>
        </div>
        <div className="stat-card absent">
          <div className="stat-number">{totalCount - presentCount}</div>
          <div className="stat-label">Absent</div>
        </div>
        <div className="stat-card total">
          <div className="stat-number">{totalCount}</div>
          <div className="stat-label">Total</div>
        </div>
      </div>

      <div className="table-card">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Child Name</th>
              <th>Room</th>
              <th>Check-In Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {children.map(child => (
              <tr key={child.id}>
                <td className="child-name">
                  <div className="avatar">{child.name.charAt(0)}</div>
                  {child.name}
                </td>
                <td>{child.room}</td>
                <td>{child.checkIn || '-'}</td>
                <td>
                  <span className={`status-badge ${child.status}`}>
                    {child.status === 'present' ? '✓ Present' : '✗ Absent'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="demo-note">
        💡 <strong>Demo Note:</strong> In the full system, staff would check children in/out with timestamps,
        and parents would receive automatic notifications.
      </div>
    </div>
  );
}

export default RollCallView;