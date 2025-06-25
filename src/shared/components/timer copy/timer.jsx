import React, { useEffect, useState } from 'react'

const Timer2 = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    
    const targetDate = new Date('2025-06-01T00:00:00').getTime();

    useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
  return (
    <div className='flex items-end flex-row w-[100%] md:w-[70%] text-[#000] justify-between'>
          <div className='flex flex-col bg-[#fff] items-center w-[22%] md:h-[12vh] h-[10vh] rounded-[50%]'>
            <h1 className='font-[700] text-[24px]'>{String(timeLeft.days).padStart(2, '0')}</h1>
            <span className='text-[16px] font-[500]'>Days</span>
          </div>
          <div className='flex flex-col bg-[#fff] items-center w-[22%] md:h-[12vh] h-[10vh] rounded-[50%]'>
            <h1 className='font-[700] text-[24px]'>{String(timeLeft.hours).padStart(2, '0')}</h1>
            <span className='text-[16px] font-[500]'>Hours</span>
          </div>
          <div className='flex flex-col bg-[#fff] items-center w-[22%] md:h-[12vh] h-[10vh] rounded-[50%]'>
            <h1 className='font-[700] text-[24px]'>{String(timeLeft.minutes).padStart(2, '0')}</h1>
            <span className='text-[16px] font-[500]'>Minutes</span>
          </div>
          <div className='flex flex-col bg-[#fff] items-center w-[22%] md:h-[12vh] h-[10vh] rounded-[50%]'>
            <h1 className='font-[700] text-[24px]'>{String(timeLeft.seconds).padStart(2, '0')}</h1>
            <span className='text-[16px] font-[500]'>Seconds</span>
          </div>
        </div>
  )
}

export default Timer2