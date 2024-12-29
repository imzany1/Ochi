import { motion } from "framer-motion";
import React from "react";
import { Parallax } from "react-scroll-parallax";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-0.3" className="w-full lg:h-screen md:h-[80vh] bg-zinc-900 pt-1">
      <div className="textstructure mt-28 px-6 md:mt-24 lg:mt-32 md:px-20">
        {["We create", "eye opening", "presentations"].map((items, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "13vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[13vw] h-[4vh] top-[1vh] md:h-[6.5vh] lg:h-[5.4vw] z-0 relative flex justify-center items-center lg:top-3 md:top-[1.2vh] bg-green-500 text-white rounded-md"
                  >
                    <img src=".src/assets/Navlogo.svg" alt="" className="md:size-16 lg:size-24 xl:size-32"/>
                  </motion.div>
                )}
                <h1 className="uppercase text-nowrap text-[12vw] leading-10 md:text-[9vw] md:leading-[8vw] md:tracking-tight lg:text-[7vw] lg:leading-[6.5vw] tracking-tighter font-bold">
                  {items}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-600 mt-12 md:mt-16 lg:mt-20 flex flex-col items-center text-nowrap gap-4 md:flex md:flex-row  md:justify-between md:items-center py-5 md:px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((items, index) => {
          return (
            <p
              key={index}
              className="text-md font-light md:text-[2vw] lg:text-[1.5vw] tracking-tighter leading-none"
            >
              {items}
            </p>
          );
        })}
        <div className="start ">
          <button className="px-5 py-2 border-[1px] uppercase font-light text-md border-zinc-400 rounded-full ">
            Start the project &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
