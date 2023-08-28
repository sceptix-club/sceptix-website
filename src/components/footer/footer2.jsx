import React from "react";
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
      icon: <AiFillGithub size={28} />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/sceptix/",
      icon: <AiFillLinkedin size={28} />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/sceptix_sjec/",
      icon: <AiFillInstagram size={28} />,
    },
    {
      name: "Mail",
      link: "mailto:sceptix@sjec.ac.in",
      icon: <AiFillMail size={28} />,
    },
  ];

  return (
    <footer className="bg-gray-100 py-6 text-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <img
              src={Image}
              alt="thejas"
              className="max-w-full h-auto w-41 mx-auto mb-2"
            />
            <p className="text-2xl font-semibold">
              St. Joseph Engineering College
            </p>
            <p className="text-base">Vamanjoor, Mangaluru, Karnataka 575028</p>
          </div>
          <br />
          <div className="md:mt-6 lg:mt-0">
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-4xl font-semibold mb-3">About Us</h1>
            <p className="text-3xl mb-2 hover:text-blue-500 cursor-pointer">
              Home
            </p>
            <p className="text-3xl mb-2 hover:text-blue-500 cursor-pointer">
              Events
            </p>
            <p className="text-3xl hover:text-blue-500 cursor-pointer">
              Members
            </p>
          </div>

          <div className="md:mt-6 lg:mt-0">
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-4xl font-semibold mb-3">Contact Us</h1>
            <div className="flex flex-col space-y-1">
              {socialIcons.map((socialIcon) => (
                <a
                  className="flex items-center hover:text-blue-500 transition-colors duration-300"
                  href={socialIcon.link}
                  key={socialIcon.name}
                >
                  {socialIcon.icon}
                  <span className="ml-2 text-3xl">{socialIcon.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10 mt-4 text-center">
        <p className="text-lg">
          <br />@{new Date().getFullYear()} Sceptixclub. All rights reserved.
          <br />
          <br />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
