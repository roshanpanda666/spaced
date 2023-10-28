"use client"
import React from 'react'
import { motion } from "framer-motion"
const Buttonpage = (props) => {
  return (
    <div>
      <div>
        <div className='flex space-x-12'>
        <motion.div className='w-7 border-[1.5px]'
        whileInView={{
          rotateY:380
        }}
        ></motion.div>
        <motion.div className='w-7 border-[1.5px]'
        whileInView={{
          rotateY:380
        }}
        ></motion.div>
        </div>
        <motion.button className=' h-10 w-[104px] border-t-[1px] border-t-orange-200 border-b-orange-200 border-b-[1px] '
        whileHover={{
          rotateY:380
        }}
        whileTap={{
          scaleX:0.8
        }}
        >
          {props.name}
        </motion.button >
        <div className='flex space-x-12'>
        <motion.div className='w-7 border-[1.5px]'
        whileInView={{
          rotateY:380
        }}
        ></motion.div>
        <motion.div className='w-7 border-[1.5px]'
        whileInView={{
          rotateY:380
        }}
        ></motion.div>
        </div>
      
      </div>
    </div>
  )
}

export default Buttonpage
