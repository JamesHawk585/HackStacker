import React from 'react'
import BlogCard from './BlogCard'

function BlogList({ blogs }) {
console.log(blogs)
  const blogList = blogs.map((blog) => <BlogCard key={blog.id} blog={blog}/>)
  console.log(blogList)

  return (
    <ul className="cards">{blogList}</ul>
  )
}

export default BlogList

