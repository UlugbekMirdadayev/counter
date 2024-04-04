import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import count, { setCount } from './redux/count';

function App() {
  const dispatch = useDispatch();


  const handleDecreaseCount = (count)=>{
   dispatch(setCount(count))
  }

  const handleIncreaseCount = (count)=>{
    dispatch(setCount(count))
   }

  return (
    <div className="App">
      <button onClick={()=>handleDecreaseCount(count + 1)}>Decrease</button>
      <h1>{count}</h1>
      <button onClick={()=>handleIncreaseCount(count - 1)}>Increase</button>
    </div>
  );
}

export default App;
