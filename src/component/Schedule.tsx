import React from 'react'
import Schedulleitem from './Schedulleitem'

function Schedule() {
  return (
    <div className='h-40 flex justify-between bg-white
     rounded-2xl w-100 m-10'>
      <Schedulleitem></Schedulleitem>
      <Schedulleitem></Schedulleitem>
    </div>
  )
}

export default Schedule