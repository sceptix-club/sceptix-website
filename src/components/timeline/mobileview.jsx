import React, { useState, useEffect, useRef } from "react";
import "./timeline.css";
import AOS from "aos";
import "aos/dist/aos.css";
import timelineElements from "./timelineElements";

AOS.init();

function Line() {
  const [isVisible, setIsVisible] = useState(false);
  const lineRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0, // Adjust this value as per your requirement
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  let scrollValue = isVisible ? "h-[490px] duration-2000" : "h-0";

  return (
    <div>
    <div className="flex justify-center line-div">
      <div
        ref={lineRef}
        className={`bg-blue-800  w-o border-[1px] scrolled ${scrollValue}`}
      ></div>
    </div>

    
    
    </div>
  );
}

function MobileViewTimeline() {
  return (
    <div className="bg-[#00070e] pb-4">
      <div className="text-center">
      <h1 className="py-10 text-6xl font-bold mb-9 pb-10 bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent">
      History of FOSS
        </h1>
      </div>
      <div className=" flex justify-center main-div">
        <div>
        {timelineElements.map((element)=>{
        return(
        <div className=" flex justify-center main-div mt-10">
        <div>
          <div className="h-full max-w-2xl border-2   border-[#7c7b7c] rounded-xl text-2xl bg-black text-white  p-4">
          <h1 className="p-6 text-4xl font-bold mb-9 text-center bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
          {element.title}
        </h1>
            <p className="px-6">
               {element.description}
            </p>
          </div>
        </div>
      </div>
      )

    })}
        </div>
      </div>
      
      
      
      
    </div>
  );
}

export default MobileViewTimeline;