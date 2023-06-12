import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Footer from "../footer/footer.jsx";
import Cards from "../joywin-cards/Card.jsx";

const EventPage = () => {
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
        "Hack to Future was the first grand Hackathon organised at SJEc that saw the participation of over 91 institutions. The 24-hour hackathon provided an immersive and high-energy environment for participants to showcase their coding skills, creativity, and problem-solving abilities.  ",
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
        "The grand finale of the 30 day code challenge was our own hackathon. Consisting of four main themes, participants were judged on their creativity and implementation.It left a lasting impact on the participants, inspiring them to continue exploring new technologies and solving real-world challenges through their coding skills",
    },
    {
      eventName: "SJEC 30 Days Of Code",
      date: "19/12/2022",
      image: "sjec-30-days-of-code-01.jpeg",
      eventInfo:
        "An intensive coding challenge contest was conducted for 30 days. The participants were encouraged to come up with solutions and exciting cash prizes were rewarded to the outstanding contestants every week!",
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
      <div className="container mx-auto py-8 bg-black">
        <div className="text-center mt-3">
          <h1 className="text-6xl font-bold mb-8 m-auto bg-gradient-to-l from-sky-500 from-1% to-blue-400 to-70% bg-clip-text text-transparent">
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
{
  /*w-full  h-41*/
}
