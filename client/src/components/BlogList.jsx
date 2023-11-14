import React from 'react'
import BlogCard from './BlogCard'

function BlogList({ blogs }) {

  // const blogAuthor = 

  // 1. grab the user_id from blogs array of objects
  // 2. Make a fetch request to "/users" by user_id. Retrun the username associated with the user_id 
  // 3. pass username down to blog card. Append Author name to dom in blog card 

  const bList = blogs.map(blog => (
  <BlogCard 
    key={blog.id} 
    blog={blog}
  />
  ))

  
  return <ul className="cards">{bList}</ul>
  
}

export default BlogList

