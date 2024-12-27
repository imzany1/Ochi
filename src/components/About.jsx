import React from "react";

function About() {
  return (
    <div data-scroll data-scroll-section className="w-full z-50 py-5 md:py-10 px-8 md:px-20  bg-[#cdea68] relative text-black">
      <h1 className="text-[6vw] md:text-[4vw] leading-6 md:leading-[4vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] pt-6 mt-10 md:mt-16 border-[#8ea04a] md:flex md:flex-row flex flex-col gap-4">
        <div className="md:w-1/2">
          <h1 className="text-2xl lg:text-4xl">Our Approach</h1>
          <button className=" flex items-center uppercase text-sm md:text-base lg:text-lg gap-4 lg:gap-6 px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 bg-zinc-900 rounded-full mt-2 md:mt-6 text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="md:w-1/2 h-[65vw] md:h-[30vh] lg:h-[60vh] xl:h-[70vh] bg-[#004d43] rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About;
