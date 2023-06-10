import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './Card.css';

const Cards = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(props)

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
          <h3>{props.eventName}</h3>
          <h5>
            <FontAwesomeIcon icon={faCalendarAlt} /> {props.date}
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


      
