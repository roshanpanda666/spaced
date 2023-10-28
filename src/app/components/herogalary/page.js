import React from 'react'
import Buttonpage from '../button/page'
import { motion } from "framer-motion"
const Herogalarypage = () => {
  return (
    <div>
        <div className='flex justify-center lg:flex-row flex-col lg:space-x-24'>
            <div className=' h-60 lg:w-[30vw] w-[80vw]'>
                <div className='flex flex-col'>
                    <motion.img src="=redmountain.png" alt="" className='absolute lg:w-[43%] w-[80%]'
                    whileHover={{
                        scale: 1.1,
                    }}
                    transition={{
                        type:"spring",
                        stiffness:40
                    }}

                    />

                    <div className='flex flex-row lg:space-x-40 space-x-10 justify-start items-center'>
                        <div className='flex justify-start items-start lg:space-x-6 relative lg:pt-44 pt-28'>
                            <div className='w-2 h-12 bg-red-500'>

                            </div>
                            <div className=' flex flex-col text-center'>
                                <div className='font-mono font-semibold'>
                                    never ending sun
                                </div>
                                <div className='font-mono font-semibold'>
                                    location:Moon
                                </div>
                                
                            </div>
                        </div>
                        <div className='relative lg:pt-44 pt-28'>
                            <Buttonpage name="ENTER"></Buttonpage>
                        </div>
                            
                    </div>

                    
                       
                    
                </div>
            </div>

            

            <div className=' h-60 lg:w-[30vw] w-[80vw] lg:mt-0 mt-6'>
            <div className='flex flex-col'>
                    <motion.img src="dragonpit.jpg" alt="" className='absolute lg:w-[43%] w-[80vw]'
                    whileHover={{
                        scale: 1.1,
                    }}
                    transition={{
                        type:"spring",
                        stiffness:40
                    }}
                    
                    />

                    <div className='flex flex-row lg:space-x-40 space-x-14 justify-start items-center'>
                        <div className='flex justify-start items-start lg:space-x-6 relative lg:pt-44 pt-28 '>
                            <div className='w-2 h-12 bg-red-400'>

                            </div>
                            <div className=' flex flex-col text-center'>
                                <div className='font-mono font-semibold'>
                                    the dragon pit
                                </div>
                                <div className='font-mono font-semibold'>
                                    location:pluto
                                </div>
                                
                            </div>
                        </div>
                        <div className='relative lg:pt-44 pt-28'>
                            <Buttonpage name="ENTER"></Buttonpage>
                        </div>
                            
                    </div>

                    
                       
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Herogalarypage
