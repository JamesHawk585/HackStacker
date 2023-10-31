import React, {useState, useEffect} from 'react'
import BlogSearch from './BlogSearch'
import BlogList from './BlogList'
import 'bootstrap/dist/css/bootstrap.min.css'

// When Usestate relies on fetched data, Usestate must be initialized in the same component as the fetch request. 
// Controlled components are componenets whose stateful features are controlled by a state object in a parent component. 

function BlogPage() {
const [blogs, setBlogs] = useState([])
const [searchTerm, setSearchTerm] = useState("")

// The Search.js componenet needs access to search and setSearch. 



// user_id is passed to BlogList via the blogs 
// Create a fetch request in BlogList that will get the username from the users table and append the username to BlogCard.js
    useEffect(() => {
        fetch("http://127.0.0.1:5000/blog_posts")
        .then(r => r.json())
        .then(setBlogs)
    },[])

    const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
        <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <BlogList blogs={filteredBlogs}/>
    </main>
  )
}

export default BlogPage