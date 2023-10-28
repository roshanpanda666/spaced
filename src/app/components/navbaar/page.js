import React from 'react'
import Buttonpage from '../button/page'
import { motion } from 'framer-motion'
import { useGlitch } from 'react-powerglitch'
const Navpage = () => {
    const glitch = useGlitch();
  return (
    <div>
      <motion.div className='flex justify-center items-center lg:space-x-[33vw] space-x-[60vw]'
      initial={{
        y:-10
      }}
      transition={{
        type:'spring',
        stiffness:40
      }}
      whileInView={{
        y:1
      }}
      >
            <div className='text-center space-x-1'>
            <span ref={glitch.ref}>
        <span className='text-orange-200'>S</span><span>P</span><span className='text-orange-200'>A</span><span>C</span><span>E</span><span>D</span>
        </span>
                
            </div>
            <div className='hidden lg:block'>
            <div className='flex justify-center items-center space-x-6 text-gray-300 '>
                <div>
                    about
                </div>
                <div>
                    how it works
                </div>
                <div>
                    testimonials
                </div>
                <div className='text-white text-[20px]'>
                    <Buttonpage name="book now"></Buttonpage>
                </div>
            </div>
            </div>
            <div className='flex-col lg:hidden block text-orange-200'>
                ...
            </div>
            
      </motion.div>
    </div>
  )
}

export default Navpage
