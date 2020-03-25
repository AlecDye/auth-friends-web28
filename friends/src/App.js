import React from "react";
import {Route, Link, Switch } from "react-router-dom"
import "./App.css";

// Components
import FriendList from "./components/FriendList";
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/protected">Protected</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Switch>
      <PrivateRoute exact path="/protected" component={FriendList} />
      <Route path="/login" component={Login} />
      <Route component={Login} />
      </Switch>
  );
}

export default App;
