import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { loginToAccount } from '../../entities/reducerc/Products'

const Login = () => {
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    let dispatch = useDispatch()
    const error = useSelector((store) => store.products.error) 
    const navigate = useNavigate()
    function logToAccount(){
      dispatch(loginToAccount({userName:userName, password:userPassword}))
    }

   return (
     <div className='flex justify-center items-center h-[90vh]'>
       <div className='flex w-[90%] flex-col gap-[10px] p-[10px] md:w-[28%] m-auto'>
         <h1 className='text-[36px] font-[500]'>Log in to Exclusive</h1>
         <p className='text-[16px] mb-[20px] font-[400]'>Enter your details below</p>
         <input className='p-[10px] border-[#ccc] border-[1px] rounded-[5px]' onInput={(e)=>setUserName(e.target.value)} value={userName} type="text" placeholder='User Name' />
         <input className='p-[10px] border-[#ccc] border-[1px] rounded-[5px]' onInput={(e)=>setUserPassword(e.target.value)} value={userPassword} type="password" placeholder='Password' />
         <button onClick={()=>{
          logToAccount(),
          navigate("/account")
         }} className='bg-[#DB4444] text-[#fff] p-[10px] text-center font-[500] rounded-[3px] text-[16px]'>Log in</button>
         <p className='text-center text-[#DB4444] font-[500] p-[15px]'>Forget Password?</p>
         <Link to={"/signUp"} className='bg-[#DB4444] text-[#fff] p-[10px] text-center font-[500] rounded-[3px] text-[16px]'>Create Account</Link>
       </div>
     </div>
   )
}

export default Login