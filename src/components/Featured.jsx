import { motion } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const [hovering1, setHovering1] = useState(false);
  const [hovering2, setHovering2] = useState(false);
  return (
    <div className="w-full py-12">
      <div className="w-full px-8 md:px-20 border-b-[1px] border-zinc-700 pb-12 ">
        <h1 className="text-3xl md:text-5xl lg:text-7xl projects tracking-tight">Featured Projects</h1>
      </div>
      <div className="px-8 md:px-20">
        <div className="w-full flex flex-col sm:flex sm:flex-row gap-12 sm:gap-6 my-4">
          <div
            onMouseEnter={() => {
              setHovering1(true);
            }}
            onMouseLeave={() => {
              setHovering1(false);
            }}
            className="cardcontainer relative w-full sm:w-1/2 h-[40vh] lg:h-[80vh]"
          >
            <div className="heading mb-2 flex items-center gap-2">
              <h1 className="absolute flex overflow-hidden text-7xl left-full top-1/2 -translate-x-1/2 z-40 font-semibold text-[#cdea68]">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={hovering1? ({y:"0%"}): ({y:"100%"})}
                    transition={{easeInOut: [0.22, 1, 0.36, 1], delay: index*0.05}}
                    className="md:inline-block hidden "
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>

              {/* heading area */}
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h1 className="text-lg">FYDE</h1>
              {/* heading area end*/}
            </div>
            <div className="card w-full h-full hover:scale-[98%] rounded-xl transition-all overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="src\assets\Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </div>
          <div
           onMouseEnter={() => {
            setHovering2(true);
          }}
          onMouseLeave={() => {
            setHovering2(false);
          }}
          className="cardcontainer relative w-full sm:w-1/2 h-[40vh] lg:h-[80vh]">
            <h1 className="absolute flex overflow-hidden text-7xl right-full top-1/2 translate-x-1/2 z-40 font-semibold text-[#cdea68]">
              {"VISE".split("").map((item, index) => (
                <motion.span
                initial={{ y: "100%" }}
                animate={hovering2? ({y:"0%"}): ({y:"100%"})}
                transition={{ease: [0.22, 1, 0.36, 1], delay: index*0.1}}
                className="md:inline-block hidden "
                key={index}
              >
                {item}
              </motion.span>
              ))}
            </h1>
            <div className="heading mb-2 flex items-center gap-2">
              {/* heading area */}
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <h1 className="text-lg">VISE</h1>
              {/* heading area end*/}
            </div>
            <div className="card w-full h-full hover:scale-[98%] rounded-xl transition-all overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="src\assets\09ce62e5-4f11-4b65-b1f6-6e2714f1849d.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
