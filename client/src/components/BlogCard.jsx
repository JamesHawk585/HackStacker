import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BlogPost from './BlogPost';

function BlogCard({ blog, users }) {
    const {id, userId, title, blog_content, publication_date} = blog
    const {username, blog_posts, comments, bio, UserId} = users
    const [showPost, setShowPost] = useState(false)

    console.log('users inside BlogCard.jsx', users)

  let contentArray = Array.isArray(blog_content) ? blog_content : [blog_content];


  function handleClick(e) {
    setShowPost(prevShowPost => !showPost)
  }

  const findMatchingUser = users.find((user) => {
    if (user.id === userId) {
      const matchingUser = {username, blog_posts, comments, bio, UserId}
      return user
    }
  })

  // console.log('users inside BlogCard.jsx', matchingUser)

  return (
    <Card className="blogcard">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>Publication Date: {publication_date} </Card.Text>
      <Card.Text className="blogcontent">
        {showPost && 
            contentArray.map((blog_content, index) => (
              <BlogPost key={index} blog_content={blog_content} />
            ))}
      </Card.Text>
      <Card.Text>{`Author: ${findMatchingUser?.username}`}</Card.Text>

      <Button variant="primary" className="postbutton" onClick={handleClick}>Read Post</Button>
    </Card.Body>
  </Card>
  );
};



export default BlogCard