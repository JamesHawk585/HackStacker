import React from 'react'
import BlogCard from './BlogCard'

function BlogList({ blogs, users }) {

//  For some reason, we are getting the array of twenty user objects appended to the dom when we console.log(users)

// The entire users array of objects is being logged tot he console every time a blog card is rendered in the blog list component. This mean each blog card has access to each user object. Simply filter the array of blog objects to return user.userId === blog.userId 

// Consider refactoring. Fetching all users for each blog card rendered will be constly at scale. 

  const authorList = users.map((author) => {
    return author.name
  })

  const bList = blogs.map(blog => (
  <BlogCard 
    key={blog.id} 
    blog={blog}
    users={users}
  />
  ))

  
  return <ul className="cards">{bList}</ul>
  
}

export default BlogList

