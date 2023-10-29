"use client"
import Navpage from '../navbaar/page'
import Heroformpage from '../heroform/page'
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import Herogalarypage from '../herogalary/page';
import Aboutpage from '../aboutpage/page';
import Suitspecabout from '../suitspecsabout/page';

const Heropage = () => {
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    // Simulate a delay of 3 seconds before showing the main content
    const delay = 4000;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Clear the timer to prevent any issues if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div>
      {isLoading ? (
        <div className='flex items-center justify-center flex-col'>
        <div className='text-center mt-60 font-mono text-2xl text-orange-200'>Loading...</div> 

        <motion.div className='h-24 w-24 border-2 border-orange-200 mt-10'
        animate={{
          rotateX: 380,
          rotateY:380,
          rotateZ:380
        }}
      

        transition={{
          type:'spring',
          stiffness:40,
          repeat:3
        }}
        ></motion.div>
        
        </div>
      ) : (
        <div>
        <div className='h-[100vh] w-[99%]  flex flex-col justify-center items-center '>
        {/* image */}
        <div className='w-[99%]'>
        <img src="bghero.jpg" alt="" className='absolute lg:w-[99%] w-[98%] lg:h-auto h-[80vh]  -mt-5 opacity-50 '/>
        </div>
        
        <div className='flex justify-center items-center relative flex-col'>
            <div className=' h-[95vh] w-[98vw] lg:w-[70vw] '>
                <div className='w-[100%] h-[6vh] '>
                    <Navpage></Navpage>
                </div>
                <div className='flex justify-center items-center flex-col lg:mt-32'>
                    <motion.div className='font-bold lg:text-3xl text-[20px] font-mono lg:mt-0 mt-32  text-white z-auto'
                    initial={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 2,
                    }}
                    whileInView={{
                      opacity:1
                    }}
                    >
                        To space.and back.
                    </motion.div>
                    <motion.div className='font-extrabold lg:text-[170px] text-[100px]  text-orange-200'
                    initial={{
                      y:100,
                      opacity:0
                    }}
                    transition={{
                      type:'spring',
                      stiffness:20
                    }}
                    whileInView={
                      { 
                        opacity:1,
                        y:1,
                        
                      }
                    }
                    
                    >
                        Safely
                    </motion.div>
                    <motion.div className='text-center font-mono lg:text-[15px] text-[15px] text-gray-300'
                    initial={{
                        opacity:0
                    }}
                    whileInView={{
                      opacity:1
                    }}
                    >
                        ever wanted to visit marse,jupiter or pluton<br></br>
                        with us you can do everything
                    </motion.div>
                </div>

                <div className='flex justify-center items-center mt-10'>
                  <Heroformpage></Heroformpage>
                </div>

                <div className='flex justify-center items-center mt-8'>
                  <Herogalarypage></Herogalarypage>
                </div>

                <div className='lg:mt-52 flex justify-center item center'>
                  <Aboutpage></Aboutpage>
                </div>

                <div className='flex justify-center item-center'>
                  <Suitspecabout></Suitspecabout>
                </div>

            </div>
            
        </div>
      </div>
        </div>
      )}
    </div>
      
      
      

    </div>
  )
}

export default Heropage
