import React from 'react'
import BlogCard from './BlogCard'

function BlogList({ blogs }) {
  console.log("blogs before blogsList declaration:", blogs)
  console.log(blogs[0])

  // !!!Start Here!!!
  const bList = blogs.map(blog => (
  <BlogCard 
    key={blog.id} 
    blog={blog}
  />
  ))

console.log("blogs in BlogList.js after bList declaration:", bList)
  
  return <ul className="cards">{bList}</ul>
  
}

export default BlogList

