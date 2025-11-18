import { useState } from 'react';
import { mockChild } from '../../data/mockData';
import './EducatorViews.css';

function HealthView() {
  const [incidentType, setIncidentType] = useState('');
  const [severity, setSeverity] = useState('minor');
  const [description, setDescription] = useState('');
  const [treatment, setTreatment] = useState('');
  const [parentNotified, setParentNotified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Health record:', { incidentType, severity, description, treatment, parentNotified });
    alert('Health record saved!');
    setIncidentType('');
    setDescription('');
    setTreatment('');
    setParentNotified(false);
  };

  return (
    <div className="view-container">
      <div className="view-header">
        <h2>💊 Health & Incidents</h2>
        <p>Record health incidents and medication</p>
      </div>

      <div className="child-selector-compact">
        <span>Child:</span>
        <div className="selected-child-compact">
          <img src={mockChild.photo} alt={mockChild.firstName} />
          <strong>{mockChild.firstName} {mockChild.lastName}</strong>
        </div>
      </div>

      <div className="alert-box">
        ⚠️ All incidents must be reported to parents immediately
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Incident Type</label>
            <select 
              value={incidentType} 
              onChange={(e) => setIncidentType(e.target.value)}
              className="form-select"
              required
            >
              <option value="">Select type...</option>
              <option value="minor-injury">Minor Injury</option>
              <option value="bump-bruise">Bump/Bruise</option>
              <option value="scratch-cut">Scratch/Cut</option>
              <option value="illness">Illness</option>
              <option value="medication">Medication Given</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Severity</label>
            <div className="radio-group">
              {[
                { value: 'minor', label: 'Minor', color: '#4caf50' },
                { value: 'moderate', label: 'Moderate', color: '#ff9800' },
                { value: 'serious', label: 'Serious', color: '#f44336' }
              ].map(item => (
                <label key={item.value} className="radio-label">
                  <input
                    type="radio"
                    name="severity"
                    value={item.value}
                    checked={severity === item.value}
                    onChange={(e) => setSeverity(e.target.value)}
                  />
                  <span style={{ color: item.color, fontWeight: 600 }}>
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What happened? When? Where?"
              rows="4"
              required
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label>Treatment / Action Taken</label>
            <textarea
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              placeholder="First aid provided, ice pack applied, etc."
              rows="3"
              required
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={parentNotified}
                onChange={(e) => setParentNotified(e.target.checked)}
              />
              Parent/Guardian has been notified
            </label>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Save Health Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HealthView;