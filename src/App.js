import React,{useState} from "react";
import "./style.css";
import {Router,Route,Link,useNavigate} from 'react-router-dom'

let ShareName="";
export default ShareName;


export default function App() {
  let navigate=useNavigate();

  let [name,Setname]=useState({UserName:""});

  function HandleInputs(e)
  {
    let key=e.target.name;
    Setname({...name,[key]:e.target.value})
  }

  function storename()
{
 ShareName=name;
 navigate('/TestInterface')
 console.log(name)
}

  return (
    <div>
      <h1>Welcome to Test</h1>
      <p>Please enter your name</p>
      <input type="text" placeholder="Name" name="UserName" value={name.UserName} id="nameinpbox" onChange={HandleInputs}/>
      <button onClick={storename}>Enter</button>
      {/* {Timer? Result() : Questions()} */}
    </div>
  );
}

