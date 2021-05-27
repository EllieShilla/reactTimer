import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [time,setTime]=useState(0);
  const [pause,IsPause]=useState(false);

  useEffect(()=>{
    if(time>=1 & pause===false)
    {
      var handleOfTimer=setInterval(()=> updateTime(),1000);
        return ()=>clearInterval(handleOfTimer);
    }
     else if(pause===true & time<=0){
           return () => clearTimeout(time);
     }
  
  });

  const updateTime=value=>{
    setTime(time-1);
  }



  return (
    <div className="App">
      <input type="text" onChange={e=>setTime(e.target.value)}/>
      <h1>{time}</h1>
      <button onChange={()=>IsPause(false)}>Start</button>
      <button>Stop</button>
      <button onChange={()=>IsPause(true)}>Pause</button>
    </div>
  );
}

export default App;




