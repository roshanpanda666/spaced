"use client"
import React from 'react'
import Buttonpage from '../button/page'
import { motion } from "framer-motion"
const Suitspecabout = () => {
  return (
    <div>
      <div className='flex justify-center items-center lg:space-x-10 mt-44 lg:space-y-0 space-y-8 lg:flex-row flex-col'>

          <div className='lg:h-[80vh] h-[50vh] lg:w-[35vw] w-[80vw] lg:mt-0 mt-8'>
            <motion.img src="starmanwithd.jpg" alt="" className='opacity-70'
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
                Don't know who we are ?
              </div>
              <div className='text-white font-mono text-[2rem] lg:text-[3rem] font-extrabold'>
                Let us gain
              </div>
              <div className='text-white font-mono text-[2rem] lg:text-[3rem] lg:-mt-5 font-extrabold'>
                Your Trust
              </div>
              <div className='text-gray-300 font-mono text-[0.5rem] lg:text-[0.8rem]'>
                  for many we have been standing along in this business<br></br>
                  for us this is not only a tourism company this a dream 
                  <br></br>
                  dream of you,remember when you ware a kid and you wanted to visit planets<br></br>
                  with us you can live that dream
              </div>

              <div className='flex mt-12 lg:space-x-16'>
                <div className='flex flex-col'>
                    <div className='text-white font-mono lg:text-[3rem]'>
                      100%
                    </div>
                    <div className='text-orange-200 font-mono text-[0.8rem]'>
                      successful landings
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='text-white font-mono lg:text-[3rem]'>
                      NO 1  
                    </div>
                    <div className='text-orange-200 font-mono text-[0.8rem]'>
                      all over the world

                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='text-white font-mono lg:text-[3rem]'>
                      163
                    </div>
                    <div className='text-orange-200 font-mono text-[0.8rem]'>
                      New location added
                    </div>
                </div>

              </div>

              <div className='flex mt-12 flex-col'>  
                <div className='text-white font-mono text-[0.8rem]'>
                  Top quality Resources From Brand Like
                </div>
                <div className='flex lg:space-x-10 justify-center items-center lg:justify-start lg:items-start'>
                <div className='mt-[2rem] flex lg:scale-100 scale-50'>
                  <Buttonpage name='nike'></Buttonpage>
                </div>
                <div className='mt-[2rem] flex lg:scale-100 scale-50'>
                  <Buttonpage name='space X'></Buttonpage>
                </div>
                <div className='mt-[2rem] flex lg:scale-100 scale-50'>
                  <Buttonpage name='nasa'></Buttonpage>
                </div>
                </div>
                
              </div>
          </div>
      </div>
    </div>
  )
}

export default Suitspecabout
