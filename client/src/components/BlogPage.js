import React, {useState, useEffect} from 'react'
import BlogSearch from './BlogSearch'
import BlogList from './BlogList'
import 'bootstrap/dist/css/bootstrap.min.css'

function BlogPage() {
const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/blog_posts")
        .then(r => r.json())
        .then(setBlogs)
    },[])

console.log("blogs in BlogPage.js before bing passed to BlogList.js:", blogs)

    function handleAddBlog(newBlog) {
      // console.log(newBlog)
    }

  return (
    <main>
        <BlogSearch/>
        <BlogList blogs={blogs} onAddBlogs={handleAddBlog}/>
    </main>
  )
}

export default BlogPage