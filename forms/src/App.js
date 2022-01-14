import logo from './logo.svg';
import './App.css';
import { useState,useRef } from 'react';

function App() {
  const [form,setForm] = useState({})
  const ref = useRef(null)

  const Handlesubmit=(e)=>{
    e.preventDefault()
    console.log(form)
    console.log('ref',ref.current.files)
  }


  const Handlechange=(e)=>{
    
    
    const{name,value} = e.target
    setForm({
      ...form,
      [name]:value
    })

  }

  return (
    <div className="App">
      <div className='inputform'>
      <form onSubmit={Handlesubmit}>
        <table>
          <tbody>
          <tr>
            <td>Enter your name :-</td>
            <td><input onChange={Handlechange} type="text" name='Name' autoComplete='off' placeholder='name'></input></td>
          </tr>
          <tr>
            <td>Enter your age :-</td>
            <td><input onChange={Handlechange} type="number" name='Age' autoComplete='off' placeholder='age'></input></td>
          </tr>
          <tr>
            <td>Enter your address :-</td>
            <td><input onChange={Handlechange} type="text" name='address' autoComplete='off' placeholder='address'></input></td>
          </tr>
          <tr>
            <td>Enter your Salary :-</td>
            <td><input onChange={Handlechange} type="number" name='Salary' autoComplete='off' placeholder='salary'></input></td>
          </tr>
          <tr>
            <td>Select Department :-</td>
            <td>
              <select name='department' onChange={Handlechange}>
                <option>None</option>
                <option>Hr</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>Accounts</option>
              </select>
              </td>
          </tr>
          <tr>
            <td>Choose Marital status :-</td>
            <td onChange={Handlechange}>
               <input type="checkbox" id='married' name='Marital' value='married' placeholder='salary'></input>
               <label htmlFor='married'>Married</label>

               <input type="checkbox" id='unmarried' name='Marital' value='unmarried' placeholder='salary'></input>
               <label htmlFor='unmarried'>UnMarried</label>
            </td>
          </tr>
          <tr>
            <td>Upload Image :-</td>
            <td><input ref={ref} onChange={Handlechange} type="file"></input></td>
          </tr>
          <tr>
            <td><input type='submit'></input></td>
          </tr>
          </tbody>
        </table>
      </form>
      </div>
    </div>
  );
}

export default App;
