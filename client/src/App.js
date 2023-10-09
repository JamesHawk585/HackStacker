//  rafce


// How do I handle authentication on the front end? 
//    - Validation components in bootstrap?
// - just a from with usernmae and passwords field, use bootstrap.
// - Refrence the last lab on the client side.  
// How do my react router routes relate to my Flask SQLAlchemy routes?
// Feedback on the structure of my React app? 
// What is best practice for naming my files? It's a mess. 
// What is the difference between a navbar and react router?

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./NavBar"; 
import Profile from "./Profile"
import PostBlog from"./PostBlog


//  rc/App.js
  // Line 25:8:  'NavBar' is not defined
function App() {

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">HackStacker</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/newpost">New Post</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/newpost">
            <Postblog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
  export default App;
