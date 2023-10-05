import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import BlogPostCard from './BlogPostCard';
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

    const blogPostCards = blogPosts.map(post => (
        <BlogPostCard key={post.id} post={post}/>
      )); 

    return (
      <div>
        {/* <BlogPostCard/> */}
        {blogPostCards}
      </div>
    );
  };



export default Home;


    // Session is a cookie that must be ont he same domain for the cookie to work. 

    // Research proxies for blog topics. Both FE and BE must look like they are running on the same port. 
