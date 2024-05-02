import React from 'react'

const Loader = ({ size = null  }) => {
  return (
    <div className='inline-flex h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_line_infinite]'>
      <span className="!ablodute !-m-px !-h-px !w-px overflow-hidden whitespace-pre-wrap border-0 p-0 [clip:rect(0,0,0,0)] "></span>
    </div>
  )
}

export default Loader
