import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './Cards.css';
import image from './WhatsApp Image 2023-06-09 at 10.57.28 PM.jpeg'; // Fixed the file extension

const Cards = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="Card-content">
            <div className='Card-image'>
                <img src={image} alt="Test Image" />
            </div>
            <div className='Card-info'>
                <h3>Session on Anime</h3>
                <h5><FontAwesomeIcon icon={faCalendarAlt} /> 12/15/2023</h5>
            </div>
        </div>
  );
}

export default Cards;


      
