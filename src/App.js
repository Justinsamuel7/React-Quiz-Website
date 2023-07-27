import React,{useState, useEffect} from "react";
import "./WelcomePage.css";
import {Router,Route,Link,useNavigate} from 'react-router-dom'

export let Name="";
export let Title="";

export default function App() {
  let navigate=useNavigate();

  let [name,Setname]=useState({UserName:""});

  let [isButtonDisabled, setIsButtonDisabled] = useState(true);


 function check(){

  console.log(name.UserName)
  console.log(name.UserName.length)

    if (name.UserName.length < 1) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }

  // let btnEnb = document.getElementById('btnEnb')
  function HandleInputs(e)
  {
    let key=e.target.name;
    Setname({...name,[key]:e.target.value})
    check()
  }

  function storename()
  {
    Title=document.getElementById('titleSelect').value
    Name=name.UserName;
    navigate('/LoadingBeforeStarting')
    console.log(name)
  }

  return (
    <div class="welcomepagecontentContainer">
      <h1 className="pagetitlecolor animate__animated animate__bounceInDown">Welcome to <span className="pagetitlecolorspan">Just</span>est.<span className="pagetitlecolorspan">IN</span></h1>
      <p>Please enter your full name to continue</p>
      <div>
        <select name="Title" id="titleSelect">
          <option value="Mr">Mr.</option>
          <option value="Ms">Ms.</option>
          <option value="Dr">Dr.</option>
        </select>
        <input type="text" placeholder="Full Name" name="UserName" value={name.UserName} id="nameinpbox" onChange={HandleInputs}/>
        <button onClick={storename} disabled={isButtonDisabled} id="btnEnb">Enter</button>
      </div>
      {/* {Timer? Result() : Questions()} */}
    </div>
  );
}

