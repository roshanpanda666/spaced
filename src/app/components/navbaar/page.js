"use client"
import React, { useState } from 'react'
import Buttonpage from '../button/page'
import { motion } from 'framer-motion'
const Navpage = () => {
    const[befortap,aftertap]=useState(false)
    function tapnav(){
        aftertap(!befortap)
    }
  return (
    <div>
      <div className='flex justify-center items-center lg:space-x-[33vw] space-x-[60vw]'>
            <div className='text-center space-x-1'>
                <span className='text-orange-200'>S</span><span>P</span><span className='text-orange-200'>A</span><span>C</span><span>E</span><span>D</span>
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
          <div className='lg:hidden block'>

          
            <div onClick={tapnav} className='flex-col lg:hidden block'>
                    ...
            </div>
            <div className={`${befortap?'block' :'hidden'}`}>
            <div className='flex-col lg:hidden'>

                
                <motion.div className='flex flex-col justify-center items-center text-white -ml-72 -mt-7 space-y-5 border-2 border-orange-200 w-72  h-44 lg:hidden'onClick={tapnav}
                initial={{
                    scaleX:0,
                    scaleY:0,
               
                }}
                transition={{
                    type:"spring",
                    stiffness:200
                }}
                whileInView={{
                    scaleX:1,
                    scaleY:1,
                   
                }}
                >
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
                </motion.div>

                </div>
            </div>

            </div>
            
            
            
            
      </div>
    </div>
  )
}

export default Navpage
