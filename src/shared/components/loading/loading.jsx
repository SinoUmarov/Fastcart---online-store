import React from 'react'
import { OrbitProgress } from 'react-loading-indicators'

const Loading = () => {
  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-center '>
      <OrbitProgress color="#000000" size="smal" text="" textColor="" />
    </div>
  )
}

export default Loading