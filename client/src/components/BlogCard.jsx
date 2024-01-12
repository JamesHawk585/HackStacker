import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Author from './Author';
import BlogSearch from './BlogSearch';
import BlogPost from './BlogPost';

function BlogCard({ blog, users }) {
    const {id, userId, title, blog_content, publication_date} = blog
    const {username, blog_posts, comments, bio} = users
    const [showPost, setShowPost] = useState(false)

    console.log(users)

  let contentArray = Array.isArray(blog_content) ? blog_content : [blog_content];

  const matchingUsers = users.filter((user) => {
    return user.id === userId
  });

  console.log(matchingUsers)

  function handleClick(e) {
    setShowPost(prevShowPost => !showPost)
  }

  // The issue seems to be with the way we are creating a new Author component for every 

  return (
    <Card className="blogcard">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
          {users.map((user) => (
            <Author
              key={user.id}
              username={user.username}
            />
          ))}
      <Card.Text>Publication Date: {publication_date} </Card.Text>
      <Card.Text className="blogcontent">
        {showPost && 
            contentArray.map((blog_content, index) => (
              <BlogPost key={index} blog_content={blog_content} />
            ))}
      </Card.Text>

      <Button variant="primary" className="postbutton" onClick={handleClick}>Read Post</Button>
    </Card.Body>
  </Card>
  );
};



export default BlogCard