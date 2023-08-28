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
    SetState(!state);
  }


  return (
  <>


   
   
      <div onClick={HandleState} {...state ? toggle = "toggle" : ''} className= {`flex  icons ${toggle}`}>
        <div className="Landing">
          <Link to="/"> 
          <LuPlaneLanding />
          </Link>
         
       
        </div>
        <div className="Home">
         <Link to="/">
            <AiOutlineHome />
          </Link>
        </div>
        <div className="Event">
          <Link to="/events">
            <SlCalender />
          </Link>
        </div>
        <div className="Members">
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