import { useState } from 'react';
import { mockChild } from '../../data/mockData';
import './EducatorViews.css';

function UpdatesView() {
  const [updateType, setUpdateType] = useState('activity');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New update:', { updateType, title, description });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="view-container">
      <div className="view-header">
        <h2>📝 Add Update</h2>
        <p>Post daily updates to parent feeds</p>
      </div>

      <div className="child-selector-compact">
        <span>Child:</span>
        <div className="selected-child-compact">
          <img src={mockChild.photo} alt={mockChild.firstName} />
          <strong>{mockChild.firstName} {mockChild.lastName}</strong>
          <span className="room-badge">{mockChild.room}</span>
        </div>
      </div>

      {showSuccess && (
        <div className="success-message">
          ✓ Update posted successfully! Parents will see this in their feed.
        </div>
      )}

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Update Type</label>
            <select 
              value={updateType} 
              onChange={(e) => setUpdateType(e.target.value)}
              className="form-select"
            >
              <option value="activity">Activity</option>
              <option value="meal">Meal</option>
              <option value="nap">Nap</option>
              <option value="observation">Learning Observation</option>
            </select>
          </div>

          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Outdoor Play, Morning Tea"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Description / Notes</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the activity, what the child did, learning outcomes..."
              rows="6"
              required
              className="form-textarea"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Post Update
            </button>
            <button 
              type="button" 
              onClick={() => { setTitle(''); setDescription(''); }}
              className="btn-secondary"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatesView;