import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
 
  const[count,setCount] = useState(0)

  function Decrement(){
    setCount(count-1)
  }

  function Increment(){
    setCount(count+1)
  }

  function Double(){
    setCount(count*2)
  }

    return (
    <div className="App">
        <button onClick={Decrement}>-</button>
        <span>{count}</span>
        <button onClick={Increment}>+</button>
        <button onClick={Double}>Double</button>
    </div>
  ); 
}




export default App;
