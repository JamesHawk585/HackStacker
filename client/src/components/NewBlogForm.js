import React from 'react'

// Refactor with Formik

const NewBlogForm = () => {
  return (
    <div classname="new-blog-form">
      <h2>NewBlogForm</h2>
        <form>
          <input type="text" title="title" placeholder="Blog Title"/>
          <input type="text" blog_content="blog_content" placeholder="Blog Content"/>
          <button type="submit">Post Blog</button>
        </form>
    </div>
  )
}

export default NewBlogForm