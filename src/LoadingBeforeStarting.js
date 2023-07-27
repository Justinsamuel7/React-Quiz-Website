import React, { useState, useEffect } from "react";
import {Router,Route,Link,useNavigate} from 'react-router-dom'
import "./WaitingBeforeTest.css";



const LoadingBeforeStarting = () => {
  let navigate=useNavigate();

  const [countdown, setCountdown] = useState(5);

  useEffect(() => {

    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);
      navigate("/TestInterface");
    }

    return () => {
      clearInterval(timer);
    };
  }, [countdown, navigate]);

  return (
    <div id="container">
      <h1 id="beginsintimetest">Your Test Begins in <span>{countdown}</span> Seconds...</h1>
    </div>
  );
};

export default LoadingBeforeStarting;