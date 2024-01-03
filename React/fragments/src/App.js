import logo from './logo.svg';
import './App.css';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import Input_Class_Component from './Components/Input_Class_Component';
import FocusInput from './Components/FocusInput';
import Forwarding_Refs_Parent from './Components/Forwarding_Refs_Parent';
import PortalDemo from './Components/PortalDemo';
import User from './Components/User';
import { UserProvider } from './Components/Context/UserContext';
import ComponentC from './Components/Context/ComponentC';

function App() {
  return (
    <div className="App">
      <UserProvider value='Komal'>
          <ComponentC />
      </UserProvider>
      {/* <Counter>
        {((count,incrementCounter) =>
          <RenderPropsPart2_click count={count} incrementCounter={incrementCounter} />
        )}
      </Counter> */}
     {/* <Counter render={(count,incrementCounter) =><RenderPropsPart2_click count={count} incrementCounter={incrementCounter} />}/> */}
    
     {/* <Counter render={(count,incrementCounter) =><RenderPropsPart2_hover count={count} incrementCounter={incrementCounter} />}/> */}


  {/* <User name={()=>'Komal'} /> */}
      {/* <RenderPropsPart1_click />
      <RenderPropsPart1_hover />
      // {/* <RenderPropsPart2 name="Komal" /> */}
      {/* <RenderPropsPart2_click render={ (isLoggedIn) => isLoggedIn ? "Komal" : "Guest"}/> */} 

      {/* <HigherOrderPart1_Hover /> */}
      {/* <HigherOrderPart1 name="Komal"/> */}
        {/*<ErrorBoundary>
          <Hero name="Komal"/>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero name="Piya"/>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero name="Joker"/>
        </ErrorBoundary>*/}


      {/* <PortalDemo /> */}
      {/* <Forwarding_Refs_Parent /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComponent /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
    </div>  
  );
}

export default App;
