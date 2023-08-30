import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import Image from "./L1.png";
const HandleClick = ()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}
const Footer2 = () => {
  return (
    <footer className="bg-black-700 py-4 text-white ">
      <hr className="border-t border-gray-1000 my-6" />
      <div className="container mx-auto px-6 md:px-10 mt-4 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
            <img
              src={Image}
              alt="logo"
              className="max-w-full h-auto w-21 mx-auto mb-2"
            />
            <p className="text-xl font-semibold">
              St. Joseph Engineering College
            </p>
            <p className="text-sm">Vamanjoor, Mangaluru, Karnataka 575028</p>
          </div>
          <div className="md:mt-3 lg:mt-0 justify-self-center space-y-4 md:space-y-0 md:flex md:items-center md:justify-center">
            <div className="mb-6 md:mb-0">
              <div onClick={HandleClick} className="flex space-x-4 mt-1">
                <Link
                  to="/"
                  className={`text-lg cursor-pointer mt-1 ${
                    location.pathname === "/"
                      ? "text-blue-500"
                      : "hover:text-blue-500"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/events"
                  className={`text-lg cursor-pointer mt-1 ${
                    location.pathname === "/events"
                      ? "text-blue-500"
                      : "hover:text-blue-500"
                  }`}
                >
                  Events
                </Link>
                <Link
                  to="/members"
                  className={`text-lg cursor-pointer mt-1 ${
                    location.pathname === "/members"
                      ? "text-blue-500"
                      : "hover:text-blue-500"
                  }`}
                >
                  Members
                </Link>
              </div>
            </div>
            <div className="md:mt-6 lg:mt-0">
              <div className="flex justify-center items-center space-x-4 md:flex-col md:space-x-0 md:space-y-2">
                <div className="flex items-center space-x-4 md:space-x-0">
                  <a
                    className="hover:text-blue-500 transition-colors duration-300"
                    href="https://github.com/sceptix-club"
                  >
                    <AiFillGithub size={24} />
                    <span className="hidden md:inline ml-2">Github</span>
                  </a>
                  <a
                    className="hover:text-blue-500 transition-colors duration-300"
                    href="https://www.linkedin.com/company/sceptix/"
                  >
                    <AiFillLinkedin size={24} />
                    <span className="hidden md:inline ml-2">LinkedIn</span>
                  </a>
                </div>
                <div className="flex items-center space-x-4 md:space-x-0">
                  <a
                    className="hover:text-blue-500 transition-colors duration-300"
                    href="https://www.instagram.com/sceptix_sjec/"
                  >
                    <AiFillInstagram size={24} />
                    <span className="hidden md:inline ml-2">Instagram</span>
                  </a>
                  <a
                    className="hover:text-blue-500 transition-colors duration-300"
                    href="mailto:sceptix@sjec.ac.in"
                  >
                    <AiFillMail size={24} />
                    <span className="hidden md:inline ml-2">Mail</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-10 pt-8 text-center">
        <p className="text-md">
          @{new Date().getFullYear()} Sceptixclub. All rights reserved.
          <br />
        </p>
      </div>
    </footer>
  );
};

export default Footer2;
