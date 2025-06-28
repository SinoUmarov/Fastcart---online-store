import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editUserProfile, userInfo } from '../../entities/reducerc/Products'

const API = import.meta.env.VITE_API_URL

const Account = () => {
	const dispatch = useDispatch()

	const data = useSelector(store => store.products.infoUser)

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [dob, setDob] = useState('')
	const [avatar, setAvatar] = useState(null)
	const [image, setImage] = useState(null)

	useEffect(() => {
		if (data) {
			setFirstName(data.firstName || '')
			setLastName(data.lastName || '')
			setEmail(data.email || '')
			setPhoneNumber(data.phoneNumber || '')
			setDob(data.dob || '')
			setAvatar(data.image)
		}
	}, [data])

	useEffect(() => {
		dispatch(userInfo())
	}, [dispatch])

	const saveChanges = () => {
		const formData = new FormData()
		if (image) {
			formData.append('Image', image)
		}
		formData.append('FirstName', firstName)
		formData.append('LastName', lastName)
		formData.append('Email', email)
		formData.append('PhoneNumber', phoneNumber)
		formData.append('Dob', dob)

		dispatch(editUserProfile(formData))
	}

	return (
		<>
			<div className='flex'>
				<div className='w-full'>
					<div className='w-[90%] my-[20px] flex flex-col md:flex-row items-center justify-between m-auto'>
						<p className='text-[#8d8d8d] text-[20px] w-[90%] m-auto py-[30px]'>
							Home / <span className='text-[#000]'>My Account</span>
						</p>
						{avatar && (
							<img
								className='w-[100px] h-[100px] rounded-[50%]'
								src={`${API}/images/${avatar}`}
								alt='User avatar'
							/>
						)}
					</div>

					<div className='flex flex-col md:flex-row md:w-[90%] items-start justify-between m-auto'>
						<div className='flex flex-col md:w-[20%] w-[90%] m-auto'>
							<div className='flex flex-col gap-y-[10px]'>
								<h1 className='font-[600] text-[16px]'>Manage My Account</h1>
								<div className='px-[20px] flex flex-col gap-y-[10px]'>
									<p className='text-[16px] font-[400] text-[#DB4444]'>
										My Profile
									</p>
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

						<div
							className='flex flex-col md:p-[30px] md:w-[70%] md:flex-row justify-between w-[90%] mb-[50px] flex-wrap p-[10px] rounded-[5px] gap-y-[10px] m-auto'
							style={{ boxShadow: '0 0 10px #0000001a' }}
						>
							<h1 className='text-[20px] font-[500] md:text-[28px] text-[#DB4444] w-[100%]'>Profile</h1>

							<div className='flex flex-col gap-y-[5px] md:w-[48%]'>
								<label className='text-[16px] pl-[10px] font-[600]' htmlFor='firstName'>First name</label>
								<input
									value={firstName}
									onChange={e => setFirstName(e.target.value)}
									className='border p-[10px] rounded-[5px] outline-0'
									type='text'
									id='firstName'
									placeholder='First Name'
								/>
							</div>

							<div className='flex flex-col gap-y-[5px] md:w-[48%]'>
								<label className='text-[16px] pl-[10px] font-[600]' htmlFor='lastName'>Last name</label>
								<input
									value={lastName}
									onChange={e => setLastName(e.target.value)}
									className='border p-[10px] rounded-[5px] outline-0'
									type='text'
									id='lastName'
									placeholder='Last name'
								/>
							</div>

							<div className='flex flex-col gap-y-[5px] md:w-[48%]'>
								<label className='text-[16px] pl-[10px] font-[600]' htmlFor='emailAddress'>Email address</label>
								<input
									value={email}
									onChange={e => setEmail(e.target.value)}
									className='border p-[10px] rounded-[5px] outline-0'
									type='email'
									id='emailAddress'
									placeholder='Email address'
								/>
							</div>

							<div className='flex flex-col gap-y-[5px] md:w-[48%]'>
								<label className='text-[16px] pl-[10px] font-[600]' htmlFor='phoneNumber'>Phone Number</label>
								<input
									value={phoneNumber}
									onChange={e => setPhoneNumber(e.target.value)}
									className='border p-[10px] rounded-[5px] outline-0'
									type='tel'
									id='phoneNumber'
									placeholder='Phone Number'
								/>
							</div>

							<div className='flex flex-col gap-y-[5px] md:w-[48%]'>
								<label className='text-[16px] pl-[10px] font-[600]' htmlFor='dob'>Date of Birth</label>
								<input
									value={dob}
									onChange={e => setDob(e.target.value)}
									className='border p-[10px] rounded-[5px] outline-0'
									type='date'
									id='dob'
								/>
							</div>

							<div className='flex flex-col gap-y-[5px] md:w-[48%]'>
								<label className='text-[16px] pl-[10px] font-[600]' htmlFor='userImage'>Upload Image</label>
								<input
									onChange={e => setImage(e.target.files[0])}
									className='border p-[10px] rounded-[5px] outline-0'
									type='file'
									id='userImage'
								/>
							</div>

							<h1 className='text-[18px] font-[400] pt-[10px] w-full'>Password Changes</h1>
							<input className='border w-full p-[10px] rounded-[5px] outline-0' type='password' placeholder='Current password' />
							<input className='border md:w-[48%] w-full p-[10px] rounded-[5px] outline-0' type='password' placeholder='New password' />
							<input className='border md:w-[48%] w-full p-[10px] rounded-[5px] outline-0' type='password' placeholder='Confirm new password' />

							<div className='flex flex-col w-full gap-y-[10px] gap-x-[20px] md:w-[48%] md:flex-row-reverse md:mt-[20px]'>
								<button
									onClick={saveChanges}
									className='p-[10px] w-full text-[18px] text-white bg-[#DB4444] rounded-[5px]'
								>
									Save Changes
								</button>
								<button className='p-[10px] w-full text-[18px] font-[500]'>Cancel</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{data && (
				<div
					className='w-[90%] my-[20px] flex flex-col items-center text-center m-auto p-[10px]'
					style={{ boxShadow: '0 0 10px #0000001a' }}
				>
					<h3 className='text-[20px] font-bold'>User Info</h3>
					<h3 className='text-[20px] font-bold'><strong>Username:</strong> {data.userName}</h3>
					<h3 className='text-[20px] font-bold'><strong>First Name:</strong> {data.firstName}</h3>
					<h3 className='text-[20px] font-bold'><strong>Last Name:</strong> {data.lastName}</h3>
					<h3 className='text-[20px] font-bold'><strong>Phone:</strong> {data.phoneNumber}</h3>
					<h3 className='text-[20px] font-bold'><strong>Email:</strong> {data.email}</h3>
					<h3 className='text-[20px] font-bold'><strong>User ID:</strong> {data.userId}</h3>
					<h3 className='text-[20px] font-bold'><strong>Birthday:</strong> {data.dob}</h3>
					{data.image && (
						<img
							src={`${API}/images/${data.image}`}
							alt='User'
							className='mt-[10px] w-[100px] h-[100px] object-cover rounded-full'
						/>
					)}
				</div>
			)}
		</>
	)
}

export default Account
