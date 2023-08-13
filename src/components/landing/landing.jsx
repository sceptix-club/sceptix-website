import React, { useEffect, useRef, useState } from "react";
// import { useSpring, config } from "react-spring";
import Sidebar from "../sidenav/sidebar";

const Landing = () => {
  // const leftRef = useRef(null);
  // const [animate, setAnimate] = useState(false);
  // const [x, setX] = useState(100);

  // const [tweenWipe, setTweenWipe] = useSpring(() => ({
  //   from: { value: 100 },
  //   // config: config.cubicOut,
  // }));

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTweenWipe({ value: 85 });
  //     setAnimate(true);
  //   }, 1000);
  // }, [setTweenWipe]);

  // const handleOnMove = (e) => {
  //   const newX = (e.clientX / window.innerWidth) * 100;
  //   setX(newX);
  //   if (animate) {
  //     leftRef.current.style.width = `${newX}%`;
  //   }
  // };

  return (
    <main
      className="lg: h-screen overflow-hidden relative"
      // onPointerMove={handleOnMove}
    >
      <div
        id="left-img"
        className="lg:w-1/2 h-screen absolute z-30 right-0 bg-transparent "
      ></div>
      <div
        className=" lg:h-screen w-5/12 overflow-hidden absolute z-20 bg-[#00070e] text-stone-50 rounded-r-full hover:w-full hover:rounded-none transition-all duration-500 ease-in-ease-out"
        id="left-box"
        // ref={leftRef}
        // style={{ width: tweenWipe.value.interpolate((val) => `${val}%`) }}
      >
        <div className="lg:w-screen h-screen flex flex-row justify-items-stretch absolute  p-10 z-10">
          <img
            src="/l3.png"
            alt="logo"
            className=" lg:w-auto justify-center items-center animate-pulse mix-blend-multiply transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."
          />
          <div className="hidden lg:flex flex-col items-center justify-center">
            <h1 className="lg:font-bold text-7xl my-6">
              The{" "}
              <span className="lg:code bg-clip-text text-transparent bg-gradient-to-r from-[#2afadf] to-sky-600">
                freedom
              </span>{" "}
              club
            </h1>
            <h3 className="lg:text-3xl font-mono items-center">
              Unchain Your Will
            </h3>
          </div>
        </div>
        <Sidebar />
      </div>

      <div
        className=" lg:h-screen w-screen flex flex-row overflow-hidden absolute  z-10 justify-items-stretch p-10 bg-cyan-100 text-stone-950 "
        id="right-box"
      >
        <img
          src="/l3.png"
          alt="logo"
          className="  lg:w-auto justify-center items-center"
        />
        <div className=" hidden lg:flex flex-col justify-center items-center ">
          <h1 className="lg: font-bold text-7xl my-6 ">
            The{" "}
            <span className="lg:code bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 ">
              sceptix
            </span>{" "}
            club
          </h1>
          <h3 className="lg:text-3xl font-mono items-center ">Liberate The Mind</h3>
        </div>
        
        <div id="right-img" className="lg:w-screen h-screen absolute z-0"></div>
      </div>
      {/* EDited */}
      <div
        className="h-screen w-screen/3 absolute  z-10 justify-items-stretch p-10 bg-slate-950   text-stone-950 lg:hidden"
        id="right-box"
      >
        <img
          src="/l3.png"
          alt="logo"
          className="  w-auto justify-center items-center"
        />
        <div className="flex flex-col justify-center items-center ">
          <h1 className=" font-bold text-7xl text-slate-50 my-6  lg:hidden ">
            The{" "}
            <span className="code bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 ">
              sceptix
            </span>{" "}
            club
          </h1>
          <h3 className="text-3xl font-mono items-center ">
            Liberate The Mind
          </h3>
        </div>
        
        <div id="right-img" className="lg:w-screen h-screen absolute z-0"></div>
      </div>

    </main>
  );
};


export default Landing;
