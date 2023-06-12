import React from 'react';
import {AiFillGithub} from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'; 
import Footer from '../footer/footer.jsx';





  const EventPage = () => {
   const eventPast = [
    {
    eventName: "hacktofuture",    
    date: "July 2022",
    image: 'hack.jpg',
    eventInfo: "some random event took place this summer i dont know what to put here how did feel dont smile too much you idiot"
  
    }, 

    {
        eventName: "hacktofuture",    
        date: "July 2022",
        image: 'hack.jpg',
        eventInfo: "some random event took place this summer i dont know what to put here how did feel dont smile too much you idiot"
      
    }, 

    {
        eventName: "hacktofuture",    
        date: "July 2022",
        image: 'hack.jpg',
        eventInfo: "some random event took place this summer i dont know what to put here how did feel dont smile too much you idiot"
      
    }, 


    {
        eventName: "hacktofuture",    
        date: "July 2022",
        image: 'hack.jpg',
        eventInfo: "some random event took place this summer i dont know what to put here how did feel dont smile too much you idiot"
      
    }, 

    {
        eventName: "hacktofuture",    
        date: "July 2022",
        image: 'hack.jpg',
        eventInfo: "some random event took place this summer i dont know what to put here how did feel dont smile too much you idiot"
      
    }, 


]



  return (
    <><div className="container mx-auto py-8 bg-black">


      <div className='text-center mt-3'>
        <h1 className="text-6xl font-bold mb-8 m-auto bg-gradient-to-l from-sky-500 from-1%  to-purple-400 to-70%   bg-clip-text text-transparent">Events</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-9">
        {eventPast.map((member, index) => (
          <div key={index} className="bg-gray-900 shadow   flex flex-col   border-gray hover:shadow-xl">
            <img
              src={member.image}
              alt={member.eventName}
              className="object-cover w-full  h-auto " />
            <h2 className="text-xl text-white font-bold mb-2 p-2 mt-3 ">{member.eventName}</h2>
            <p className='bg-gray-200 text-xs p-2 rounded-full w-fit size ml-3'>{member.date}</p>
            <p className="text-gray-500 p-3">{member.eventInfo}</p>
            <div className='flex flex-row justify-center mt-2'>
            </div>
          </div>
        ))}
      </div>
    </div><Footer /></>
  );
};

export default EventPage;
{/*w-full  h-41*/}
