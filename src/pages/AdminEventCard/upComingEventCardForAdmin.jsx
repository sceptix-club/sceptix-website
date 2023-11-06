import react from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Card.css'

const UpComingEventCardForAdmin = (props) => {  
    const [isExpanded, setIsExpanded] = useState(false);
    const [showDelete,setShowDelete] = useState(true)
   
  const handleDelete = ()=>{
    const con = confirm("Are you sure")

    if(con){
      try{

      
    fetch("http://localhost:3000/api/deleteEvent",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        id:props._id
      })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
    .catch(err=>{
      console.log(err)
    })
    alert('Deleted Successfully')
  }

catch(err){
  console.log(err)
}
    }
}
  
    const handleCardHover = () => {
      setIsExpanded(true);
    };
  
    const handleCardLeave = () => {
      setIsExpanded(false);
    };
  
  
    return (
        <>
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
            <FontAwesomeIcon icon={faCalendarAlt} /> {props.date} 
            
          </h5>
        </div>
        {isExpanded && (
            
            

          <div className="Card-info">
          <div className=' absolute top-4 right-3'>
            <FontAwesomeIcon icon={faEllipsis} size='xl' onClick={()=>{
                setShowDelete(!showDelete)
            }}/>
            </div>
            
            <h3 className="font-bold text-lg" >{props.eventName}</h3>
            <h5>
              <FontAwesomeIcon icon={faCalendarAlt} /> {props.date}
            </h5>
            <p>{props.eventInfo}</p>
            <button hidden={showDelete} onClick={handleDelete} className = "transition-all mt-10 font-bold text-lg absolute bottom-5 hover:scale-125">Delete Event</button> 
          </div>
          
        )}
      </div>
      <div className='flex justify-center'>

      
      </div>
      </>
    );
  };

export default UpComingEventCardForAdmin