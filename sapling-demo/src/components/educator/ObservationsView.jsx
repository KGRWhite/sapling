import { useState } from 'react';
import { mockChild } from '../../data/mockData';
import './EducatorViews.css';

function ObservationsView() {
  const [category, setCategory] = useState('cognitive');
  const [observation, setObservation] = useState('');
  const [outcomes, setOutcomes] = useState([]);
  const [newOutcome, setNewOutcome] = useState('');

  const categories = [
    'Cognitive Development',
    'Social & Emotional',
    'Physical Development',
    'Language & Communication',
    'Creative Expression'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Observation:', { category, observation, outcomes });
    alert('Observation saved!');
    setObservation('');
    setOutcomes([]);
  };

  const addOutcome = () => {
    if (newOutcome.trim()) {
      setOutcomes([...outcomes, newOutcome]);
      setNewOutcome('');
    }
  };

  return (
    <div className="view-container">
      <div className="view-header">
        <h2>👀 Learning Observations</h2>
        <p>Document developmental progress and learning moments</p>
      </div>

      <div className="child-selector-compact">
        <span>Observing:</span>
        <div className="selected-child-compact">
          <img src={mockChild.photo} alt={mockChild.firstName} />
          <strong>{mockChild.firstName} {mockChild.lastName}</strong>
        </div>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Development Category</label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Observation</label>
            <textarea
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
              placeholder="What did you observe? What was the child doing, saying, or showing interest in?"
              rows="6"
              required
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label>Learning Outcomes</label>
            <div className="outcome-input">
              <input
                type="text"
                value={newOutcome}
                onChange={(e) => setNewOutcome(e.target.value)}
                placeholder="Add learning outcome..."
                className="form-input"
              />
              <button 
                type="button" 
                onClick={addOutcome}
                className="btn-add"
              >
                + Add
              </button>
            </div>
            <div className="outcome-tags">
              {outcomes.map((outcome, idx) => (
                <span key={idx} className="outcome-tag">
                  {outcome}
                  <button 
                    type="button"
                    onClick={() => setOutcomes(outcomes.filter((_, i) => i !== idx))}
                    className="remove-tag"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Save Observation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ObservationsView;