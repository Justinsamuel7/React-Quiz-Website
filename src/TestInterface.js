import React,{useState} from "react";
import "./style.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import QuestionsArr from './Questions'



export default function TestInterface() {

  let [qno,setqno]=useState(0)
  let [Timer,setTimer] = useState(false)


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

  function goto(Qno)
  {
    setqno(1)
  }



  function Questions()
  {
    return(
  <React.Fragment>
      <div id="Qpartandmap">

      
        <div id="map">

          <div id="buttonsContainer">
            <button onClick={()=>goto(0)}>1</button>
            <button disabled="true" onClick={()=>goto(1)}>2</button>
            <button disabled="true" onClick={()=>goto(2)}>3</button>
            <button disabled="true" onClick={()=>goto(3)}>4</button>
            <button disabled="true" onClick={()=>goto(4)}>5</button>
            <button disabled="true" onClick={()=>goto(5)}>6</button>
            <button disabled="true" onClick={()=>goto(6)}>7</button>
            <button disabled="true" onClick={()=>goto(1)}>8</button>
            <button disabled="true" onClick={()=>goto(1)}>9</button>
            <button disabled="true" onClick={()=>goto(1)}>10</button>
            <button disabled="true" onClick={()=>goto(1)}>11</button>
            <button disabled="true" onClick={()=>goto(1)}>12</button>
            <button disabled="true" onClick={()=>goto(1)}>13</button>
            <button disabled="true" onClick={()=>goto(1)}>14</button>
            <button disabled="true" onClick={()=>goto(1)}>15</button>
            <button disabled="true" onClick={()=>goto(1)}>16</button>
            <button disabled="true" onClick={()=>goto(1)}>17</button>
            <button disabled="true" onClick={()=>goto(1)}>18</button>
            <button disabled="true" onClick={()=>goto(1)}>19</button>
            <button disabled="true" onClick={()=>goto(1)}>20</button>

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
          {qno>0 ? (<button onClick={prevquestion}>Prev</button>):(<button disabled="true" onClick={()=>goto(1)}>Prev</button>)}
          {qno==QuestionsArr.length-1 ? (<button>Submit</button>):''}
          {qno<QuestionsArr.length-1 ? (<button onClick={nextquestion}>Next</button>):(<button disabled="true" onClick={()=>goto(1)}>next</button>)}
          </div>


          </div>
        </div>



      </div>
      



    </React.Fragment>    )
  }

  function Result()
  {
    return(
      <>
     <h1>result</h1>
      </>
    )
  }



  return(
    <div>
      {Timer?Result():Questions()}
    </div>
  )

}
