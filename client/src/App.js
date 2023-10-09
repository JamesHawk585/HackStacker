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
import NavBar from "NavBar"; 


//  rc/App.js
  // Line 25:8:  'NavBar' is not defined
function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/Home">
          <Home home={Home} />
        </Route>
        <Route exact path="/">
          <div>HackStacker</div>
        </Route>
      </Switch>
    </div>
  )
}
  export default App;
