import React from 'react'
import BlogCard from './BlogCard'

function BlogList({ blogs }) {
  const blogList = blogs.map((blog) => <BlogCard key={blog.id} blog={blog}/>)
  console.log(blogList[1])

  return (
    <ul className="cards">{blogList}</ul>
  )
}

export default BlogList

