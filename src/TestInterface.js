import React,{useState} from "react";
import "./style.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import QuestionsArr from './Questions'



export default function TestInterface() {

  let [qno,setqno]=useState(0)
  // let [Timer,setTimer] = useState(false)
  let [Timer,setTimer] = useState(true)


  // setTimeout(()=>{
  //   setTimer(true)
  // },5000)

  function nextquestion()
  {
    setqno(qno+1)
  }
  function prevquestion()
  {
    setqno(qno-1)
  }



  function Questions()
  {
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
          <div>

          <p>{qno+1}. {QuestionsArr[qno].question}</p>
          <div class="optionscontainer">
          {QuestionsArr[qno].options.map((ele,index)=>{
            return(
              <div key={index}>
              <input type="radio"  name="fav_language" value={ele}/>
              <label>{ele}</label>
              </div>
              )

          })}
          </div>

          <div id="buttonscontainer">
          {qno>0 ? (<button onClick={prevquestion}>Prev</button>):(<button disabled="true">Prev</button>)}
          {qno==QuestionsArr.length-1 ? (<button>Submit</button>):''}
          {qno<QuestionsArr.length-1 ? (<button onClick={nextquestion}>Next</button>):(<button disabled="true">next</button>)}
          </div>


          </div>
        </div>



      </div>
      



    </React.Fragment>    )
  }

  // function Result()
  // {
  //   return(
  //     <>
  //    <h1>result</h1>
  //     </>
  //   )
  // }



  return(
    <div>
      {Timer?Result():Questions()}
    </div>
  )

}
