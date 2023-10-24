import React from 'react'
import Header from "./Header"
import BlogPage from './BlogPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } 
  from "react-router-dom";
  import Profile from "./Profile";
  import NewBlogForm from "./NewBlogForm"

const App = () => {
    return (
        <>
            <Header/>
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
                            <Link to="/NewBlogForm">NewBlogForm</Link>
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
        </>
    )
}

export default App