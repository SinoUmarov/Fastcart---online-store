import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = new Date(targetDate).getTime() - now;

    if (distance <= 0) {
      return {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
    }

    const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0');

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div id="countdown">
      <div>
        <p>Days</p>
        <span>{timeLeft.days}</span>
      </div>
      <span className="colon">:</span>
      <div>
        <p>Hours</p>
        <span>{timeLeft.hours}</span>
      </div>
      <span className="colon">:</span>
      <div>
        <p>Minutes</p>
        <span>{timeLeft.minutes}</span>
      </div>
      <span className="colon">:</span>
      <div>
        <p>Seconds</p>
        <span>{timeLeft.seconds}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
