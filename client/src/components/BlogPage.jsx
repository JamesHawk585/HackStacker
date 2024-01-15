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
const [filteredUsers, setFilteredUsers] = useState(users);

useEffect(() => {
  fetch(`http://127.0.0.1:5000/users`)
  .then(r => r.json())
  .then(setUsers)
}, []);


const handleFilter = (event) => {
  const value = event.target.value;
  const filtered = users.filter(user => user.name.includes(value));
  setFilteredUsers(filtered);
};

useEffect(() => {
    fetch("http://127.0.0.1:5000/blog_posts")
    .then(r => r.json())
    .then(setBlogs)
},[])

    const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
        <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <BlogList blogs={filteredBlogs} users={users} filteredUsers={filteredUsers}/>
        
    </main>
  )
}

export default BlogPage