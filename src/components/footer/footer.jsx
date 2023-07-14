import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import Image from "./L4.svg";

const Footer = () => {
  const socialIcons = [
    {
      name: "Github",
      link: "https://github.com/sceptix-club",
      icon: <AiFillGithub size={30} />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/sceptix/",
      icon: <AiFillLinkedin size={30} />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/sceptix_sjec/",
      icon: <AiFillInstagram size={30} />,
    },
    {
      name: "Mail",
      link: "mailto:sceptix@sjec.ac.in",
      icon: <AiFillMail size={30} />,
    },
  ];

  return (
    <footer className="bg-white py-2 text-black">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <img src={Image} alt="thejas" className="w-21 h-auto" />
            {/* <h1 className="text-4xl">The Sceptix Club</h1> */}
            <p className="text-3xl">St. Joseph Engineering College</p>
            <p>Vamanjoor, Mangaluru, Karnataka 575028</p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3">
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-5xl">About us</h1>
            <br />
            <br />
            <p className="text-3xl hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Home
            </p>
            <br />
            <p className="text-3xl hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Events
            </p>
            <br />
            <p className="text-3xl hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Members
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-9 md:mb-1">
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-5xl whitespace-nowrap overflow-hidden overflow-ellipsis items-start">
              Contact us
            </h1>
            <br />
            <br />
            <div className="justify-center flex-wrap flex">
              <ul className="list-none">
                <li className="mb-2">
                  {socialIcons.map((socialIcon) => (
                    <a
                      className="m-2 flex-wrap flex items-center  text-brown-500 hover:text-blue-500 transition-colors duration-300 flex-row"
                      href={socialIcon.link}
                      key={socialIcon.name}
                      style={{ fontSize: "30px" }}
                    >
                      {socialIcon.icon}
                      <span className="ml-2">{socialIcon.name}</span>
                    </a>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap">
            <div className="w-full">
              <br />
              <br />
              <br />
              <p className="text-2xl">
                @{new Date().getFullYear()} Sceptixclub. All rights reserved.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
