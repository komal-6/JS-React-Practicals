import logo from './logo.svg';
import './App.css';
import UseState from './Components/UseState/UseState';
import UseReducer from './Components/UserReducer/UseReducer';
import ObjectUseState from './Components/ImmutableState/ObjectUseState';
import Parent1 from './Components/Optimization/Parent1';
import Child1 from  './Components/Optimization/Child1'
import GrandParent from './Components/Optimization/GrandParent';
import Parent2 from './Components/Optimization/Parent2';
import Parent3 from './Components/IncorrectOptimization/Parent3';
import Parent4 from './Components/IncorrectOptimization/Parent4';
import ContextParent from './Components/Context/ContextParent';
import { ChildA } from './Components/Context/ContextChildren';

function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA />
      </ContextParent>
      {/* <Parent4 /> */}
      {/* <Parent2 /> */}
      {/* <GrandParent /> */}
      {/* <Parent /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseState /> */}
        {/* <UseState /> */}
        {/* <UseReducer /> */}
    </div>
  );
}

export default App;
