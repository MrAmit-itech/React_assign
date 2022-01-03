import logo from './logo.svg';
import './App.css';
import db from "./components/db" 
import { useState } from 'react';

function App() {
  
  const handlesubmit=(e)=>{
    e.preventDefault()
    var obj={
      title:e.target.title.value,
      ingredients:e.target.ingredients.value,
      time:e.target.time.value,
      instruction:e.target.instruction.value,
      image_url:e.target.img.value
    }

    console.log(obj)
    db.push(obj)
    console.log('db',db)
  }
  
  return (
    <div className="App">
     <div className='left'>
         <form onSubmit={handlesubmit} action="">
           <table>
            <tbody>
            <tr>
             <td>Title:</td>
             <td><input id='title' type="text" placeholder='enter value' /></td>
           </tr>
           <tr>
             <td>Ingredients:</td>
             <td> <input id='ingredients' type="text" placeholder='enter value' /> </td>
           </tr>
           <tr>
             <td>Time to cook:</td>
             <td><input id='time' type="datetime-local" placeholder='enter value' /> </td>
           </tr>
           <tr>
             <td>Instructions:</td>
             <td><input id='instruction' type="text" placeholder='enter value' /> </td>
           </tr>  
           <tr>
             <td>Image:</td>
             <td><input id='img' type="url" placeholder='enter url' /> </td>
           </tr> 
           <tr>
              <td><input type="submit" /></td>
            </tr>  
            </tbody>
           </table>
          </form> 
     </div>
     <div>
       
     </div>
     
    </div> 
  );
  
}

export default App;
