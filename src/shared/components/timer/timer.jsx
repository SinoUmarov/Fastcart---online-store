import React, { useEffect, useState } from 'react'

const Timer = () => {
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
    <div className='flex items-end flex-row justify-between'>
          <div>
            <span className='text-[20px] font-[500]'>Days</span>
            <h1 className='font-[700] text-[32px]'>{String(timeLeft.days).padStart(2, '0')}</h1>
          </div>
          <p className='text-[#E07575] pr-[10px] pb-[3px] font-[700] text-[32px]'>:</p>
          <div>
            <span className='text-[20px] font-[500]'>Hours</span>
            <h1 className='font-[700] text-[32px]'>{String(timeLeft.hours).padStart(2, '0')}</h1>
          </div>
          <p className='text-[#E07575] pr-[10px] pb-[3px] font-[700] text-[32px]'>:</p>
          <div>
            <span className='text-[20px] font-[500]'>Minutes</span>
            <h1 className='font-[700] text-[32px]'>{String(timeLeft.minutes).padStart(2, '0')}</h1>
          </div>
          <p className='text-[#E07575] pr-[10px] pb-[3px] font-[700] text-[32px]'>:</p>
          <div>
            <span className='text-[20px] font-[500]'>Seconds</span>
            <h1 className='font-[700] text-[32px]'>{String(timeLeft.seconds).padStart(2, '0')}</h1>
          </div>
        </div>
  )
}

export default Timer