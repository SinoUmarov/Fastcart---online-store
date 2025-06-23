import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { addToCart, addToWishlist, openModal } from '../../../entities/reducerc/Products'

const Card = ({ img, name, price, id, discountPrice, elem }) => {
  let wishlist = useSelector((store) => store.products.wishlist)

  function check() {
    let token = localStorage.getItem("Token")
    if (token) {
      dispatch(addToCart(id))
    } else {
      dispatch(openModal())
    }
  }

  let dispatch = useDispatch()
  let navigate = useNavigate()
  return (
    <div className='w-[100%] main h-auto p-[20px] flex flex-col gap-y-[30px] relative'>
      <div className='bg-[#F5F5F5] flex justify-center rounded-[5px] items-center relative w-[100%] h-[40vh]'>
        <img className='w-[80%] h-[35vh] rounded-[10px]' src={img} alt="" />
        <button onClick={() => {
          check()
        }} className='absolute card bg-[#000] text-[#fff] w-[100%] p-[10px] bottom-0'>Add To Cart</button>
      </div>

      <div>
        <h1 className='text-[24px] font-[600]'>{name}</h1>
        <div className='flex flex-row gap-[15px]'>
          <p className='text-[#DB4444] text-[20px] font-[500]'>${price}</p>
          <p className='line-through text-[#808080] text-[20px] font-[500]'>${price + discountPrice}</p>
        </div>
        <div className='absolute right-[30px] top-[30px] flex flex-col gap-y-[10px]'>
          <svg onClick={() => dispatch(addToWishlist(elem))} style={{ background: wishlist.find((el) => el.id == id) ? "#DB4444" : "#fff", color: wishlist.find((el) => el.id == id) ? "#fff" : "#000" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 rounded-[50%] w-[35px] p-[5px] h-[35px]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
          <svg onClick={() => {
            navigate(`/info/:${id}`)
          }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 rounded-[50%] w-[35px] p-[5px] h-[35px] bg-[#fff]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
        </div>
        <Link to={"/checkout"} className='absolute bg-[#DB4444] text-[16px] px-[10px] py-[3px] left-[30px] top-[30px] rounded-[5px] text-[#fff]'>{~~((100 * price) / (price + discountPrice))}%</Link>
      </div>
    </div >
  )
}

export default Card