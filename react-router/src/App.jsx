import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import {Route,Routes} from "react-router-dom"
import { Contact } from './components/Contactus';
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="/about" element={<About/>} ></Route>

        <Route path="/contact" element={<Contact/>}></Route>

        <Route path="/products/:identifier/menu/:menuid" element={<Products/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
