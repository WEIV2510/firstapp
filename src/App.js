import './App.css';
import Header from './Header';
import Footer from './Foooter';
import { useState } from 'react';
function App() {
  const [num,setNum] = useState(0);
  return (
    <div className="App">
      <Header />
      <div className='MyContent'>
        <h2>[num]</h2>
        <button onClick={()=>setNum(num+1)}>เพิ่ม</button>
        <button onClick={()=>setNum(num+1)}>ลด</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
