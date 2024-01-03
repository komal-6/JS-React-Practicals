import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import React from 'react';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import Conditional_Rendering from './components/Conditional_Rendering';
import List_Rendering from './components/List_Rendering';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyle.css';
import styles from './components/appStyle.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      {/* <Stylesheet primary={true}/> */}
      {/* <List_Rendering /> */}
      {/* <Conditional_Rendering /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Greet name="Komal" heroName="A wonder woman"/> */}
      {/* <Message /> */}
       {/* <Greet name="Piya" heroName="batman">
        <p>This is the children props</p>
       </Greet>
       <Greet name="Kavya" heroName="spiderman">
       <button name="submit" value="submit">Submit</button>
       </Greet>
       <Greet name="Kajal" heroName="superman"/>
    */}
      {/* <Welcome name="Piya" heroName="batman" />
      <Welcome name="Kavya" heroName="spiderman"/>
      <Welcome name="Kajal" heroName="superman"/>  */}
      {/* <Hello />  */}
    </div>
  );  
}


export default App;
