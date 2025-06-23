import React from 'react'

const Contacts = () => {
  return (
    <div>
      <h1 className='text-[#808080] my-[30px] w-[90%] m-auto text-[18px]'>
        Home /<span className='text-[#000]'>Cantact</span>
      </h1>
      <div className='flex w-[90%] my-[50px] m-auto flex-col justify-between md:flex-row'>
        <div className='flex flex-col gap-y-[20px] w-[100%] md:w-[30%] p-[30px] rounded-[5px]' style={{boxShadow:"1px 1px 8px 1px #ccc"}}>
          <div className='flex flex-col gap-y-[10px] border-b-[1px] pb-[30px]'>
            <div className='flex flex-row gap-[10px] justify-start items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 bg-[#DB4444] text-[#fff] p-[8px] rounded-[50%]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
              <p className='text-[20px] font-[500]'>Call To Us</p>
            </div>
            <p className='text-[16px] font-[400]'>We are available 24/7, 7 days a week. <br />
              Phone: +8801611112222</p>
          </div>
          <div className='flex flex-col gap-y-[10px] pb-[20px]'>
            <div className='flex flex-row gap-[10px] justify-start items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 bg-[#db4444] text-[#fff] p-[8px] rounded-[50%]"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              <p className='text-[20px] font-[500]'>Write To US</p>
            </div>
            <p className='text-[16px] font-[400]'>Fill out our form and we will contact you within 24 hours.</p>
            <p className='text-[16px] font-[400]'>Emails: customer@exclusive.com</p>
            <p className='text-[16px] font-[400]'>Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className='w-[100%] relative flex flex-col gap-y-[20px] md:w-[68%] p-[30px]' style={{boxShadow:"1px 1px 5px 3px #ccc"}}>
          <div className='flex flex-col md:flex-row justify-between'>
            <input type="text" placeholder='Name' className='border-[1px] rounded-[3px] w-[100%] md:w-[30%] p-[10px]' />
            <input type="text" placeholder='Email' className='border-[1px] rounded-[3px] w-[100%] md:w-[30%] p-[10px]' />
            <input type="text" placeholder='Phone' className='border-[1px] rounded-[3px] w-[100%] md:w-[30%] p-[10px]' />
          </div>
          <textarea placeholder='Your Massage' className='border-[1px] p-[10px] w-[100%] rounded-[3px]'></textarea>
          <button className='bg-[#DB4444] absolute right-[30px] bottom-[15vh] px-[30px] w-[70%] md:w-[25%] text-[#fff] rounded-[3px] py-[10px]'>Send Massage</button>
        </div>
      </div>
    </div>
  )
}

export default Contacts