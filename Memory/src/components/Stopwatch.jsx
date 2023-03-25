import { useEffect, useState } from "react";
import "./Stopwatch.css";

function Stopwatch() {
  const [second, setsecond] = useState(0);
  const [timer, settimer] = useState(false);

  const start = () => {
    setsecond((prev) => prev + 1);
  };

  //;
  const timing = () => {
    settimer((prev) => !prev);
  };

  useEffect(() => {
    let interval = null;
    if (timer) {
      interval = setInterval(start, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="container">
      <div className="time">00</div>
      <div className="time"></div>
      <div className="time">{second}</div>
      <div className="points">00</div>
      <button onClick={timing}>{timer ? "Stop" : "Start"}</button>
    </div>
  );
}

export default Stopwatch;
