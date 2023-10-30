"use client"
import React from 'react'
import Buttonpage from '../button/page'
import { motion } from "framer-motion"

const Commentsabout = () => {
  return (
    <div>
      <div className='flex justify-center items-center lg:space-x-10 mt-44 lg:space-y-0 space-y-8 lg:flex-row flex-col'>

      <div className='lg:h-[80vh] h-[40vh] lg:w-[35vw] w-[80vw] lg:-mt-0 '>
            <motion.img src="spaceman1.jpg" alt="" className='opacity-90 absolute z-50 lg:w-[30vw] w-[70vw]'
            initial={{
                opacity:0,
                scale:0
            }}
            transition={{
                delay:0.2
            }}
            whileInView={{
                opacity:1,
                scale:1
            }}
            />
            <motion.img src="spacexjpg.jpg" alt="" className='opacity-70 relative lg:mt-52 mt-24 lg:ml-8 ml-5'
            initial={{
                opacity:0,
                scale:0
            }}
            whileInView={{
                opacity:1,
                scale:1
            }}
            />
          </div>

          <div className='lg:h-[80vh] h-[50vh] lg:w-[35vw] w-[80vw] flex-col flex lg:text-start text-center'>
              <div className='font-mono text-orange-200 lg:text-[1.3rem] text-[0.7rem]'>
                still not convinced ?
              </div>
              <div className='text-white font-mono text-[2rem] lg:text-[3rem] font-extrabold'>
                look what others
              </div>
              <div className='text-white font-mono text-[2rem] lg:text-[3rem] lg:-mt-5 font-extrabold'>
                saying about us
              </div>
              <div className='text-white font-mono text-[2rem] lg:text-[3rem] lg:-mt-5 font-extrabold'>
                ;;
              </div>
              <div className='text-gray-300 font-mono text-[0.5rem] lg:text-[0.8rem]'>
                  for many we have been standing along in this business<br></br>
                  for us this is not only a tourism company this a dream 
                  
              </div>


              <div className='flex mt-12 flex-col'>  
                
                <div className='flex lg:space-x-10 justify-center items-center lg:justify-start lg:items-start space-x-5'>
                <div className='lg:mt-[2rem] flex lg:scale-200 scale-100'>
                  <Buttonpage name='Elon chaha'></Buttonpage>
                </div>

                <div className='lg:mt-[2rem] flex lg:scale-200 scale-100'>
                  <Buttonpage name='jeffu'></Buttonpage>
                </div>

                <div className='lg:mt-[2rem] flex lg:scale-200 scale-100'>
                  <Buttonpage name='zukkku'></Buttonpage>
                </div>
                </div>
                
              </div>

              
          </div>

         
      </div>
    </div>
  )
}

export default Commentsabout
