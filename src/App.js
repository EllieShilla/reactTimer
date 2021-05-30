import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [time,setTime]=useState(0);
  const [pause,IsPause]=useState(false);
  const [stop,IsStop]=useState(false);


  useEffect(()=>{
    if(time>=1 & pause===false)
    {
      var handleOfTimer=setInterval(()=> updateTime(),1000);
        return ()=>clearInterval(handleOfTimer);
    }
     else if(pause===true || time<=0){
           return () => clearInterval(time);
     }

      if(stop===true){
        return () => clearInterval(time);
      }
  
  });

  const updateTime=value=>{
    setTime(time-1);
  }

  const setStop=value=>{
    setTime(0);
    IsStop(true);
  }

  const setPause=value=>{
    if(pause===true & time>=1)
    IsPause(false);
    else if (pause===false & time>=1)
    IsPause(true);
  }


  const setNewTime=value=>{
    setTime(document.getElementById("timerTime").value);
  }

  return (
    <div className="App">
      <input type="text" id="timerTime" />
      <h1>{time}</h1>
      <button onClick={setNewTime}>Start</button>
      <button onClick={setStop}>Stop</button>
      <button onClick={setPause}>Pause</button>
    </div>
  );
}

export default App;




