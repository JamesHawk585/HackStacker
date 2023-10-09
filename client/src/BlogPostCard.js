import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function BlogPostCard({ post }) {

  console.log('post:', post)

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
            <Card.Text>Author: {post.author}</Card.Text>
            <Card.Text>Publication Date: {post.publication_date} </Card.Text>
          <Button variant="primary">Read Post</Button>
        </Card.Body>
      </Card>
    );
  };

  export default BlogPostCard