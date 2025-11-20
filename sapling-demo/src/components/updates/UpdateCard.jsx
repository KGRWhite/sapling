import { memo } from 'react';
import './UpdateCard.css';

const UpdateCard = memo(function UpdateCard({ update }) {
  console.log('UpdateCard rendered for:', update.id);

  const renderUpdateContent = () => {
    switch (update.type) {
      case 'checkin':
        return (
          <div className="update-content">
            <div className="update-icon checkin">✓</div>
            <div className="update-details">
              <h3>Check In</h3>
              <p className="update-time">{update.time}</p>
              {update.note && <p className="update-note">{update.note}</p>}
              <p className="staff-name">— {update.staffName}</p>
            </div>
          </div>
        );
      
      case 'meal':
        return (
          <div className="update-content">
            <div className="update-icon meal">🍽️</div>
            <div className="update-details">
              <h3>{update.meal}</h3>
              <p className="update-time">{update.time}</p>
              <div className="meal-items">
                {update.items.map((item, idx) => (
                  <span key={idx} className="meal-item">{item}</span>
                ))}
              </div>
              <p className="consumption">Consumed: <strong>{update.consumed}</strong></p>
              {update.note && <p className="update-note">{update.note}</p>}
            </div>
          </div>
        );
      
      case 'activity':
        return (
          <div className="update-content">
            <div className="update-icon activity">🎨</div>
            <div className="update-details">
              <h3>{update.title}</h3>
              <p className="update-time">{update.time}</p>
              <p className="update-description">{update.description}</p>
              
              {update.photos && update.photos.length > 0 && (
                <div className="photo-gallery">
                  {update.photos.map((photo, idx) => (
                    <img 
                      key={idx} 
                      src={photo} 
                      alt={`Activity ${idx + 1}`}
                      className="activity-photo"
                    />
                  ))}
                </div>
              )}
              
              {update.learningOutcomes && (
                <div className="learning-outcomes">
                  <strong>Learning Outcomes:</strong>
                  <div className="outcome-tags">
                    {update.learningOutcomes.map((outcome, idx) => (
                      <span key={idx} className="outcome-tag">{outcome}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      
      case 'nap':
        return (
          <div className="update-content">
            <div className="update-icon nap">😴</div>
            <div className="update-details">
              <h3>Nap Time</h3>
              <p className="update-time">{update.time}</p>
              <p>Duration: <strong>{update.duration}</strong></p>
              <p>Quality: <strong>{update.quality}</strong></p>
              {update.note && <p className="update-note">{update.note}</p>}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="update-card">
      {renderUpdateContent()}
    </div>
  );
});

export default UpdateCard;