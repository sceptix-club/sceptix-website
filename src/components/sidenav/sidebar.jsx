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
  let toggle =''
  const [state , SetState] = useState(false);

  let HandleState = ()=>{
    SetState(!state);
  }
  // if(state){
  //   toggle = "toggle";
  // }
  // else{
  //   toggle = "";
  // }
 

  return (
    <div>
      <div className="menu" onClick={HandleState} {...state ? toggle = "toggle" : ''}>
        <CgLoadbar className= {`first ${toggle}`} />
        <CgLoadbar className= {`second ${toggle}`} />

      </div>
      <div className={`icons ${toggle}`}>
        <div className="Landing">
          <Link to="/"> 
          <LuPlaneLanding />
          </Link>
         
       
        </div>
        <div className="Home">
          <Link to="/home">
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
      </div>
    </div>
  );
}

export default Sidebar;
