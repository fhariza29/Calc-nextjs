import React from 'react'
import Calc from './calc'


const index = () => {
  return (
    <div className=' bg-slate-800 w-full aspect-auto auto-cols-max py-2 '>
    <div className='    py-10 px-3 flex justify-around text-center my-20 box-border ml-96 mr-96'>
    <Calc />
    </div>
    </div>
  )
}

export default index