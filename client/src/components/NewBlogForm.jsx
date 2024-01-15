import React, { useState } from 'react'


function NewBlogForm({ onAddBlog }) {
  const [formData, setFormData] = useState({
    title: "",
    blog_content: ""
  })

  function handleChange(e) {
    if (e.target.name === 'title') {
      setFormData({...formData, title: e.target.value});
    } else {
    if (e.target.name === 'blog_content') {
      setFormData({...formData, blog_content: e.target.value})
      }
    }
  }

  


  function handleSubmit(e) {
    e.preventDefault()

    const configObj = {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    }

    fetch("http://127.0.0.1:5555/blog_posts", configObj)
    .then(r => r.json())
    .then(console.log)
  }


  console.log("formData:", formData)
  return (
    <div className="new-blog-form">
      <h2>New Post</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="title"
            value={formData.title} 
            placeholder="Blog Title"
            onChange={handleChange}
            />
          <input 
            type="text" 
            name="blog_content" 
            placeholder="Blog Content"
            value={formData.blog_content}
            onChange={handleChange} 
          />
          <button type="submit">Post Blog</button>
        </form>
    </div>
  )
}

export default NewBlogForm