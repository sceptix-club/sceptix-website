import React from "react";
import { Link } from "react-router-dom";
import '../Style/sidebar.css';

import { HiHome } from 'react-icons/hi';

import { FaLaptopCode } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';


function Sidebar() {
  return (
    <div>
      <div className={`icons`}>
        <div className="Home">
          <Link to="/">
            <HiHome />
          </Link>
        </div>
        <div className="Event">
          <Link to="/events">
            <FaLaptopCode />
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
