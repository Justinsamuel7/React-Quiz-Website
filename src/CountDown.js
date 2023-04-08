import React, { useState, useEffect } from "react";

function CountdownTimer() {
  let [countDownTime, setCountDownTime] = useState(20 * 60 * 1000);
  let [timerDisplay, setTimerDisplay] = useState("");
  let [timerColor, setTimerColor] = useState("");

  useEffect(() => {
      let interval = setInterval(() => {
      let minutes = Math.floor(countDownTime / (60 * 1000));
      let seconds = Math.floor((countDownTime % (60 * 1000)) / 1000);
      setTimerDisplay(`${minutes}:${seconds}`);
      setCountDownTime(countDownTime - 1000);

      if (minutes < 5) {
        setTimerColor("red");
      }

      if (countDownTime < 0) {
        clearInterval(interval);
        setTimerDisplay("Time's up!");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownTime]);

  return <div style={{ color: timerColor }}>{timerDisplay}</div>;
}

export default CountdownTimer;
