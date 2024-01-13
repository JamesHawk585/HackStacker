import React, {useState, useEffect} from 'react'
import BlogSearch from './BlogSearch'
import BlogList from './BlogList'
import 'bootstrap/dist/css/bootstrap.min.css'

// When Usestate relies on fetched data, Usestate must be initialized in the same component as the fetch request. 
// Controlled components are componenets whose stateful features are controlled by a state object in a parent component. 

function BlogPage() {
const [blogs, setBlogs] = useState([])
const [users, setUsers] = useState([])
const [searchTerm, setSearchTerm] = useState("")

useEffect(() => {
  fetch(`http://127.0.0.1:5555/users`)
  .then(r => r.json())
  .then(setUsers)
}, []);



  // 1. grab the user_id from blogs array of objects
  // 2. Make a fetch request to "/users" by user_id. Return the username associated with the user_id 
  // 3. pass username down to blog card. Append Author name to dom in blog card 

// user_id is passed to BlogList via the blogs 
// Create a fetch request in BlogList that will get the username from the users table and append the username to BlogCard.js
useEffect(() => {
    fetch("http://127.0.0.1:5555/blog_posts")
    .then(r => r.json())
    .then(setBlogs)
},[])

    const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
        <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <BlogList blogs={filteredBlogs} users={users}/>
    </main>
  )
}

export default BlogPage