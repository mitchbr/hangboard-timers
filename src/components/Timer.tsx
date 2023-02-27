import { useEffect, useState } from 'react';

function Timer() {
  const [timeValue, setTimeValue] = useState(0);
  const [paused, setPaused] = useState(true);
  
  useEffect(() => {
      let interval = setInterval(() => {
        if (!paused) {
          setTimeValue((timeValue) => timeValue + 0.01);
        }
      }, 10);

      return () => clearInterval(interval);

  }, [paused]);

  let handlePause = () => {
    setPaused((prevPaused => !prevPaused));
  }

  let handleReset = () => {
    setTimeValue(() => 0);
  }

  return (
    <div>
      <p>{timeValue.toFixed(2)}</p>
      <button onClick={handlePause}>
        {paused ? 'Start' : 'Stop'}
      </button>
      {paused && timeValue !== 0 ? (
        <button onClick={handleReset}>
          Reset
        </button>
      ) : ''}
    </div>
  );
}

export default Timer;
