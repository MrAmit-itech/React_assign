import logo from './logo.svg';
import './App.css';
import Final from './components/Grocery';
import Grocerylist from './components/GroceryList';


function App() {
  return (
    <div className="App">
        <h1 className='head'>GROCERY LIST</h1>
        <Grocerylist/>
    </div>
  );
}

export default App;
