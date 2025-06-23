import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editUserProfile, userInfo } from '../../entities/reducerc/Products'

const API = import.meta.env.VITE_API_URL;

const Account = () => {
  let dispatch = useDispatch()

  let data = useSelector((store) => store.products.infoUser)

  let [firstName, setFirstName] = useState("")
  let [lastName, setLastName] = useState("")
  let [email, setEmail] = useState('')
  let [phoneNumber, setPhoneNumber] = useState("")
  let [dob, setDob] = useState("")
  let [avatar, setAvatar] = useState(null)
  let [image, setImage] = useState(null);

  useEffect(() => {
    if (data) {
      setFirstName(data.firstName || "")
      setLastName(data.lastName || "")
      setEmail(data.email || "")
      setPhoneNumber(data.phoneNumber || "")
      setDob(data.dob || "")
      setAvatar(data.image)
    }
  }, [data])

  useEffect(() => {
    dispatch(userInfo())
  }, [])


  function saveChanges() {
    const formData = new FormData();
    formData.append("Image  ", image[0]);
    formData.append("FirstName  ", firstName);
    formData.append("LastName ", lastName);
    formData.append("Email ", email);
    formData.append("PhoneNumber ", phoneNumber);
    formData.append("Dob", dob);
    console.log(image[0], "img");

    dispatch(editUserProfile(formData));
  };


  return (
    <div>
      <div className='flex w-[90%] my-[20px] flex flex-col md:flex-row items-center justify-between m-auto '>
        <p className='text-[#8d8d8d] text-[20px] w-[90%] m-auto py-[30px]'>Home / <samp className='text-[#000]'>My Account</samp></p>
        <img className='w-[100px] h-[100px] rounded-[50%] ' src={`${API}/images/${avatar}`} alt="" />
      </div>
      <div className='flex flex-col md:flex-row md:w-[90%] items-start justify-between m-auto'>
        <div className='flex flex-col md:flex-row md:w-[20%] justify-start md:h-[95vh] w-[90%] m-auto'>
          <div className='flex flex-col gap-y-[10px]'>
            <h1 className='font-[600] text-[16px]'>Manage My Account</h1>
            <div className='px-[20px] flex flex-col gap-y-[10px]'>
              <p className='text-[16px] font-[400] text-[#DB4444]'>My Profile</p>
              <p className='text-[16px] font-[400] text-[#808080]'>Address Book</p>
              <p className='text-[16px] font-[400] text-[#808080]'>My Payment Options</p>
            </div>
            <h1 className='font-[600] text-[16px]'>My Orders</h1>
            <div className='px-[20px] flex flex-col gap-y-[10px]'>
              <p className='text-[16px] font-[400] text-[#808080]'>My Returns</p>
              <p className='text-[16px] font-[400] text-[#808080]'>My Cancellations</p>
            </div>
            <h1 className='font-[600] text-[16px]'>My WishList</h1>
          </div>
        </div>
          <div className='flex flex-col md:p-[30px] md:w-[70%] md:flex-row justify-between w-[90%] mb-[50px] mt-[0] flex-wrap p-[10px] rounded-[5px] gap-y-[10px] m-auto' style={{ boxShadow: "0 0 10px #0000001a" }}>
            <h1 className='text-[20px] font-[500] md:text-[28px] text-[#DB4444] w-[100%]'>Profile</h1>
            <div className='flex flex-col gap-y-[5px] md:w-[48%]'>
              <label className='text-[16px] pl-[10px] font-[600]' htmlFor="firstName">First name</label>
              <input value={firstName} onInput={(e) => setFirstName(e.target.value)} className='border-[1px] border-[#C4C4C4] p-[10px] rounded-[5px] outline-0' type="text" id='firstName' placeholder='First Name' />
            </div>
            <div className='flex flex-col gap-y-[5px] md:w-[48%] '>
              <label className='text-[16px] pl-[10px] font-[600]' htmlFor="lastName">Last name</label>
              <input value={lastName} onInput={(e) => setLastName(e.target.value)} className='border-[1px] border-[#C4C4C4] p-[10px] rounded-[5px] outline-0' type="text" id='lastName' placeholder='Last name' />
            </div>
            <div className='flex flex-col gap-y-[5px] md:w-[48%]'>
              <label className='text-[16px] pl-[10px] font-[600]' htmlFor="emailAddress">Email address</label>
              <input value={email} onInput={(e) => setEmail(e.target.value)} className='border-[1px] border-[#C4C4C4] p-[10px] rounded-[5px] outline-0' type="text" id='emailAddress' placeholder='Email address' />
            </div>
            <div className='flex flex-col gap-y-[5px] md:w-[48%]'>
              <label className='text-[16px] pl-[10px] font-[600]' htmlFor="streetAddress">Phone Number</label>
              <input value={phoneNumber} onInput={(e) => setPhoneNumber(e.target.value)} className='border-[1px] border-[#C4C4C4] p-[10px] rounded-[5px] outline-0' type="text" id='streetAddress' placeholder='Phone Number' />
            </div>
            <div className='flex flex-col gap-y-[5px] md:w-[48%]'>
              <label className='text-[16px] pl-[10px] font-[600]' htmlFor="streetAddress">Date of BirthDay</label>
              <input value={dob} onInput={(e) => setDob(e.target.value)} className='border-[1px] border-[#C4C4C4] p-[10px] rounded-[5px] outline-0' type="date" id='streetAddress' placeholder='Date of BirthDay' />
            </div>
            <div className='flex flex-col gap-y-[5px] md:w-[48%]'>
              <label className='text-[16px] pl-[10px] font-[600]' htmlFor="streetAddress">Image User</label>
              <input onChange={(e) => setImage(e.target.files)} className='border-[1px] border-[#C4C4C4] p-[10px] rounded-[5px] outline-0' type="file" id='streetAddress' placeholder='Date of BirthDay' />
            </div>
            <h1 className='text-[18px] font-[400] pt-[10px]'>Password Changes</h1>
            <input className='border-[1px] w-[100%] border-[#C4C4C4] p-[10px] rounded-[5px] outline-0' type="text" placeholder='Current passwod' />
            <input className='border-[1px] w-[100%] md:w-[48%] border-[#C4C4C4] p-[10px] rounded-[5px] outline-0' type="text" placeholder='New passwod' />
            <input className='border-[1px] w-[100%] md:w-[48%] border-[#C4C4C4] p-[10px] rounded-[5px] outline-0' type="text" placeholder='Confirm new passwod' />
            <p className='w-[15%] hidden md:block text-[#fff]'>
              .
            </p>
            <div className='flex flex-col w-[100%] gap-y-[10px] gap-x-[20px] md:w-[48%] md:flex-row-reverse md:mt-[20px]'>
              <button onClick={()=>saveChanges()} className='p-[10px] w-[100%] text-[18px] text-[#fff] bg-[#DB4444] rounded-[5px]'>Save Changes</button>
              <button className='p-[10px] w-[100%] text-[18px] font-[500]'>Cancel</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Account