import React, { useEffect,useContext } from "react";
import {MainContext} from '../../Context/MainContext'
import { Link } from "react-router-dom";
import '../../style/sidebar.css';
import { useState } from "react";
import {LuPlaneLanding} from 'react-icons/lu'
import {SlCalender} from 'react-icons/sl'
import { RiTeamLine } from 'react-icons/ri';
import {AiOutlineHome} from 'react-icons/ai'
import {CgLoadbar, CgToggleOff} from  'react-icons/cg'






function Sidebar() {
    const {showRegister,setShowRegister} = useContext(MainContext)
  // to make the side bar responsive 
  let toggle =''
  const [visible,setVisible] = useState(true)
  const [prevScrollPos , setPrevScrollPos] = useState(0)

 
  const HandleScroll = ()=>{
    const currentScroll = window.scrollY

    if(currentScroll > prevScrollPos){
      setVisible(false)
    }
    else if(currentScroll+100 < prevScrollPos){
      setVisible(true)
    }
    setPrevScrollPos(currentScroll)
  }

  useEffect(()=>{
    window.addEventListener('scroll',HandleScroll)
  },[prevScrollPos])

  
  let HandleClick = ()=>{ 
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
    setShowRegister(false)

    
  }

  return (
  <>
   
      <div className= {`flex flex-col items-center justify-evenly xl:flex xl:bg-D3D3D3 xl:justify-evenly xl:items-center xl:flex-col icons ${visible ? toggle = "toggle" : toggle = "" }`}>
        {/* <div onClick={HandleClick} className="Landing">
          <Link to="/"> 
          <LuPlaneLanding />
          </Link>
         
       
        </div> */}
        <div onClick={HandleClick} className="Home">
         <Link to="/">
            <AiOutlineHome size={27}/>
          </Link>
        </div>
        <div onClick={HandleClick} className="Event">
          <Link to="/events">
            <SlCalender size={27}/>
          </Link>
        </div>
        <div onClick={HandleClick} className="Members">
          <Link to="/members">
            <RiTeamLine size={27}/>
          </Link>
        </div>
        
        {/* menu bar */}
     
      </div>
      </>
  );
}

export default Sidebar;