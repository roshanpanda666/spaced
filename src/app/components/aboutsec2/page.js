"use client"
import React from 'react'
import Buttonpage from '../button/page'
import { motion } from "framer-motion"

const Secondabout = () => {
  return (
    <div>
      <div className='flex justify-center items-center lg:space-x-10 mt-44 lg:space-y-0 space-y-8 lg:flex-row flex-col'>

          <div className='lg:h-[80vh] h-[40vh] lg:w-[35vw] w-[80vw] flex-col flex lg:text-start text-center'>
              <div className='font-mono text-orange-200 lg:text-[1.3rem] text-[0.7rem]'>
                features we offer
              </div>
              <div className='text-white font-mono text-[2rem] lg:text-[3rem] font-extrabold'>
                Hotel Booking And
              </div>
              <div className='text-white font-mono text-[2rem] lg:text-[3rem] lg:-mt-5 font-extrabold'>
                Accommodation
              </div>
              <div className='text-gray-300 font-mono text-[0.5rem] lg:text-[0.8rem]'>
                  for many we have been standing along in this business<br></br>
                  for us this is not only a tourism company this a dream 
                  <br></br>
                  dream of you,remember when you ware a kid and you wanted to visit planets<br></br>
                  with us you can live that dream
              </div>


              <div className='flex mt-12 flex-col'>  
                
                <div className='flex lg:space-x-10 justify-center items-center lg:justify-start lg:items-start'>
                <div className='mt-[2rem] flex lg:scale-200 scale-100'>
                  <Buttonpage name='Booking'></Buttonpage>
                </div>
                </div>
                
              </div>
          </div>

          <div className='lg:h-[80vh] h-[30vh] lg:w-[35vw] w-[80vw] lg:-mt-0 -mt-[20rem]'>
            <motion.img src="room3.jpg" alt="" className='opacity-90 absolute z-50 lg:w-[30vw] w-[70vw]'
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
            <motion.img src="building.jpg" alt="" className='opacity-70 relative lg:mt-52 mt-24 lg:ml-40 ml-5'
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
      </div>
    </div>
  )
}

export default Secondabout
