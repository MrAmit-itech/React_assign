import logo from './logo.svg';
import './App.css';
import { Home } from './Components/home';
import { Product } from './Components/product';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/navbar';
import { Single } from './Components/singleproduct';

function App() {
  return (
    <div className="App">
        <Navbar/>
       
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/product/:identifier" element={<Product/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
