import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 py-10">
      <div className="container grid grid-cols-2 gap-2  ml-20">
        <div>
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 from-2% to-purple-400 to-20% ">About Us </h2>
          <p className="mb-4">
          Welcome to The sceptix club, where freedom and innovation converge. We are dedicated to empowering individuals with the liberating force of open-source software. Over the past year, we have conducted engaging sessions, organized Linux installation drives, and hosted captivating coding events and hackathons. Together, we have witnessed the transformative power of collaboration and the limitless possibilities it brings. As we forge ahead, our commitment to expanding our community and contributing to larger-scale open-source projects burns brighter than ever. Join us at The sceptix club and let's celebrate the journey of freedom, creativity, and boundless minds
          </p>
        </div>
        <div>
          <img src="src/components/About/group.jpg" alt="About Us" className="w-full md:w-1/2 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
