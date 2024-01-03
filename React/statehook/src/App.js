import logo from './logo.svg';
import './App.css';
import React from 'react';
import ComponentC from './Components/useContext/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Komal'}>
        <ChannelContext.Provider value={'codevolution'}>
            <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
            
      {/* <DataFetchingPart1 /> */}
      {/* <IntervalHookCounter /> */}
      {/* <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassCounterOne /> */}
        {/* <ClassCounter /> */}
        {/* <HookCounter /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterFour /> */}
        {/* <ClassCounterOneuseEffect /> */}
        {/* <HookCounterOneuseEffect /> */}
    </div>
  );
}

export default App;
