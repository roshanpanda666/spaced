"use client"
import Navpage from '../navbaar/page'
import Heroformpage from '../heroform/page'

import { motion } from "framer-motion"

const Heropage = () => {
  return (
    <div>
      <div>
        <div>
        <div className='h-[100vh] w-[99%] border-2 border-red-400 flex flex-col justify-center items-center '>
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
                    <motion.div className='font-bold lg:text-3xl text-[20px] font-mono lg:mt-0 mt-32  text-white'
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

            </div>
            
        </div>
      </div>
        </div>

    </div>
      
      
      

    </div>
  )
}

export default Heropage
