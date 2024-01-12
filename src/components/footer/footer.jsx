import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import Image from "./L1.png";

const HandleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  const socialIcons = [
    {
      name: "Github",
      link: "https://github.com/sceptix-club",
      icon: <AiFillGithub size={24} />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/sceptix/",
      icon: <AiFillLinkedin size={24} />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/sceptix_sjec/",
      icon: <AiFillInstagram size={24} />,
    },
    {
      name: "Mail",
      link: "mailto:sceptix@sjec.ac.in",
      icon: <AiFillMail size={24} />,
    },
  ];

  return (
    <footer className="bg-black-700 py-4 text-white">
      <hr className="border-t border-gray-1000 my-4" />
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
            <img
              src={Image}
              alt="logo"
              className="max-w-full h-auto w-40 mx-auto mb-2 px-auto"
            />
            <p className="text-md font-semibold text-center mb-2">
              St. Joseph Engineering College
            </p>
            <p className="text-sm text-center">
              Vamanjoor, Mangaluru, Karnataka 575028
            </p>
          </div>

          <div className="md:mt-2 lg:mt-4 xl:mt-4 2xl:mt-4 text-center">
            <div className="mb-2" onClick={HandleClick}>
              <h1 className="text-lg font-semibold mb-1">About Us</h1>
              <Link
                to="/"
                className={`text-md cursor-pointer block ${
                  location.pathname === "/"
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                }`}
              >
                Home
              </Link>
            </div>
            <div onClick={HandleClick} className="mb-2">
              <Link
                to="/events"
                className={`text-md cursor-pointer block ${
                  location.pathname === "/events"
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                }`}
              >
                Events
              </Link>
            </div>
            <div onClick={HandleClick} className="mb-2">
              <Link
                to="/members"
                className={`text-md cursor-pointer block ${
                  location.pathname === "/members"
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                }`}
              >
                Members
              </Link>
            </div>
          </div>

          <div className="md:mt-2 lg:mt-4 xl:mt-4 2xl:mt-4 lg:text-center xl:text-center">
            <div className="mb-2">
              <h1 className="text-lg font-semibold mb-1">Contact Us</h1>
            </div>
            <div className="flex flex-col space-y-2 lg:ml-20 xl:ml-36 2xl:ml-48">
              {socialIcons.map((socialIcon) => (
                <a
                  className="flex items-center hover:text-blue-500 transition-colors duration-300"
                  href={socialIcon.link}
                  key={socialIcon.name}
                >
                  {socialIcon.icon}
                  <span className="ml-1 text-md">{socialIcon.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-2 md:px-10 pt-2 text-center">
        <p className="text-sm">
          @{new Date().getFullYear()} Sceptixclub. All rights reserved.
          <br />
        </p>
      </div>
    </footer>
  );
};

export default Footer;