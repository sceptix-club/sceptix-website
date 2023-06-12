import React from "react";
import { Link } from "react-router-dom";
import '../../style/sidebar.css';
import {LuPlaneLanding} from 'react-icons/lu'
import { HiHome } from 'react-icons/hi';
import {SlCalender} from 'react-icons/sl'
import { FaLaptopCode } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';



function Sidebar() {
  return (
    <div>
      <div className={`icons`}>
        <div className="Landing">
          <Link to="/"> 
          <LuPlaneLanding/>
          </Link>
         
       
        </div>
        <div className="Home">
          <Link to="/home">
            <HiHome />
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
