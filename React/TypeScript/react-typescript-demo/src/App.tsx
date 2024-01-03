import { Stats } from 'fs';
import './App.css';
import { PersonList } from './Components/PersonList';
import { Status } from './Components/Status';
import { Heading } from './Components/Heading';
import { Oscar } from './Components/Oscar';
import { Greet } from './Components/Greet';
import { Button } from './Components/Events/Button';
import { Container } from './Components/Container';

function App() {
  // const personName ={
  //   firstName: 'Komal',
  //   lastName:'Panchal' 
  // }
  // const nameList = [
  //   {
  //     firstName: 'Komal',
  //     lastName: 'Panchal',
  //   },
  //   {
  //     firstName: 'Piya',
  //     lastName: 'Panchal',
  //   },
  //   {
  //     firstName: 'Kavya',
  //     lastName: 'Panchal',
  //   },
  // ]
  return (
    <div className="App">
      {/* <Greet  name='Komal' messageCount={10} isLoggedIn={false}/>
      <Person name={personName}/> */}
      {/* <PersonList names={nameList}/> */}
      {/* <Status status="Loading"/>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to cnwkdsdewkd</Heading>
      </Oscar>
      <Greet name='Komal' isLoggedIn={false}/> */}

      {/* <Button handleClick={(event)=>{
        console.log('Button Clicked',event)
      }}></Button> */}

      {/* <Input value='' handleChange={(event) => console.log(event)}/> */}
      <Container styles={{ border:'1px solid black', padding: '1rem'}}/>
    </div>
  );
}

export default App;
