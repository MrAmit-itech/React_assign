import logo from './logo.svg';
import './App.css';
import db from "./components/db" 
import { useState } from 'react';
import DisplayForm from './components/Form';

function App() {
  return <>
    <div className='left'><DisplayForm/></div>
    <div className='right'></div>
  </>
  
}

export default App;
