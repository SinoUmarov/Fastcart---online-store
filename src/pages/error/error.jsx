import React from 'react'

const Error = () => {
  return (
    <div className='text-center flex flex-col h-[90vh] gap-[40px] items-center justify-center'>
        <h1 className='text-[72px] md:text-[110px] font-[500]'>404 Not Found</h1>
        <p className='text-[16px] font-[400] w-[80%]'>Your visited page not found. You may go home page.</p>
        <button className='bg-[#DB4444] text-[#fff] px-[30px] py-[10px] font-[500] rounded-[3px] text-[16px]'>Back to home page</button>
    </div>
  )
}

export default Error