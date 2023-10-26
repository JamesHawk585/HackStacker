import React from 'react'
import BlogCard from './BlogCard'

function BlogList({ blogs }) {

  const bList = blogs.map(blog => (
  <BlogCard 
    key={blog.id} 
    blog={blog}
  />
  ))

  
  return <ul className="cards">{bList}</ul>
  
}

export default BlogList

