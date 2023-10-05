//  rafce


// How do I handle authentication on the front end? 
//    - Validation components in bootstrap?
// - just a from with usernmae and passwords field, use bootstrap.
// - Refrence the last lab on the client side.  
// How do my react router routes relate to my Flask SQLAlchemy routes?
// Feedback on the structure of my React app? 
// What is best practice for naming my files? It's a mess. 
// What is the difference between a navbar and react router?

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNav from './Navbar';
import Postblog from './Postblog';
import Profile from './Profile';
import Home from './Home';

function App() {
  console.log(window.location)


  switch((window.location.pathname)) {
    case "/":
      Component = Home;
      break;
    
    case "/profile":
      Component = Profile;
      break; 
 
    case "/new-post":
      Component = Postblog;
      break;
  }

  return (
  <>
  <SiteNav/>
  <Component/>
  </>
  );
}

export default App;
