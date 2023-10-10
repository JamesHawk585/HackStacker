//  rafce

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} 
from "react-router-dom";
import NavBar from "./NavBar"; 
import Profile from "./Profile";
import PostBlog from "./PostBlog"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/check_session')
    .then(response => {
      if (response.ok) {
        response.json().then(user => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('./cookies')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log(document.cookie)
    })
  }, []);

  if (!user) return <Home onLogin={setUser} />;

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
            <Link to="/PostBlog">New Post</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/PostBlog">
            <PostBlog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
  export default App;
