import React from 'react';
import {AiFillGithub} from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'; 
import Footer from '../footer/footer.jsx';
import Cards from '../joywin-cards/Card.jsx';




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
    <>
      <div className="container mx-auto py-8 bg-black">
        <div className="text-center mt-3">
          <h1 className="text-6xl font-bold mb-8 m-auto bg-gradient-to-l from-sky-500 from-1% to-purple-400 to-70% bg-clip-text text-transparent">
            Events
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-9">
          {eventPast.map((member, index) => (
            <Cards key={index} {...member} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventPage;
{/*w-full  h-41*/}
