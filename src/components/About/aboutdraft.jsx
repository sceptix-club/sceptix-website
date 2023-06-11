import React from 'react';
import Footer from '../footer/footer.jsx';

const AboutUs = () => {
  return (
    <>
    <div className=" mx-auto  shadow-md overflow-hidden sm:pt-11">
      
      <div className="lg:flex">
        
        <div className="p-8 sm:pl-16 pt-14 sm:pt-0">
          <div className="uppercase tracking-wide text-2xl sm:text-6xl text-indigo-500 font-bold text-center sm:text-left">About Us</div>
            <p className="sm:mt-12 mt-4 text-white sm:text-xl">
              Welcome to The sceptix club, where freedom and innovation converge. We are dedicated to empowering individuals with the liberating force of open-source software. Over the past year, we have conducted engaging sessions, organized Linux installation drives, and hosted captivating coding events and hackathons. Together, we have witnessed the transformative power of collaboration and the limitless possibilities it brings.
            </p>
            <p className="mt-2  sm:mt-4 text-white sm:text-xl">
              As we forge ahead, our commitment to expanding our community and contributing to larger-scale open-source projects burns brighter than ever. Join us at The sceptix club and let's celebrate the journey of freedom, creativity, and boundless minds.
            </p>
            
        </div>

        <div className="lg:shrink">
          <img className="h-48 w-full object-cover lg:h-full lg:w-auto" src="/src/components/About/group.jpg" alt="About"/>
        </div>
        
      </div>
      

    </div>
    {/* <div className='p-8 sm:pl-16 text-center mt-16'>
            <p className="mt-2   text-white sm:text-xl">
              As we forge ahead, our commitment to expanding our community and contributing to larger-scale open-source projects burns brighter than ever. Join us at The sceptix club and let's celebrate the journey of freedom, creativity, and boundless minds.
            </p>
      </div> */}
    
    <section className="mt-80">
       <Footer />
    </section>
    </>
  );
};

export default AboutUs;

{/* <div>
<section id="about" className="bg-gray-900 py-10">

<div className="container grid grid-cols-1 xl:grid-cols-2 gap-6 mt-12 bg-gray-900 py-10">
  <div>
    <h2 className="text-6xl font-mono text-center font-bold mb-14 bg-clip-text text-transparent bg-gradient-to-r  from-green-400 to-sky-400 ">About Us </h2>    {/* from-sky-500 from-1%  to-purple-400 to-70%
    <p className=" text-xl font-mono ml-20 text-white text-center xl:text-left ">
      <p>
        Welcome to The sceptix club, where freedom and innovation converge. We are dedicated to empowering individuals with the liberating force of open-source software. Over the past year, we have conducted engaging sessions, organized Linux installation drives, and hosted captivating coding events and hackathons. Together, we have witnessed the transformative power of collaboration and the limitless possibilities it brings.
      </p>
      <br />
      <p>
        As we forge ahead, our commitment to expanding our community and contributing to larger-scale open-source projects burns brighter than ever. Join us at The sceptix club and let's celebrate the journey of freedom, creativity, and boundless minds.
      </p>
    </p>
  </div>

  <div>
    <img src="src/components/About/group.jpg" alt="About Us" className=" xl:ml-6 w-full xl:w-10/12 h-auto my-20 transition duration-200 ease-out hover:ease-in hover:shadow-2xl hover:shadow-[#40cac8]" />
  </div>

</div>

</section>
</div>*/}