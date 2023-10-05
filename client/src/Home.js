import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    fetch('/blog_posts')
      .then(r => r.json())
      .then((blogPosts) => {
        setBlogPosts(blogPosts);
      });
    }, []);


    // Issue may be with this code 
    const blogPostCards = blogPosts.map(post => (
      <BlogPostCard key={post.id} post={post}/>
    ));

    console.log(blogPostCards)

    return (
      <div>
        {blogPostCards}
      </div>
    );
  };


function BlogPostCard({ post }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
          <Card.Text>Author: {post.author}</Card.Text>
          <Card.Text>Publication Date: {post.date} </Card.Text>
        <Button variant="primary">Read Post</Button>
      </Card.Body>
    </Card>
  );
};


export default Home;

      // Use map to iterate through an array of blog posts and return an array of blog post cards.
    
    // fetch all blog posts 

    // Session is a cookie that must be ont he same domain for the cookie to work. 

    // Research proxies for blog topics. Both FE and BE must look like they are running on the same port. 
