import React from 'react'
import Buttonpage from '../button/page'
import { motion, spring } from 'framer-motion'
const Heroformpage = () => {
  return (
    <div>
      <motion.div className="flex items-center justify-center lg:space-x-32 space-y-1 lg:flex-row flex-col"
      initial={{
        opacity:0,
      }}
      transition={{
        type:'spring',
        stiffness:60
      }}
      whileInView={{
        opacity:1
      }}
      >
        <div className='flex flex-col items-center'>
        <label htmlFor="date" className="text-white mb-3">Choose flight Date</label>
        <select id="date" name="date" className="border-[1.5px] border-gray-300 bg-transparent  shadow-sm py-2 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-200">
          
          <option value="2023-10-29">October 29, 2023</option>
          <option value="2023-10-30">October 30, 2023</option>
          <option value="2023-10-31">October 31, 2023</option>
          <option value="2023-11-01">November 01, 2023</option>
          <option value="2023-11-02">November 02, 2023</option>
          <option value="2023-11-03">November 03, 2023</option>

        </select>
        </div>

        <div className='flex flex-col items-center'>
        <label htmlFor="date" className="text-white mb-3">To</label>
        <select id="date" name="date" className="border-[1.5px] border-gray-300 bg-transparent  shadow-sm py-2 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-200">
          
          <option value="2023-10-29">marse base 2</option>
          <option value="2023-10-30">moon base 6</option>
          <option value="2023-10-31">moon base 3</option>
          <option value="2023-11-01">l1 point</option>
          <option value="2023-11-01">pluton base</option>
          <option value="2023-11-01">saturn ring pint base 3.7</option>

        </select>
        </div>

        <div className='flex flex-col items-center'>
        <label htmlFor="date" className="text-white mb-3">From</label>
        <select id="date" name="date" className="border-[1.5px] border-gray-300 bg-transparent  shadow-sm py-2 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-200">
          
          <option className='bg-transparent text-orange' value="2023-10-29">E-12</option>
          <option value="2023-10-30">E-16</option>
          <option value="2023-10-31">E-17</option>
          <option value="2023-11-01">E-23</option>

        </select>
        </div>


        <div className='flex flex-col items-center'>
        <label htmlFor="date" className="text-white mb-3">passengers</label>
        <select id="date" name="date" className="border-[1.5px] border-gray-300 bg-transparent py-2 px-4 text-gray-200">
        
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
      

        </select>
        </div>

        
        
      </motion.div>
      <div className='flex justify-center items-center mt-10'>
        <Buttonpage name="submit"></Buttonpage>
        </div>
    </div>
  )
}

export default Heroformpage
