import React from 'react';

const Contacts = () => {
  return (
    <div className="w-full">
      <h1 className='text-gray-500 my-8 w-[90%] mx-auto text-lg'>
        Home / <span className='text-black'>Contact</span>
      </h1>

      <div className='flex flex-col md:flex-row w-[90%] mx-auto my-12 gap-8'>
        {/* Contact Info Box */}
        <div className='flex flex-col gap-6 w-full md:w-[30%] p-6 rounded-md bg-white shadow-lg'>
          {/* Call Us */}
          <div className='flex flex-col gap-3 border-b pb-6'>
            <div className='flex items-center gap-3'>
              <div className="bg-[#DB4444] text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.1 1.1 0 0 0-.852-1.091l-4.423-1.106a1.25 1.25 0 0 0-1.173.417l-.97 1.293a1 1 0 0 1-1.21.38 12.035 12.035 0 0 1-7.143-7.143 1 1 0 0 1 .38-1.21l1.293-.97a1.25 1.25 0 0 0 .417-1.173L6.963 3.1a1.125 1.125 0 0 0-1.091-.85H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <p className='text-xl font-medium'>Call To Us</p>
            </div>
            <p className='text-base text-gray-700'>We are available 24/7, 7 days a week.</p>
            <p className='text-base text-gray-700'>Phone: +8801611112222</p>
          </div>

          {/* Write to Us */}
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
              <div className="bg-[#DB4444] text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.24a2.25 2.25 0 0 1-1.07 1.92l-7.5 4.62a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.92V6.75" />
                </svg>
              </div>
              <p className='text-xl font-medium'>Write To Us</p>
            </div>
            <p className='text-base text-gray-700'>Fill out our form and we will contact you within 24 hours.</p>
            <p className='text-base text-gray-700'>Email: customer@exclusive.com</p>
            <p className='text-base text-gray-700'>Email: support@exclusive.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className='w-full md:w-[68%] p-6 rounded-md bg-white shadow-md'>
          <div className='flex flex-col md:flex-row gap-4 mb-4'>
            <input type="text" placeholder='Name' className='border border-gray-300 rounded px-4 py-3 w-full md:w-1/3 focus:outline-[#DB4444]' />
            <input type="email" placeholder='Email' className='border border-gray-300 rounded px-4 py-3 w-full md:w-1/3 focus:outline-[#DB4444]' />
            <input type="tel" placeholder='Phone' className='border border-gray-300 rounded px-4 py-3 w-full md:w-1/3 focus:outline-[#DB4444]' />
          </div>
          <textarea placeholder='Your Message' className='border border-gray-300 rounded px-4 py-3 w-full h-40 resize-none focus:outline-[#DB4444]'></textarea>
          <div className='flex justify-end mt-6'>
            <button className='bg-[#DB4444] hover:bg-[#c43c3c] transition text-white font-semibold px-8 py-3 rounded-md'>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
