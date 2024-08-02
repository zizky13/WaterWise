import { useState, useEffect } from 'react';

const Quest = () => {
  const [time, setTime] = useState(20); // in sec
  const [start, setStart] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    let intervalId;
    if (start) {
      intervalId = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          setStart(false);
          setNotification('You failed to complete the daily quest!');
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [start, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleStart = () => {
    setStart(true);
    setNotification(null);
  };

  const handleStop = () => {
    setStart(false);
    if (time <= 20) {
      setNotification('Congratulations! You completed the daily quest!');
    }
  };

  const handleReset = () => {
    setStart(false);
    setTime(480);
    setNotification(null);
  };

  return (
    <div className="flex justify-end items-center">
      <div className="flex-row p-5 border-solid border-primary border-1 rounded-md text-center">
        <p className='inlineSub'> Daily Quest</p>
        <p className="font-sansar  text-subprimary">Limit shower time to 8 minutes</p>
        <p className="font-sansab text-2xl text-primary">{minutes}:{seconds.toString().padStart(2, '0')}</p>
        
        {start ? (
          <button className="bg-primary text-screenColor py-2 px-4 w-auto rounded-full font-sansab" onClick={handleStop}>
            Stop
          </button>
        ) : (
          <button className="bg-primary text-screenColor mb-2 py-2 px-4 w-auto rounded-full font-sansab" onClick={handleStart}>
            Start now
          </button>
        )}
        {notification && (
          <p className="font-sansab text-subprimary p-2 inline-block">{notification}</p>
        )}
        
      
      </div>
    </div>
  );
}

export default Quest;