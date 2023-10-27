import React from 'react'

const Buttonpage = (props) => {
  return (
    <div>
      <div>
        <button className=' h-10 w-32 border-t-[1px] border-t-white border-b-white border-b-[1px]'>
          {props.name}
        </button>
      </div>
    </div>
  )
}

export default Buttonpage
