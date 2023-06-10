import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './Cards.css';

const Cards = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`Card-content ${isExpanded ? 'expanded' : ''}`} onClick={handleCardClick}>
      <div className="Card-image">
        <img src={props.image} alt="Test Image" />
      </div>
      <div className="Card-title">
          <h3>{props.eventName}</h3>
          <h5>
            <FontAwesomeIcon icon={faCalendarAlt} /> {props.date}
          </h5>
      </div>
      {isExpanded ? (
        <div className="Card-info">
          <h3>Session on Anime</h3>
          <h5>
            <FontAwesomeIcon icon={faCalendarAlt} /> 12/15/2023
          </h5>
          <p>
            {props.eventInfo}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Cards;


      
