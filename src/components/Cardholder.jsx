import React, { useState } from 'react';
import Card from './Card';

const CardHolder = () => {
    const [swidth, setSwidth] = useState(window.innerWidth);
  const cardsData = [
    {
      logo: 'src/assets/logo.svg',
      title: '',
      subtitle: '©2019–2022',
      width: (swidth<700)?'100%':'50%', // This will be managed via Tailwind on responsive breakpoints
      bgColor: '#004d43',
    },
    {
      logo: 'src/assets/logo002.svg',
      title: '',
      subtitle: 'Rating 5.0 on Clutch',
      width: (swidth<700)?'100%':'25%',
      bgColor: '#222',
    },
    {
      logo: 'src/assets/logo003.png',
      title: '',
      subtitle: 'Business Bootcamp Alumni',
      width: (swidth<700)?'100%':'25%', 
      bgColor: '#222',
    },
  ];

  return (
    <div className="flex flex-col w-full md:flex-row justify-between mt-12 border-t-[1px] border-zinc-600 min-h-screen py-24 px-8 lg:px-20 bg-zinc-900 gap-6">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          logo={card.logo}
          title={card.title}
          subtitle={card.subtitle}
          width={card.width}
          bgColor={card.bgColor}
        />
      ))}
    </div>
  );
};

export default CardHolder;
