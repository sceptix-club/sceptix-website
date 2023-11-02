import React, { useEffect, useState,useContext } from "react";
import axios from 'axios'
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Footer from "../footer/footer.jsx";
import {RegisterContext} from '../../Context/RegisterContext.jsx'
import {EventCards,UpComingEventCards} from "../joywin-cards/Card.jsx";


import Mainfooter from "../footer/mainfooter.jsx";

const EventPage = () => {
  const {showRegister,setShowRegister} = useContext(RegisterContext)
  


  const [upComingEvent,setUpComingEvent] = useState([{}])

  useEffect(() => {
    async function fetchEventData() {
      let response = await fetch('http://localhost:3000/api/events')
      let data = await response.json()
      await setUpComingEvent([...data])
      
    }

    fetchEventData()
  }, [])
  const eventPast = [
    {
      eventName: "JS Jumpstart",
      date: "12/6/2023",
      image: "Final-01.jpeg",
      eventInfo:
        "A week long bootcamp aimed to provide an Introduction to JavaScript from scratch!",
    },
    {
      eventName: "Hack To Future",
      date: "25/4/2023",
      image: "HackToFuture - 26 April 2023.jpg",
      eventInfo:
        "HackToFuture is a 24-hour hackathon taking place on April 25-26. It's a great chance for tech enthusiasts of all levels to demonstrate their skills, network with others, and contribute to a brighter future. Join us for an inspiring and impactful 24-hour event that will help you achieve your goals!",
    },
    {
      eventName: "Recruitment",
      date: "23/2/2023",
      image: "Recruitment.jpeg",
      eventInfo:
        "Exciting opportunity ahead! Join The sceptix club's upcoming recruitment program to develop FOSS websites. We're recruiting talented students to promote FOSS acceptance within the college community. Stay tuned for details!",
    },

    {
      eventName: "A Guide To ARG",
      date: "17/3/2023",
      image: "A Guide To ARG- 17 March 2023-01.jpeg",
      eventInfo:
        "An interactive alternate reality game that had characters of our very own club! This inculcated skills like team work, problem solving and communication among the members",
    },
    {
      eventName: "SJEC Premiere Hackathon",
      date: "25/1/2023",
      image: "SJEC Premiere Hackathon - 25 Jan 2023.jpg",
      eventInfo:
        "Coming soon: An 8-hour non-stop hackathon. Choose your theme and join a maximum of four members to develop solutions in agriculture, education, healthcare, and social innovation. Get ready for inspiring projects, problem-solving, and a vibrant community of passionate coders!",
    },
    {
      eventName: "SJEC 30 Days Of Code",
      date: "19/12/2022",
      image: "sjec-30-days-of-code-01.jpeg",
      eventInfo:
        "An intensive coding challenge contest was conducted for 30 days. The participants were encouraged to come up with solutions and exciting cash prizes were rewarded to the outstanding contestants every week!",
    },
    {
      eventName: "FOSS vs Proprietary Software",
      date: "22/7/2022",
      image: "Foss.jpeg",
      eventInfo:
        "Experience the power of Free and Open-Source Software (FOSS) at the upcoming second meeting of the sceptix club. Learn about the advantages of FOSS, explore open-source alternatives, and join our enthusiastic community of tech enthusiasts. Join us for an enlightening session and unlock new possibilities in the world of software!.",
    },
    {
      eventName: "Introduction to Linux and Vim",
      date: "15/7/2022",
      image: "LinuxIntro.jpeg",
      eventInfo:
        "Discover the meeting of the sceptix club, featuring insightful sessions on Linux-based operating systems, terminal commands, and Vim efficiency. Engage with fellow students from various departments and expand your knowledge in this exciting event. Join us for an unforgettable experience!",
    },

    {
      eventName: "Inauguration",
      date: "16/6/2022",
      image: "Inauguration - 16 June 2022-01.jpeg",
      eventInfo:
        "Sceptix was officially inaugurated in St. Joseph Engineering College. It signified the start of our journey.",
    },
  ];
  return (

    <>
    <div className="container mx-auto py-5 bg-black">
   <div className="text-center mt-2">
     <h1 className=" h-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-0 m-auto bg-gradient-to-l from-sky-500 from-1% to-blue-400 to-70% bg-clip-text text-transparent">
       Up Comming Events
     </h1>
     
     
   </div>

   <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mx-auto">
     {upComingEvent.map((member, index) => (
       <div className="mr-4 sm:justify-center md:justify-start lg:justify-start xl:justify-start" key={index}>
         <UpComingEventCards {...member}/>
       </div>
     ))}
   </div>
 </div>
 

    
   <div className="container mx-auto py-8 bg-black">
  <div className="text-center mt-3">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 m-auto bg-gradient-to-l from-sky-500 from-1% to-blue-400 to-70% bg-clip-text text-transparent">
      Events
    </h1>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mx-auto">
    {eventPast.map((member, index) => (
      <div className="mr-4 sm:justify-center md:justify-start lg:justify-start xl:justify-start" key={index}>
        <EventCards {...member} />
      </div>
    ))}
  </div>
</div>




      <Mainfooter />
    </>
  );
};

export default EventPage;
{
  /*w-full  h-41*/
}
