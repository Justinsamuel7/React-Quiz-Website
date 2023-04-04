import React,{useState,useNavigate} from "react";
import "./style.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Q1 from "./Q1";
import Q2 from "./Q2";




export default function TestInterface() {

  const navigate = useNavigate();
   
  function nextquestion()
  {
    navigate('Q'+1)

  }

  function prevquestion()
  {
    
  }


  return(
    <React.Fragment>
      <div id="Qpartandmap">

      
        <div id="map">

          <div id="buttonsContainer">
            <button>1</button>
            <button disabled="true">2</button>
            <button disabled="true">3</button>
            <button disabled="true">4</button>
            <button disabled="true">5</button>
            <button disabled="true">6</button>
            <button disabled="true">7</button>
            <button disabled="true">8</button>
            <button disabled="true">9</button>
            <button disabled="true">10</button>
            <button disabled="true">11</button>
            <button disabled="true">12</button>
            <button disabled="true">13</button>
            <button disabled="true">14</button>
            <button disabled="true">15</button>
            <button disabled="true">16</button>
            <button disabled="true">17</button>
            <button disabled="true">18</button>
            <button disabled="true">19</button>
            <button disabled="true">20</button>

          </div>

        </div>

        <div id="Qpart">
          <Routes >
            <Route path="/" element={<Q1/>}/>
            <Route path="/Q2" element={<Q2/>}/>
          </Routes>

          <button onClick={}>Prev</button>
          <button onClick={}>Next</button>

        </div>



      </div>
      



    </React.Fragment>
  )

}
