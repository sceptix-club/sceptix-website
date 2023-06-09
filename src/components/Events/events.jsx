import React from 'react';
import {AiFillGithub} from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'; 






  const EventPage = () => {
   const eventPast = [
    {
    name: "hacktofuture",    
    date: "July 2022",
    image: 'hack.jpg',
    eventInfo: "some random event took place this summer i dont know what to put here how did feel dont smile too much you idiot"
  
    }, 

    {
        name: "hacktofuture",    
        date: "July 2022",
        image: 'hack.jpg',
        eventInfo: "some random event took place this summer i dont know what to put here how did feel dont smile too much you idiot"
      
    }, 

    {
        name: "hacktofuture",    
        date: "July 2022",
        image: 'hack.jpg',
        eventInfo: "some random event took place this summer i dont know what to put here how did feel dont smile too much you idiot"
      
    }, 


    {
        name: "hacktofuture",    
        date: "July 2022",
        image: 'hack.jpg',
        eventInfo: "some random event took place this summer i dont know what to put here how did feel dont smile too much you idiot"
      
    }, 

    {
        name: "hacktofuture",    
        date: "July 2022",
        image: 'hack.jpg',
        eventInfo: "some random event took place this summer i dont know what to put here how did feel dont smile too much you idiot"
      
    }, 


]



  return (
<div className="container mx-auto py-8 bg-black">

      
    <div className='text-center mt-3'>
    <h1 className="text-4xl font-bold mb-8 m-auto bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%   bg-clip-text text-transparent">Past Events</h1>  
    </div>    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-9">
        {eventPast.map((member, index) => (
          <div key={index} className="bg-white shadow rounded-lg  flex flex-col   border-gray hover:shadow-xl">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-65 object-cover "
            />
            <h2 className="text-3xl font-bold mb-2 p-2 mt-3 ">{member.name}</h2>
            <p className='bg-gray-200 p-2 rounded-full w-fit size ml-3'>{member.date}</p>
            <p className="text-gray-500 p-3">{member.eventInfo}</p>
            <div className='flex flex-row justify-center mt-2'>            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
