import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
    
     <Router>
        <Switch>
          <Route exact path="/">
           <Home/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
