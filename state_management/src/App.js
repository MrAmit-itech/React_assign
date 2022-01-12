import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
 
  const[count,setCount] = useState(()=>{
    console.log('run function')
    return 0
  })

  function Decrement(){
    setCount(prevCount => prevCount -1)
  }

  function Increment(){
    setCount(prevCount => prevCount +1)
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
