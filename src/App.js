// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [counter,setcounter]=useState(0);
  return (
    <div className="App">
       <div id='parent'>
            <h1>{counter}</h1>
            <div>
                <button onClick={()=>{setcounter(counter+1)}}>Increment</button>
                <button onClick={()=>{setcounter(counter-1)}}>Decrement</button>
            </div>
        </div>
        <h1>hello</h1>

      
    </div>
  );
}

export default App;
