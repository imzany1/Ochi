import React from 'react';

const Card = ({ logo, title, subtitle, width, bgColor }) => {
return (
    <div
        className={`text-white h-[50vh] md:h-[40vh] lg:h-[70vh] rounded-lg relative flex flex-col items-center shadow-lg w-full md:w-auto`}
        style={{
            width: width,
            backgroundColor: bgColor, // Dynamically set background color
        }}
    >
        <img
            src={logo}
            alt={title}
            className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] md:w-20 lg:w-28  "
        />
        <h3 className="text-xl font-semibold mb-2 absolute top-2/3 left-1/2 translate-y-[-50%] translate-x-[-50%] whitespace-nowrap">
            {title}
        </h3>
        <p className="text-xs text-wrap text-center absolute bottom-5 lg:left-5 border-[1px] px-1 lg:px-3 py-2 rounded-full">
            {subtitle}
        </p>
    </div>
);
};

export default Card;
