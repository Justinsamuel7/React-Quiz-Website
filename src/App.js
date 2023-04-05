import React,{useState} from "react";
import "./style.css";
import {Router,Route,Link,useNavigate} from 'react-router-dom'

let name = ""


export default function App() {
  let [Timer,setTimer] = useState(false)
  let navigate=useNavigate();


  function storename()
{
 name = document.getElementById('nameinpbox').value;
 navigate('/TestInterface')
 console.log(name)
}

  return (
    <div>
      <h1>Welcome to Test</h1>
      <p>Please enter your name</p><input type="text" placeholder="Name" id="nameinpbox"/><button onClick={storename}>Enter</button>
      {/* {Timer? Result() : Questions()} */}
    </div>
  );
}

