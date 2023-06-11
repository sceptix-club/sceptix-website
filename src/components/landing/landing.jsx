import React, { useEffect, useRef, useState } from "react";
import { useSpring, config } from "react-spring";
import Sidebar from "../sidenav/sidebar";

const Landing = () => {
  const leftRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [x, setX] = useState(100);

  const [tweenWipe, setTweenWipe] = useSpring(() => ({
    from: { value: 100 },
    config: config.cubicOut,
  }));

  useEffect(() => {
    setTimeout(() => {
      setTweenWipe({ value: 85 });
      setAnimate(true);
    }, 1000);
  }, [setTweenWipe]);

  const handleOnMove = (e) => {
    const newX = (e.clientX / window.innerWidth) * 100;
    setX(newX);
    if (animate) {
      leftRef.current.style.width = `${newX}%`;
    }
  };

  return (
    <main
      className="h-screen overflow-hidden relative"
      onPointerMove={handleOnMove}
    >
      <div
        className="h-screen w-full overflow-hidden absolute z-20 bg-cyan-100 text-stone-950"
        id="left-box"
        ref={leftRef}
        style={{ width: tweenWipe.value.interpolate((val) => `${val}%`) }}
      >
        <div className="w-screen h-screen flex flex-col items-center justify-center absolute z-10">
          <h1 className="font-bold text-7xl my-6">
            The{" "}
            <span className="code bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 ">
              sceptix
            </span>{" "}
            club
          </h1>
          <h3 className="text-3xl font-mono">Liberate The Mind</h3>
        </div>
        <Sidebar />
      </div>

      <div
        className="h-screen w-full overflow-hidden absolute z-10 bg-[#00070e] text-stone-50"
        id="right-box"
      >
        <div className="w-full h-screen flex flex-col items-center justify-center absolute z-10">
          <h1 className="font-bold text-7xl my-6">
            The{" "}
            <span className="code bg-clip-text text-transparent bg-gradient-to-r from-[#2afadf] to-sky-600">
              freedom
            </span>{" "}
            club
          </h1>
          <h3 className="text-3xl font-mono">Unchain Your Will</h3>
        </div>
        <div id="right-img" className="w-screen h-screen absolute z-0"></div>
      </div>
    </main>
  );
};

export default Landing;
