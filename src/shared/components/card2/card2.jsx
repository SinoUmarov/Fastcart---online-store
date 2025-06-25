import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { addToCart, addToWishlist, openModal} from '../../../entities/reducerc/Products'

const API = import.meta.env.VITE_API_URL

const Card2 = ({elem}) => {
  let dispatch = useDispatch()

  function check(id) {
      let token = localStorage.getItem("Token")
      if (token) {
        dispatch(addToCart(id))
      } else {
        dispatch(openModal())
      }
    }

  return (
    <div className='w-[100%] main h-auto p-[20px] flex flex-col gap-y-[30px] relative'>
      <div className='bg-[#F5F5F5] flex justify-center rounded-[5px] items-center relative w-[100%] h-[40vh]'>
        <img className='w-[80%] h-[35vh] rounded-[10px]' src={`${API}/images/${elem.image}`} alt="" />
        <button onClick={()=>check(elem.id)} className='absolute card bg-[#000] text-[#fff] w-[100%] p-[10px] bottom-0' style={{borderRadius:"0 0 5px 5px"}}>Add To Cart</button>
      </div>
        <div>
            <h1 className='text-[24px] font-[600]'>{elem.productName}</h1>
            <div className='flex flex-row gap-[15px]'>
                <p className='text-[#DB4444] text-[20px] font-[500]'>${elem.price}</p>
                <p className='line-through text-[#808080] text-[20px] font-[500]'>${elem.price+elem.discountPrice}</p>
            </div>
            <div className='absolute right-[30px] top-[30px] flex flex-col gap-y-[10px]'>
              <svg onClick={()=>dispatch(addToWishlist(elem))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 bg-[#fff] p-[5px] rounded-[50%]"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
            </div>
           <Link className='absolute bg-[#DB4444] text-[16px] px-[10px] py-[3px] left-[30px] top-[30px] rounded-[5px] text-[#fff]'>{~~((100*elem.price) / (elem.price+elem.discountPrice))}%</Link>
        </div>
    </div>
  )
}

export default Card2