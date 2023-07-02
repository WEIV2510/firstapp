import { useState } from 'react';
import './App.css';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';

function App() {
  setInterval(UpdateTime, 1000);
  let now = new Date().toLocaleTimeString('th-TH');
  const [time, setTime] = useState(now);
  const [num, setNum] = useState(0);

  function UpdateTime() {
    let newTime = new Date().toLocaleTimeString('th-TH');
    setTime(newTime);
  }

  return (
  <div>
    <MyHeader />
      <div className='My-content'>
        <div>ขณะนี้เวลา</div>
        <div>{time}</div>
        <h2>{num}</h2>
        <button onClick={()=>setNum(num+1)}>เพิ่ม</button><button onClick={()=>setNum(num-1)}>ลด</button>
      </div>
    <MyFooter />
  </div>
  );
}

export default App;