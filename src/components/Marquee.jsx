import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div  data-scroll data-scroll-speed="0.1" data-scroll-section className='w-full py-10 md:py-14 bg-[#004d43] rounded-t-2xl overflow-hidden'>
        <div className="text border-t-2 border-b-2 flex whitespace-nowrap border-zinc-400">
            <motion.h1 initial={{x: '0'}} animate={{x: '-100%'}} transition={{repeat: Infinity, ease:"linear", duration:10 }} className='md:text-[24vw] text-[32vw] leading-[17vw] font-semibold tracking-tighter uppercase md:mb-[vh] mb-[8vw] md:mt-[0] mt-[6vw] pr-10'>We are Ochi</motion.h1>
            <motion.h1 initial={{x: '0'}} animate={{x: '-100%'}} transition={{repeat: Infinity, ease:"linear", duration:10 }} className='md:text-[24vw] text-[32vw] leading-[17vw] font-semibold tracking-tighter uppercase md:mb-[vh] mb-[8vw] md:mt-[0] mt-[6vw] pr-10'>We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee