import React from 'react';
import {AiFillChrome, AiFillGithub, AiFillInstagram, AiFillMail} from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  const Icons = [
    { name: "logo-facebook", link: "#" },
    { name: "logo-twitter", link: "#" },
    { name: "logo-github", link: "#" },
    { name: "logo-linkedin", link: "#" },
    { name: "logo-instagram", link: "#" },
  ];
  return (
    <footer className="bg-gray-800 py-12 text-white">
      <div className="container mx-auto px-4  text-center">
        <div>
          <h1  className="text-4xl mb-8">The sceptix club</h1>
          <p>St. Joseph Engineering College</p>
          <p>Vamanjoor, Mangaluru, Karnataka 575028</p>
          <br/>
          <div className='flex flex-row justify-center mt-2'> 
               <div className='m-2'><a href={"https://github.com/sceptix-club"}>{<AiFillGithub size={30}/>}</a></div>    
               <div className='m-2'><a href={"https://www.linkedin.com/company/sceptix/"}>{<AiFillLinkedin size={30}/>}</a></div>
               <div className='m-2'><a href={"https://www.instagram.com/sceptix_sjec/"}>{<AiFillInstagram size={30}/>}</a></div>
               <div className='m-2'><a href={"mailto:sceptix@sjec.ac.in"}>{<AiFillMail size={30}/>}</a></div>                       
          </div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;