import React,{useState} from "react";
import "./style.css";
import {Router,Route,Link} from 'react-router-dom'

let name = ""

function storename()
{
 name = document.getElementById('nameinpbox').value;
 console.log(name)
}

export default function App() {
  let [Timer,setTimer] = useState(false)

  setTimeout(()=>{
    setTimer(true)
  },5000)

  function Questions()
  {
    return(
      <>
      <h1>question1</h1>
      </>
    )
  }

  function Result()
  {
    return(
      <>
     <h1>result</h1>
      </>
    )
  }

  return (
    <div>
      <h1>Welcome to Test</h1>
      <p>Please enter your name</p><input type="text" placeholder="Name" id="nameinpbox"/><button onClick={storename}>Enter</button>
      {Timer? Result() : Questions()}
    </div>
  );
}
