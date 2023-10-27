import React from 'react'
import Navpage from '../navbaar/page'

const Heropage = () => {
  return (
    <div>
      <div className='h-[100vh] w-[99%] border-2 border-red-400 flex flex-col justify-center items-center '>
        {/* image */}
        <div className='w-[99%]'>
        <img src="bghero.jpg" alt="" className='absolute lg:w-[99%] w-[98%] -mt-5 opacity-80 '/>
        </div>
        
        <div className='flex justify-center items-center relative'>
            <div className='h-[95vh] w-[98vw] lg:w-[70vw] border-2 border-green-400 '>
                <div className='w-[100%] h-[6vh] '>
                    <Navpage></Navpage>
                </div>
                <div className='flex justify-center items-center flex-col lg:mt-32'>
                    <div className='font-bold lg:text-3xl text-[20px] font-mono lg:text-white text-gray-900'>
                        To space.and back.
                    </div>
                    <div className='font-bold lg:text-[150px] text-[60px] font-mono lg:text-gray-900 text-white'>
                        Safely
                    </div>
                    <div className='text-center font-mono lg:text-[15px] text-[5px] text-gray-300'>
                        ever wanted to visit marse,jupiter or pluton<br></br>
                        with us you can do everything
                    </div>
                </div>

            </div>
        </div>
      </div>

      
      

    </div>
  )
}

export default Heropage
