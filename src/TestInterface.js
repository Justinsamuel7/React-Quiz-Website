import React,{useState} from "react";
import "./style.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import QuestionsArr from './Questions'

let Marks=0;


export default function TestInterface() {

  let [qno,setqno]=useState(0)
  let [Timer,setTimer] = useState(false)
  let []


  // setTimeout(()=>{
  //   setTimer(true)
  // },5000)

  function nextquestion(qnoforbtn)
  { 
    let BtnsMap =  document.querySelectorAll('.BtnsMap')
    BtnsMap[qnoforbtn].disabled=false
    setqno(qno+1)
  }


  function prevquestion()
  {
    setqno(qno-1)
  }

  function goto(num)
  {  
    setqno(num)
  }



  function Questions()
  {


  

    return(
  <React.Fragment>
      <div id="Qpartandmap">

      
        <div id="map">

          <div id="buttonsContainer">
            <button onClick={()=>goto(0)}>1</button>
            <button disabled="true" onClick={()=>goto(1)} class="BtnsMap" > 2 </button>
            <button disabled="true" onClick={()=>goto(2)} class="BtnsMap" > 3 </button>
            <button disabled="true" onClick={()=>goto(3)} class="BtnsMap" > 4 </button>
            <button disabled="true" onClick={()=>goto(4)} class="BtnsMap" > 5 </button>
            <button disabled="true" onClick={()=>goto(5)} class="BtnsMap" > 6 </button>
            <button disabled="true" onClick={()=>goto(6)} class="BtnsMap" > 7 </button>
            <button disabled="true" onClick={()=>goto(7)} class="BtnsMap" > 8 </button>
            <button disabled="true" onClick={()=>goto(8)} class="BtnsMap" > 9 </button>
            <button disabled="true" onClick={()=>goto(9)} class="BtnsMap"> 10 </button>
            <button disabled="true" onClick={()=>goto(10)} class="BtnsMap"> 11 </button>
            <button disabled="true" onClick={()=>goto(11)} class="BtnsMap"> 12 </button>
            <button disabled="true" onClick={()=>goto(12)} class="BtnsMap"> 13 </button>
            <button disabled="true" onClick={()=>goto(13)} class="BtnsMap"> 14 </button>
            <button disabled="true" onClick={()=>goto(14)} class="BtnsMap"> 15 </button>
            <button disabled="true" onClick={()=>goto(15)} class="BtnsMap"> 16 </button>
            <button disabled="true" onClick={()=>goto(16)} class="BtnsMap"> 17 </button>
            <button disabled="true" onClick={()=>goto(17)} class="BtnsMap"> 18 </button>
            <button disabled="true" onClick={()=>goto(18)} class="BtnsMap"> 19 </button>
            <button disabled="true" onClick={()=>goto(19)} class="BtnsMap"> 20 </button>

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
          {qno<QuestionsArr.length-1 ? (<button onClick={()=>nextquestion(qno)}>Next</button>):(<button disabled="true" onClick={()=>goto(1)}>next</button>)}
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
