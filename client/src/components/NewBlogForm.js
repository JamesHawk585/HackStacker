import React, { useState } from 'react'


// Refactor with Formik
// Form imput is controlled via state

const NewBlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    blogcontent: ""
  })

  // Always pass the event into an event handler.
  // Spread operator makes a shallow copy of an array in its current form.
  function handleChange(e) {
    if (e.target.name === 'title') {
      setFormData({...formData, title: e.target.value});
    } else {
    if (e.target.name === 'blogcontent') {
      setFormData({...formData, blogcontent: e.target.value})
      }
    }
  }


  
  
  
  console.log(formData)
  return (
    <div className="new-blog-form">
      <h2>New Post</h2>
        <form>
          <input 
            type="text" 
            name="title"
            value={formData.title} 
            placeholder="Blog Title"
            onChange={handleChange}
            />
          <input 
            type="text" 
            name="blogcontent" 
            placeholder="Blog Content"
            value={formData.blogcontent}
            onChange={handleChange} 
          />
          <button type="submit">Post Blog</button>
        </form>
    </div>
  )
}

export default NewBlogForm