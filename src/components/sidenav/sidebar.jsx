import React from "react";
import { Link } from "react-router-dom";
import '../../style/sidebar.css';
import { useState } from "react";
import {LuPlaneLanding} from 'react-icons/lu'
import { HiHome } from 'react-icons/hi';
import {SlCalender} from 'react-icons/sl'
import { RiTeamLine } from 'react-icons/ri';
import {AiOutlineHome} from 'react-icons/ai'
import {CgLoadbar} from  'react-icons/cg'






function Sidebar() {
  // to make the side bar responsive 
  let toggle =''
  const [state , SetState] = useState(false);
  let HandleState = ()=>{
    SetState(!state);
    window.scrollTo(0, 0);
  }


  return (
  
   // icons
      <div onClick={HandleState} {...state ? toggle = "toggle" : ''} className= {`icons ${toggle}`}>
        <div className="Landing">
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
      <div className="menu" onClick={HandleState} {...state ? toggle = "toggle" : ''} >
        <CgLoadbar className= {`first ${toggle}`} />
        <CgLoadbar className= {`second ${toggle}`} />

      </div>
      </div>
    
  );
}

export default Sidebar;