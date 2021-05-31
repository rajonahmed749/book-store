import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Shared/Login/Login';
import Navbar from './Components/Shared/Navbar/Navbar';
import Admin from './Components/Admin/Admin/Admin';

function App() {
  return (
    <div>
    
     <Router>
       <Navbar/>
        <Switch>
          <Route exact path="/">
           <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
