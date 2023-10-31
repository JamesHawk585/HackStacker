import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard({ blog }) {
    const {id, userId, title, blogContent, publication_date} = blog
    const [users, setUsers] = useState([])

    // fetch here?
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/users`)
    .then(r => r.json())
    .then(setUsers)
  },[])

  const {bio, comments, username} = users

  const authorList = users.map(user => (
    <Author key={crypto.randomUUID()} user={user}/>
  ))

  console.log(authorList)



  // console.log(users.username)

  // map() 

  // prints the specified username attribute of the users object for each card appended to the dom. 

  // Create a variable and set it equal to mapping through the 



  return (
    <Card className="blogcard">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
        <Card.Text>Author: {username}</Card.Text>
        <Card.Text>Publication Date: {publication_date} </Card.Text>
      <Button variant="primary" className="postbutton">Read Post</Button>
    </Card.Body>
  </Card>
  );
};



export default BlogCard