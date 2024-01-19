import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BlogPost from './BlogPost';

function BlogCard({ blog, user }) {
  const {blogPostUserId, blogPostId, title, blog_content, publication_date} = blog
  const [showPost, setShowPost] = useState(false)
  let contentArray = Array.isArray(blog_content) ? blog_content : [blog_content];
  function handleClick(e) {
    setShowPost(prevShowPost => !showPost)
  }

  return (
    <Card className="blogcard">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>Publication Date: {publication_date} </Card.Text>
      <Card.Text id="authorName">{`Author: ${user ? user.username: 'Anonymous'}`}</Card.Text>
      <Card.Text className="blogcontent">
        {showPost && 
            contentArray.map((blog_content, index) => (
              <BlogPost key={index} blog_content={blog_content} />
            ))}
      </Card.Text>
      {/* <Card.Text>{`Author: ${user ? user.username: 'Anonymous'}`}</Card.Text> */}

      <Button variant="primary" className="postbutton" onClick={handleClick}>Read Post</Button>
    </Card.Body>
  </Card>
  );
};



export default BlogCard