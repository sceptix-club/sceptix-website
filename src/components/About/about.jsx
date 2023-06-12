//dedicated to empowering individuals with the liberating force of open-source software
//conducted engaging sessions, organized Linux installation drives, and hosted captivating coding events and hackathons
//committed to expanding our community and contributing to larger-scale open-source projects

import React from 'react';
import Footer from '../footer/footer.jsx';
import { MdPeopleOutline } from 'react-icons/md';
import { GiTeacher } from "react-icons/gi"; 
import { GiFist } from "react-icons/gi"; 

const AboutUs = () => {
  return (
    <>
    <div className=" mx-auto overflow-hidden sm:pt-20 sm:mx-24 ">
      
      <div className="lg:flex">
        
        <div className="p-8 sm:pl-16 pt-14 sm:pt-0">
          <div className="uppercase tracking-wide text-2xl sm:text-6xl text-blue-400 font-bold text-center sm:text-left">About Us</div>
            <p className="sm:mt-12 mt-4 text-white sm:text-xl">
            Welcome to The sceptix club, where freedom and innovation converge. We are a open source software club. Together, we have witnessed the transformative power of collaboration and the limitless possibilities it brings. Join us at The sceptix club and let's celebrate the journey of freedom, creativity, and boundless minds.
            </p>
            
        </div>

        <div className="lg:shrink">
          <img className="h-48 w-full object-cover lg:h-full lg:w-auto transition duration-200 ease-out hover:ease-in hover:shadow-2xl hover:shadow-[#40cac8]" src="/src/components/About/group.jpg" alt="About"/>
        </div>
        
      </div>
      

    </div>
    <section className="py-12 sm:mt-35 mt-10">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white sm:mx-20">
          <div className="text-center">
            <MdPeopleOutline className="mx-auto text-blue-400" style={{ fontSize: '80px'}}/>
            <p className="mt-4">Dedicated to empowering individuals with the liberating force of open-source software</p>
          </div>
          <div className="text-center">
            <GiTeacher className="text-blue-400 mx-auto" style={{fontSize: '80px'}} />
            <p className="mt-4">Conducted engaging sessions, organized Linux installation drives, and hosted captivating coding events and hackathons</p>
          </div>
          <div className="text-center">
            <GiFist className="text-blue-400 mx-auto" style={{fontSize: '80px'}} />
            <p className="mt-4">Committed to expanding our community and contributing to larger-scale open-source projects</p>
          </div>
        </div>
      </div>
    </section>
    
    <section className="sm:mt-35 mt-10 ">
       <Footer />
    </section>
    </>
  );
};

export default AboutUs;

{/*Welcome to The sceptix club, where freedom and innovation converge. We are a open source software club. Together, we have witnessed the transformative power of collaboration and the limitless possibilities it brings.

. Join us at The sceptix club and let's celebrate the journey of freedom, creativity, and boundless minds.*/}