"use client"
import React from 'react'
import { motion } from "framer-motion"
const Aboutpage = () => {
  return (
    <div>
      <div className='flex justify-center items-center lg:space-x-16 space-y-5 flex-col lg:flex-row'>

        <div className=' lg:h-96 lg:w-[82vw] h-64 w-[80vw] flex'>
            <div>
                <img src="suit.gif" alt="" className='lg:w-[40vw] w-[80vw] absolute lg:ml-0 ml-6'
                
                />
            </div>
            <div className='flex-col flex space-y-3 text-[8px] lg:text-[1rem]'>
            <motion.div className=' relative lg:ml-1 mt-16 text-white font-mono'
            initial={{
                opacity:0,
                x:0
            }}
            whileInView={{
                opacity:1,
                x:1
            }}
            >
               nano carbon fiber <span className='text-white'>-------</span>
            </motion.div>
            
            
            <motion.div className=' relative lg:ml-1 mt-16 text-white font-mono'
            initial={{
                opacity:0,
                x:0
            }}
            transition={{
                delay:0.5
            }}
            whileInView={{
                opacity:1,
                x:1
            }}
            >
                life support <span className='text-white'>------------</span>
            </motion.div>
            
            <motion.div className=' relative lg:ml-1 mt-16 text-white font-mono'
            initial={{
                opacity:0,
                x:0
            }}
            transition={{
                delay:1
            }}
            whileInView={{
                opacity:1,
                x:1
            }}
            >
                Ai implemented <span className='text-white'>----------</span>
            </motion.div>
            <motion.div className=' relative lg:ml-1 mt-16 text-white font-mono'
            initial={{
                opacity:0,
                x:0
            }}
            transition={{
                delay:1.5
            }}
            whileInView={{
                opacity:1,
                x:1
            }}
            >
                artificial muscles <span className='text-white'>------</span>
            </motion.div>
            </div>
           
        </div>
        <div className=' pt-10 flex'>
            <img src="dragon.gif" alt="" className='w-full relative -ml-32 lg:-ml-[350px]' />
           
           <div className='flex-col flex space-y-3 text-[8px] lg:text-[1rem] lg:relative'>
            <motion.div className=' relative lg:ml-1 mt-16 text-white font-mono'
            initial={{
                opacity:0,
                x:0
            }}
            whileInView={{
                opacity:1,
                x:1
            }}
            >
              <span className='text-white'>-------</span> nano carbon fiber 
            </motion.div>
            
            
            <motion.div className=' relative lg:ml-1 mt-16 text-white font-mono'
            initial={{
                opacity:0,
                x:0
            }}
            transition={{
                delay:0.5
            }}
            whileInView={{
                opacity:1,
                x:1
            }}
            >
               <span className='text-white'>------------</span> life support 
            </motion.div>
            
            <motion.div className=' relative lg:ml-1 mt-16 text-white font-mono'
            initial={{
                opacity:0,
                x:0
            }}
            transition={{
                delay:1
            }}
            whileInView={{
                opacity:1,
                x:1
            }}
            >
              <span className='text-white'>----------</span>  Ai implemented 
            </motion.div>
            <motion.div className=' relative lg:ml-1 mt-16 text-white font-mono'
            initial={{
                opacity:0,
                x:0
            }}
            transition={{
                delay:1.5
            }}
            whileInView={{
                opacity:1,
                x:1
            }}
            >
              <span className='text-white'>------</span>  artificial muscles 
            </motion.div>
            </div>
           
        </div>
        

        


      </div>
      
    </div>
  )
}

export default Aboutpage
