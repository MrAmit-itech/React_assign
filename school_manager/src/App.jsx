import logo from './logo.svg';
import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import {Route,Routes} from "react-router-dom"
import Homepage from './pages/homepage';
import Dbupdate from './pages/dbupdate';
import Individual from './pages/individual';
import Dummy from './pages/dummy';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/dbupdate' element={<Dbupdate/>}></Route>
        <Route path='/individual' element={<Individual/>}></Route>
        <Route path='/dummy' element={<Dummy/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
