import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faL } from '@fortawesome/free-solid-svg-icons';
import { useState,useContext } from 'react';
import { RegisterContext } from '../../Context/RegisterContext';
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
      <div className="Card-title ">
        <h3 className="font-bold text-lg"> {props.eventName}</h3>
        <h5 className="font-normal">
          <FontAwesomeIcon icon={faCalendarAlt} /> {props.date}
        </h5>
      </div>
      {isExpanded && (
        <div className="Card-info">
          <h3 className="font-bold text-lg" >{props.eventName}</h3>
          <h5>
            <FontAwesomeIcon icon={faCalendarAlt} /> {props.date}
          </h5>
          <p>{props.eventInfo}</p>
          
        </div>
      )}
    </div>
  );
};



const UpComingEventCards = (props) => {  
  const {showRegister,setShowRegister} = useContext(RegisterContext)
  const {eventName,setEventName} = useContext(RegisterContext)
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
      <div className="Card-title ">
        <h3 className="font-bold text-lg">{props.eventName}</h3>
        <h5 className="font-normal">
          <FontAwesomeIcon icon={faCalendarAlt} /> 
          <button onClick={()=>{
            setEventName(props.eventName)
            setShowRegister(true)
          }} className='font-bold'>Register Now</button>
        </h5>
      </div>
      {isExpanded && (
        <div className="Card-info">
          <h3 className="font-bold text-lg" >{props.eventName}</h3>
          <h5>
            <FontAwesomeIcon icon={faCalendarAlt} /> {props.date}
          </h5>
          <p>{props.eventInfo}</p>
          <button onClick={()=>{
            setEventName(props.eventName)
            setShowRegister(true)
          }} className = "transition-all mt-10 font-bold text-lg absolute bottom-5 hover:scale-125">Register Now</button>
          
          
           
        </div>
      )}
    </div>
  );
};

export {EventCards,UpComingEventCards}
