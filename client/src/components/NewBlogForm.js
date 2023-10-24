import React, { useState } from 'react'


// Refactor with Formik
// Form imput is controlled via state

const NewBlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    blogContent: ""
  })

  return (
    <div className="new-blog-form">
      <h2>New Post</h2>
        <form>
          <input 
            type="text" 
            title="title"
            value={formData.title} 
            placeholder="Blog Title"
          />
          <input 
            type="text" 
            blogContent="blogContent" 
            placeholder="Blog Content"
            value={formData.blogContent} 
          />
          <button type="submit">Post Blog</button>
        </form>
    </div>
  )
}

export default NewBlogForm