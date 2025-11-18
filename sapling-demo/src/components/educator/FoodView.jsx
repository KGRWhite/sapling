import { useState } from 'react';
import { mockChild } from '../../data/mockData';
import './EducatorViews.css';

function FoodView() {
  const [mealType, setMealType] = useState('breakfast');
  const [items, setItems] = useState('');
  const [consumed, setConsumed] = useState('all');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Meal record:', { mealType, items, consumed, notes });
    alert('Meal recorded!');
    setItems('');
    setNotes('');
  };

  return (
    <div className="view-container">
      <div className="view-header">
        <h2>🍽️ Food & Meals</h2>
        <p>Track daily meals and nutrition</p>
      </div>

      <div className="child-selector-compact">
        <span>Recording for:</span>
        <div className="selected-child-compact">
          <img src={mockChild.photo} alt={mockChild.firstName} />
          <strong>{mockChild.firstName} {mockChild.lastName}</strong>
        </div>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Meal Type</label>
            <div className="radio-group">
              {['Breakfast', 'Morning Tea', 'Lunch', 'Afternoon Tea', 'Dinner'].map(meal => (
                <label key={meal} className="radio-label">
                  <input
                    type="radio"
                    name="mealType"
                    value={meal.toLowerCase().replace(' ', '-')}
                    checked={mealType === meal.toLowerCase().replace(' ', '-')}
                    onChange={(e) => setMealType(e.target.value)}
                  />
                  {meal}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Food Items (one per line)</label>
            <textarea
              value={items}
              onChange={(e) => setItems(e.target.value)}
              placeholder="e.g.
Spaghetti bolognese
Garden salad
Garlic bread
Milk"
              rows="5"
              required
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label>Amount Consumed</label>
            <select 
              value={consumed} 
              onChange={(e) => setConsumed(e.target.value)}
              className="form-select"
            >
              <option value="all">All</option>
              <option value="most">Most</option>
              <option value="some">Some</option>
              <option value="little">Little</option>
              <option value="none">None</option>
            </select>
          </div>

          <div className="form-group">
            <label>Notes (optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any allergies, preferences, or observations..."
              rows="3"
              className="form-textarea"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Record Meal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FoodView;