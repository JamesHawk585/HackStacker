import React from 'react'
import BlogPage from './BlogPage'
import Profile from "./Profile";
import NewBlogForm from "./NewBlogForm"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const NavBar = () => {
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
                            <Link to="/NewBlogForm">Post</Link>
                        </li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path="/">
                            <BlogPage />
                        </Route>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/NewBlogForm">
                            <NewBlogForm />
                        </Route>
                    </Switch>
                </div>
            </Router>
  )
}

export default NavBar