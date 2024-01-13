import React from 'react'
import BlogCard from './BlogCard'

function BlogList({ blogs, users }) {

  const {usernames, allUserBlogPosts, allUserComments, allUserBios, allUserIds} = users

  // const findMatchingUser = users.find((user) => {
  //   console.log('user.id: ', user.id)
  //   if (blog.user_id === user.id) {
  //     console.log(user)
  //     console.log('typeof userId', typeof(user.id))
  //     console.log('typeof blogPostUserId', typeof(blogPostUserId))
  //     return user
  //   } else {
  //   console.log('No match found')
  // }})

  // const { username, blog_posts, comments, bio, userId } = findMatchingUser || {};



  const bList = blogs.map(blog => {
    const matchingUser = users.find(user => user.id === blog.user_id);
    console.log('matchingUser: ', matchingUser)
    return (
      <BlogCard 
        key={blog.id} 
        blog={blog}
        user={matchingUser}
      />
    );
  });

  // After console.logging user.id and blog.id, it seems blog.id is returning the id of the blog post, not the id of the user that authored ther blog post. No blog.id should exceed 20, becuase we only have twenty users. Some authors will have more than one blog. 


  
  return <ul className="cards">{bList}</ul>
  
}

export default BlogList

