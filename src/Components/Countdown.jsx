import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      // If the target date has passed, set the countdown to zeros
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="text-white w-auto flex flex-row justify-center lg:gap-20 gap-8 items-center   relative">
      <div className="flex flex-col items-center">
        <div className="text-center lg:text-3xl text-2xl font-bold font-Inter">{timeLeft.days}</div>
        <div className="text-center text-white lg:text-4xl text-3xl font-bold font-Inter">
          Day
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-center lg:text-3xl text-2xl font-bold font-Inter">{timeLeft.hours}</div>
        <div className="text-center text-white lg:text-4xl text-3xl font-bold font-Inter">
          Hours
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-center lg:text-3xl text-2xl font-bold font-Inter">{timeLeft.minutes}</div>
        <div className="text-center text-white lg:text-4xl text-3xl font-bold font-Inter">
          Min
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-center lg:text-3xl text-2xl font-bold font-Inter">{timeLeft.seconds}</div>
        <div className="text-center text-white lg:text-4xl text-3xl font-bold font-Inter">
          Sec
        </div>
      </div>
     
    </div>
  );
};

export default Countdown;
