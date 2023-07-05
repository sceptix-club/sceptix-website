import React, { useState, useEffect, useRef } from "react";
import "./timeline.css";
import AOS from "aos";
import "aos/dist/aos.css";

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

  let scrollValue = isVisible ? "h-full duration-2000" : "h-0";

  return (
    <div className="flex justify-center line-div">
      <div
        ref={lineRef}
        className={`bg-blue-800 w-o border-[1px] scrolled ${scrollValue}`}
      ></div>
    </div>
  );
}

function Timeline() {
  return (
    <div>
      <div className="text-center">
      <h1 className="py-10 text-6xl font-bold mb-9 pb-10 bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent">
          Timeline
        </h1>
      </div>
      <div className=" flex justify-center main-div">
        <div>
          <div className=" h-full max-w-4xl rounded bg-white  p-0">
            <p className="p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              necessitatibus rerum minima dolore earum minus dolor dignissimos
              atque labore quos voluptatibus, doloribus sit dolores sint
              eligendi quae officiis laboriosam exercitationem repudiandae
              voluptates ut non! Aliquam quas tenetur voluptatum veniam
              obcaecati? Numquam corrupti quis doloremque quod nam excepturi
              officiis debitis atque.
            </p>
          </div>
        </div>
      </div>
      <Line />
      <div className=" flex justify-center main-div">
        <div>
          <div className=" h-full max-w-4xl  rounded bg-white  p-0">
            <p className="p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              necessitatibus rerum minima dolore earum minus dolor dignissimos
              atque labore quos voluptatibus, doloribus sit dolores sint
              eligendi quae officiis laboriosam exercitationem repudiandae
              voluptates ut non! Aliquam quas tenetur voluptatum veniam
              obcaecati? Numquam corrupti quis doloremque quod nam excepturi
              officiis debitis atque.
            </p>
          </div>
        </div>
      </div>
      <Line />
      <div className=" flex justify-center main-div">
        <div>
          <div className=" h-full max-w-4xl rounded bg-white  p-0">
            <p className="p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              necessitatibus rerum minima dolore earum minus dolor dignissimos
              atque labore quos voluptatibus, doloribus sit dolores sint
              eligendi quae officiis laboriosam exercitationem repudiandae
              voluptates ut non! Aliquam quas tenetur voluptatum veniam
              obcaecati? Numquam corrupti quis doloremque quod nam excepturi
              officiis debitis atque.
            </p>
          </div>
        </div>
      </div>
      <Line />
      <div className=" flex justify-center main-div">
        <div>
          <div className=" h-full max-w-4xl rounded bg-white  p-0">
            <p className="p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              necessitatibus rerum minima dolore earum minus dolor dignissimos
              atque labore quos voluptatibus, doloribus sit dolores sint
              eligendi quae officiis laboriosam exercitationem repudiandae
              voluptates ut non! Aliquam quas tenetur voluptatum veniam
              obcaecati? Numquam corrupti quis doloremque quod nam excepturi
              officiis debitis atque.
            </p>
          </div>
        </div>
      </div>
      <Line />
      <div className=" flex justify-center main-div">
        <div>
          <div className=" h-full max-w-4xl rounded bg-white  p-0">
            <p className="p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              necessitatibus rerum minima dolore earum minus dolor dignissimos
              atque labore quos voluptatibus, doloribus sit dolores sint
              eligendi quae officiis laboriosam exercitationem repudiandae
              voluptates ut non! Aliquam quas tenetur voluptatum veniam
              obcaecati? Numquam corrupti quis doloremque quod nam excepturi
              officiis debitis atque.
            </p>
          </div>
        </div>
      </div>
      <Line />
      <div className=" flex justify-center main-div">
        <div>
          <div className=" h-full max-w-4xl rounded bg-white  p-0">
            <p className="p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              necessitatibus rerum minima dolore earum minus dolor dignissimos
              atque labore quos voluptatibus, doloribus sit dolores sint
              eligendi quae officiis laboriosam exercitationem repudiandae
              voluptates ut non! Aliquam quas tenetur voluptatum veniam
              obcaecati? Numquam corrupti quis doloremque quod nam excepturi
              officiis debitis atque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
