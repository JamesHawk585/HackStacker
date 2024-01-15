import React from 'react'
import BlogCard from './BlogCard'

function BlogList({ blogs, users, filteredUsers }) {

  const authorList = users.map((author) => {
    return author.name
  })

  const bList = blogs.map(blog => (
  <BlogCard 
    key={blog.id} 
    blog={blog}
    users={users}
    filteredUsers={filteredUsers}
  />
  ))

  
  return <ul className="cards">{bList}</ul>
  
}

export default BlogList

