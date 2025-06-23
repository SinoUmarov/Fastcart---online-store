import React from 'react'

const API = import.meta.env.VITE_API_URL

const Category = ({name, img}) => {
  return (
    <div className='border-[1px] flex flex-col justify-between items-center text-center w-[100%] h-[25vh] rounded-[5px] p-[15px] border-[#B3B3B3]'>
        <img className='w-[60%]' src={`${API}/images/${img}`} alt="Photo" />
        <p className='font-[600] text-[16px]'>{name}</p>
    </div>
  )
}

export default Category