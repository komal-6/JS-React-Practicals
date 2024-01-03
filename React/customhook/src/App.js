import React from 'react'
import logo from './logo.svg';
import './App.css';
import CounterOne from './Components/Hooks/UseCounter/CounterOne';
import CounterTwo from './Components/Hooks/UseCounter/CounterTwo';
import UserForm from './Components/Hooks/UseInput/UserForm';

function App() {
  return (
    <div className="App">
        <UserForm />
        {/* <CounterOne />
        <CounterTwo /> */}
        {/* <DocumentTitleOne /> */}
        {/* <DocumentTitleTwo /> */}
    </div>
  );
}

export default App;
