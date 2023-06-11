import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './Card.css';

const EventCards = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardHover = () => {
    setIsExpanded(true);
  };

  const handleCardLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={`Card-content ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
    >
      <div className="Card-image">
        <img src={props.image} alt="Test Image" />
      </div>
      <div className="Card-title">
        <h3>{props.eventName}</h3>
        <h5>
          <FontAwesomeIcon icon={faCalendarAlt} /> {props.date}
        </h5>
      </div>
      {isExpanded && (
        <div className="Card-info">
          <h3>{props.eventName}</h3>
          <h5>
            <FontAwesomeIcon icon={faCalendarAlt} /> {props.date}
          </h5>
          <p>{props.eventInfo}</p>
        </div>
      )}
    </div>
  );
};

export default EventCards;
