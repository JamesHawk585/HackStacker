import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard({ blog }) {
    const {id, author, title, blogContent} = blog


  return (
    <Card className="blogcard">
    <Card.Body>
      <Card.Title>{blog.title}</Card.Title>
        <Card.Text>Author: {blog.user_id}</Card.Text>
        <Card.Text>Publication Date: {blog.publication_date} </Card.Text>
      <Button variant="primary">Read Post</Button>
    </Card.Body>
  </Card>
  );
};



export default BlogCard