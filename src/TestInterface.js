import React,{useState,useEffect} from "react";
import "./style.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import QuestionsArr from './Questions'

let Marks=0;


export default function TestInterface() {

  // useEffect(() => {
  //   const element = document.getElementById("Qpartandmap");
  //   element.requestFullscreen();

  //   document.addEventListener("fullscreenchange", () => {
  //     if (document.fullscreenElement === element) {
  //       console.log("Entered full-screen mode.");
  //     } else {
  //       console.log("Exited full-screen mode.");
  //     }
  //   });

  //   return () => {
  //     document.removeEventListener("fullscreenchange", () => {});
  //     document.exitFullscreen();
  //   }
  // }, []);

  let [qno,setqno]=useState(0) // To manage the question
  let [TimerANDTestON,setTimerANDTestON] = useState(false)  //to end the test after the time

  let [BtnDisabled,setBtnDisabled]=useState([false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]) //Button Map Disabled Values

  let [SelectedAnswers,setSelectedAnswers]=useState([]);

  // let [Qmap,setQmap] = useState(true)


  // setTimeout(()=>{
  //   setTimerANDTestON(true)
  // },5000)
  function HandleSelection(MyAnswer,Qno)
  {
    let TempSelectedAnswers = [...SelectedAnswers];
    TempSelectedAnswers[Qno]=MyAnswer;
    setSelectedAnswers(TempSelectedAnswers);
  }

  function nextquestion(qnoforbtn)
  { 
    // let BtnsMap =  document.querySelectorAll('.BtnsMap')
    // BtnsMap[qnoforbtn].disabled=false
    // setQmap([...BtnsMap,BtnsMap[qnoforbtn].disabled=false])

    let TempArr=[...BtnDisabled]
    TempArr[qnoforbtn+1]=false;
    setBtnDisabled(TempArr);
    setqno(qno+1)
  }


  function prevquestion()
  {
    setqno(qno-1)
  }

  // travel through the active questions
  function goto(num)
  {  
    setqno(num)
  }



  // to Display the question

  //style={{ backgroundColor: "#fff" }}

  function Questions()
  {
    return(
  <React.Fragment>
      <div id="Qpartandmap" >
      
        <div id="map">

          <div id="buttonsContainer">
            <button disabled={BtnDisabled[0]} onClick={()=>goto(0)}>1</button>
            <button disabled={BtnDisabled[1]} onClick={()=>goto(1)} class="BtnsMap" > 2 </button>
            <button disabled={BtnDisabled[2]} onClick={()=>goto(2)} class="BtnsMap" > 3 </button>
            <button disabled={BtnDisabled[3]} onClick={()=>goto(3)} class="BtnsMap" > 4 </button>
            <button disabled={BtnDisabled[4]} onClick={()=>goto(4)} class="BtnsMap" > 5 </button>
            <button disabled={BtnDisabled[5]} onClick={()=>goto(5)} class="BtnsMap" > 6 </button>
            <button disabled={BtnDisabled[6]} onClick={()=>goto(6)} class="BtnsMap" > 7 </button>
            <button disabled={BtnDisabled[7]} onClick={()=>goto(7)} class="BtnsMap" > 8 </button>
            <button disabled={BtnDisabled[8]} onClick={()=>goto(8)} class="BtnsMap" > 9 </button>
            <button disabled={BtnDisabled[9]} onClick={()=>goto(9)} class="BtnsMap"> 10 </button>
            <button disabled={BtnDisabled[10]} onClick={()=>goto(10)} class="BtnsMap"> 11 </button>
            <button disabled={BtnDisabled[11]} onClick={()=>goto(11)} class="BtnsMap"> 12 </button>
            <button disabled={BtnDisabled[12]} onClick={()=>goto(12)} class="BtnsMap"> 13 </button>
            <button disabled={BtnDisabled[13]} onClick={()=>goto(13)} class="BtnsMap"> 14 </button>
            <button disabled={BtnDisabled[14]} onClick={()=>goto(14)} class="BtnsMap"> 15 </button>
            <button disabled={BtnDisabled[15]} onClick={()=>goto(15)} class="BtnsMap"> 16 </button>
            <button disabled={BtnDisabled[16]} onClick={()=>goto(16)} class="BtnsMap"> 17 </button>
            <button disabled={BtnDisabled[17]} onClick={()=>goto(17)} class="BtnsMap"> 18 </button>
            <button disabled={BtnDisabled[18]} onClick={()=>goto(18)} class="BtnsMap"> 19 </button>
            <button disabled={BtnDisabled[19]} onClick={()=>goto(19)} class="BtnsMap"> 20 </button>
          </div>
          <button onClick={SubmitTest} id="leftsideSubmit"> Submit </button>


        </div>

        <div id="Qpart">
          <div>

          <p>{qno+1}. {QuestionsArr[qno].question}</p>
          <div class="optionscontainer">
          {QuestionsArr[qno].options.map((Option,index)=>{

            return(
              <div key={index}>
              <input type="radio"  name="Options" value={Option} checked={SelectedAnswers[qno]===Option} onChange={()=>HandleSelection(Option,qno)}/>
              <label>{Option}</label>
              </div>
              )

          })}
          </div>

          <div id="buttonscontainer">
          {qno>0 ? (<button onClick={prevquestion}>Prev</button>):(<button disabled="true" onClick={()=>goto(1)}>Prev</button>)}
          {qno==QuestionsArr.length-1 ? (<button onClick={SubmitTest}>Submit</button>):''}
          {qno<QuestionsArr.length-1 ? (<button onClick={()=>nextquestion(qno)}>Next</button>):(<button disabled="true" onClick={()=>goto(1)}>next</button>)}
          </div>


          </div>
        </div>

      </div>

    </React.Fragment>)
  }


  function SubmitTest()
  {
    
    setTimerANDTestON(true);
  }
  // To display the result at submit button or after time runs out
  function Result()
  {
    return(
      <>
     <h1>result Page </h1>
     <h3>Your Marks _/20</h3>
      </>
    )
  }



  return(
    <div>
      {TimerANDTestON?Result():Questions()} 
    </div>
  )

}
