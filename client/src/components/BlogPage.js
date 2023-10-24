import React, {useState, useEffect} from 'react'
import BlogSearch from './BlogSearch'
import BlogList from './BlogList'

function BlogPage() {
const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/blog_posts")
        .then(r => r.json())
        .then(console.log)
    },[])

  return (
    <main>
        <BlogSearch/>
        <BlogList/>
    </main>
  )
}

export default BlogPage