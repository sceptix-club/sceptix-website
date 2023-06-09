import React from 'react';
import {AiFillGithub} from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-white">
          {/* <div className='flex flex-row justify-center mt-2'> 
               <div className='m-2'><a href={member.gitlink}>{<AiFillGithub size={30}/>}</a></div>    
               <div className='m-2'><a href={member.linked}>{<AiFillLinkedin size={30}/>}</a></div>                       
          </div> */}
          This is the footer component.
        </p>
      </div>
    </footer>
  );
};

export default Footer;