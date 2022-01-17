import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Jobs } from './components/Jobs';
import { PrivateRoute } from './components/PrivateRoute';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/login"} element={<Login></Login>} />
        <Route path={"/jobs"} element={<PrivateRoute><Jobs></Jobs></PrivateRoute>} />
        <Route path={"/"} element={<Login></Login>} />
        <Route path={"/notauthorised"} element= {<h1>Not authorised </h1>}/>
        <Route path={"*"} element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
