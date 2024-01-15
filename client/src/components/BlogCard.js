import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Author from './Author';
import BlogPost from './BlogPost';

function BlogCard({ blog, users, filteredUsers }) {
  const { id, user_id, title, blog_content, publication_date } = blog;
  const [showPost, setShowPost] = useState(false);

  let contentArray = Array.isArray(blog_content) ? blog_content : [blog_content];

  console.log(users)

  const matchingUser = users.find((user) => {
    console.log("user.id inside matchingUser", user.id)
    console.log("blog.user inside matchingUser", blog.user_id)
    return user.id === blog.user_id;
  });

  // mathingUser is returning undefined because the find() method could not find user.id === blog.userId. 

  console.log("user_id", user_id)
  console.log("matchingUser", matchingUser)

  // Why isnt the author componernt beingrendered once for each bog VarDate, shoewing the author of each blog post? 

  function handleClick(e) {
    setShowPost((prevShowPost) => !prevShowPost);
  }

  return (
    <Card className="blogcard">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {matchingUser && (
          <Author
            key={matchingUser.id}
            username={matchingUser.username}
            blog_posts={matchingUser.blog_posts}
            comments={matchingUser.comments}
            bio={matchingUser.bio}
          />
        )}
        <Card.Text>Publication Date: {publication_date} </Card.Text>
        <Card.Text className="blogcontent">
  {showPost &&
    contentArray.map((blog_content, index) => (
      <div key={index}>
        <BlogPost key={index} blog_content={blog_content} />
      </div>
    ))}
</Card.Text>
        <Button
          variant="primary"
          className="postbutton"
          onClick={handleClick}
        >
          Read Post
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;