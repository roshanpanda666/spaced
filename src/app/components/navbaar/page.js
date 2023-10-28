import React from 'react'
import Buttonpage from '../button/page'

const Navpage = () => {
  return (
    <div>
      <div className='flex justify-center items-center lg:space-x-[33vw] space-x-[60vw]'>
            <div className='text-center space-x-1'>
                <span className='text-gray-500'>S</span><span>P</span><span className='text-gray-500'>A</span><span>C</span><span>E</span><span>D</span>
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
            <div className='flex-col lg:hidden block'>
                ...
            </div>
            
      </div>
    </div>
  )
}

export default Navpage
