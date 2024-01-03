import React from 'react'
import logo from './logo.svg';
import './App.css';
import CounterOne from './Components/useReducer(SimpleStateAndAction)/CounterOne';
import CounterTwo from './Components/useReducer(SimpleStateAndAction)/CounterTwo';
import CounterThree from './Components/CounterThree';

function App() {
  return (
    <div className="App">
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
       <CounterThree />
    </div>
  )
}

export default App;
