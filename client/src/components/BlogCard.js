import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Author from './Author'
import BlogSearch from './BlogSearch';
import BlogPost from './BlogPost'

function BlogCard({ blog }) {
    const {id, userId, title, blog_content, publication_date} = blog
    const [users, setUsers] = useState([])
    const [showPost, setShowPost] = useState(false)

    // console.log(blog_content)

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/users`)
    .then(r => r.json())
    .then(setUsers)
  },[])

  let contentArray = Array.isArray(blog_content) ? blog_content : [blog_content];

  console.log(typeof(contentArray))

  const matchingUsers = users.filter(user => user.id === userId);

  // For each of my 53 blog posts, I am getting a list of twenty user objects. 

  // Add an event listener that renders the blog content to the blog card if the read post button is clicked. 

  function handleClick(e) {
    setShowPost(prevShowPost => !showPost)
  }


  return (
    <Card className="blogcard">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
          {matchingUsers.map((user) => (
            <Author
              key={user.id}
              username={users.username}
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