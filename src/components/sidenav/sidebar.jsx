import React from "react";
import { Link } from "react-router-dom";
import '../../style/sidebar.css';
import { useState } from "react";
import {LuPlaneLanding} from 'react-icons/lu'
import {SlCalender} from 'react-icons/sl'
import { RiTeamLine } from 'react-icons/ri';
import {AiOutlineHome} from 'react-icons/ai'
import {CgLoadbar} from  'react-icons/cg'






function Sidebar() {
  // to make the side bar responsive 
  let toggle ='toggle'
  const [state , SetState] = useState(false);
  let HandleState = ()=>{
    
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
    
  }


  return (
  <>


   
   
      <div onClick={HandleState} {...state ? toggle = "toggle" : ''} className= {`flex  icons ${toggle}`}>
        <div onClick={HandleState} className="Landing">
          <Link to="/"> 
          <LuPlaneLanding />
          </Link>
         
       
        </div>
        <div onClick={HandleState} className="Home">
         <Link to="/home">
            <AiOutlineHome />
          </Link>
        </div>
        <div onClick={HandleState} className="Event">
          <Link to="/events">
            <SlCalender />
          </Link>
        </div>
        <div onClick={HandleState} className="Members">
          <Link to="/members">
            <RiTeamLine />
          </Link>
        </div>
        
        {/* menu bar */}
     
      </div>
      </>
  );
}

export default Sidebar;