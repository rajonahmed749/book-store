import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Shared/Login/Login';
import Navbar from './Components/Shared/Navbar/Navbar';
import Admin from './Components/Admin/Admin/Admin';
import Nofound from './Components/Home/Nofound/Nofound';
import { createContext, useState } from 'react';
import Checkout from './Components/Home/Checkout/Checkout';
import Orders from './Components/Home/Orders/Orders';
import PrivateRoute from './Components/Home/PrivateRoute/PrivateRoute';
export const UserContext = createContext()
function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/checkout/:id">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="*">
              <Nofound />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
