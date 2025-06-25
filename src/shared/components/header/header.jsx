import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import logo from '../../imgs/Group 1116606595.png'
import { Link, NavLink } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { logOut, getAddproduct, openModal } from '../../../entities/reducerc/Products';

const Header = () => {
  const [modal, setModal] = useState(false)
  const [accModal, setAccModal] = useState(false)
  let totalProducts = useSelector((store) => store.products.totalProducts)
  let wishlist = useSelector((store) => store.products.wishlist)
  let Modal = useSelector((store) => store.products.modal)

  let navigate = useNavigate()

  let dispatch = useDispatch()

  function check(path) {
      let token = localStorage.getItem("Token")
      if (token) {
        navigate(path)
      } else {
        dispatch(openModal())
      }
    }

    useEffect(()=>{
      setInterval(() => {
        let token = localStorage.getItem("Token")
        if(token){
          localStorage.removeItem("Token")
        }else{
          clearInterval(interval)
        }
      },3600000)
    },[])

  useEffect(() => {
    dispatch(getAddproduct())
  }, [])

  return (
    <div className='flex flex-row justify-between w-[100%] px-[5%] m-auto items-center h-[10vh] border-b-[0.2px] border-[#ccc] border-solid'>
      <div className='flex flex-row gap-[20px] items-center'>
        <img className='hidden md:block w-[200px]' src={logo} alt="" />
        <svg onClick={() => setModal(!modal)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:hidden size-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
        <h1 className='md:hidden font-[700] text-[24px]'>Exclusive</h1>
      </div>
      {Modal && (
        <div onClick={() => dispatch(openModal())} className="fixed top-0 bottom-0 z-20 left-0 w-[100%] h-[100vh] bg-[#000000a1] flex justify-center items-center">
          <div className="bg-white w-[70%] md:w-[30%] p-5 rounded-[10px] flex flex-col gap-y-5">
            <h1 className="text-[24px] font-semibold">You don`t have account</h1>
            <button
              onClick={() => {
                dispatch(openModal())
                navigate("/login");
              }}
              className="bg-[#DB4444] text-white px-5 py-2 rounded-[5px]"
            >
              Go To Login
            </button>
          </div>
        </div>
      )}
      <div className="hidden md:flex flex-row gap-[30px]">
        <Link className='text-[20px] font-[400]' to={"/"}>Home</Link>
        <Link className='text-[20px] font-[400]' to={"/contact"}>Contact</Link>
        <Link className='text-[20px] font-[400]' to={"/about"}>About</Link>
        <Link className='text-[20px] font-[400]' to={"/signUp"}>Sign Up</Link>
      </div>
      <div className='flex flex-row w-[23%] md:w-[35%] items-center justify-between gap-[20px]'>
        <div className='hidden md:flex justify-between w-[80%] items-center bg-[#F5F5F5] rounded-[5px] px-[10px] py-[8px]'>
          <input className='w-[90%] outline-0' type="search" placeholder='What are you looking for?' />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
        </div>
        <Link className='hidden relative md:block' to={"/wishlist"}>
          <span className='absolute bg-[#DB4444] text-[#fff] z-[10] rounded-[50%] text-[11px] top-[2%] left-[60%] py-[0px] px-[5px]'>{wishlist.length}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </Link>
        <button onClick={()=>check("/cart")} className='flex flex-row relative items-center'>
          <span className='absolute bg-[#DB4444] text-[#fff] z-[10] rounded-[50%] text-[11px] top-[2%] left-[60%] py-[0px] px-[5px]'>{totalProducts}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
        </button>
        <svg onClick={() => setAccModal(!accModal)} style={{background:accModal?"#DB4444":"#fff", color:accModal?"#fff":"#000"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-13 py-[0px] px-[8px] h-[40px] rounded-[50%]"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
      </div>
      {modal && (
        <div onClick={() => setModal(!modal)} className='w-[100%] left-0 bottom-0 h-[100vh] fixed z-10 bg-[#0000007a]'>
          <div className="flex h-[100vh] w-[70%] bg-[#fff] flex-col">
            <img className='w-[70%] p-[10px]' src={logo} alt="" />
            <Link className='text-[22px] py-[10px] px-[30px] hover:bg-[#ccc] font-[600]' to={"/"}>Home</Link>
            <Link className='text-[22px] py-[10px] px-[30px] hover:bg-[#ccc] font-[600]' to={"/contact"}>Contact</Link>
            <Link className='text-[22px] py-[10px] px-[30px] hover:bg-[#ccc] font-[600]' to={"/about"}>About</Link>
            <Link className='text-[22px] py-[10px] px-[30px] hover:bg-[#ccc] font-[600]' to={"/signUp"}>Sign Up</Link>
          </div>
        </div>
      )}
      {accModal && (<div className='absolute text-[#fff] md:w-[18%] p-[20px] flex flex-col gap-y-[20px] w-[55%] z-10 h-auto rounded-[5px] right-[5%] top-[10%] bg-[#3f3f3fef]'>
        <button onClick={() => {setAccModal(!accModal),
          check("/account")
        }} className='flex flex-row items-center gap-[20px]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
          <h1 className='text-[20px] font-[500]'>Account</h1>
        </button>
        <button onClick={() => {
          setAccModal(!accModal)
          check("/checkout")
          }} className='flex flex-row items-center gap-[20px]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
          <h1 className='text-[20px] font-[500]'>My Order</h1>
        </button>
        <Link to={"/wishlist"} onClick={() => setAccModal(!accModal)} className='flex flex-row items-center gap-[20px] md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
          <h1 className='text-[20px] font-[500]'>Wishlist</h1>
        </Link>
        <button onClick={() => {
          setAccModal(!accModal)
          dispatch(logOut())
          navigate("/")
        }} className='flex flex-row items-center gap-[20px]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" /></svg>
          <h1 className='text-[20px] font-[500]'>Logout</h1>
        </button>
      </div>)}
    </div>
  )
}

export default Header