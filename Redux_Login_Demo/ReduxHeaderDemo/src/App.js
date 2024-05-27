import './App.css';
import Logout from './Components/User/Logout';
import Login from './Components/User/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './Components/Feature/userSlice';
import {BrowserRouter as Router, Route,Redirect, Switch} from 'react-router-dom'

function App() {
  const user = useSelector(selectUser)
  return (
      <div>
         {/* {user ? <Logout /> : <Login />}  */}

         <Router>
          <Switch>
            <Route path="/login">
              {user ? <Redirect to= "/logout"/> : <Login />}
            </Route>
            <Route path="/logout">
              {user ? <Logout /> : <Redirect to= "/login"/>}
            </Route>
            <Route path="/">
              {user ? <Redirect to="/logout" />: <Redirect to="/login" /> }
            </Route>
          </Switch>
         </Router>
      </div>

  );
}

export default App;
