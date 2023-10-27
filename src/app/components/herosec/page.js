import React from 'react'
import Navpage from '../navbaar/page'
import Heroformpage from '../heroform/page'

const Heropage = () => {
  return (
    <div>
      <div className='h-[100vh] w-[99%] border-2 border-red-400 flex flex-col justify-center items-center '>
        {/* image */}
        <div className='w-[99%]'>
        <img src="bghero.jpg" alt="" className='absolute lg:w-[99%] w-[98%] -mt-5 opacity-50 '/>
        </div>
        
        <div className='flex justify-center items-center relative flex-col'>
            <div className=' h-[95vh] w-[98vw] lg:w-[70vw] '>
                <div className='w-[100%] h-[6vh] '>
                    <Navpage></Navpage>
                </div>
                <div className='flex justify-center items-center flex-col lg:mt-32'>
                    <div className='font-bold lg:text-3xl text-[20px] font-mono text-white'>
                        To space.and back.
                    </div>
                    <div className='font-extrabold lg:text-[170px] text-[60px]  text-orange-200'>
                        Safely
                    </div>
                    <div className='text-center font-mono lg:text-[15px] text-[5px] text-gray-300'>
                        ever wanted to visit marse,jupiter or pluton<br></br>
                        with us you can do everything
                    </div>
                </div>

                <div className='flex justify-center items-center mt-10'>
                  <Heroformpage></Heroformpage>
                </div>

            </div>
            
        </div>
      </div>

      
      

    </div>
  )
}

export default Heropage
