import logo from './logo.svg';
import './App.css';

function App() {
  var os_arr = ['Android','Blckberry','iPhone','Windows Phone']
  var mob_arr = ['Samsung','HTC','Micromax','Apple']
  var ul_style = ['square','square','','circle',]
  var count = 0
  return (
    <div className="App">
     <div className="App">
      <h1>Mobile Operating System</h1>{os_arr.map((el)=>(<ul><li>{el}</li></ul>))}
      <h1>Mobile Manufacturers</h1>{mob_arr.map((el)=>(<ul><li style={{listStyleType:`${ul_style[count++]}`}} id='list'>{el}</li></ul>))}
    </div>
    </div>
  );
}

export default App;
