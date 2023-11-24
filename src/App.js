import React from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/SignUp/Signup';
import Signin from './components/Signin/Signin';
import HostCottage from './components/HostCottage/Host';


function App() {

  return (
    <Router>
      <Switch>
        <Route path='/signup'>
          <Signup></Signup>
        </Route>
        <Route path='/signin'>
          <Signin></Signin>
        </Route>
        <Route path='/host/:apiKey'>
          <HostCottage></HostCottage>
        </Route>
        <Route>
          <Home></Home>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
