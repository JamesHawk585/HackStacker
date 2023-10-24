import React from 'react'

const BlogSearch = () => {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Blog Posts</label>
      <input
        type="text"
        id="search"
        placeolder="Type to search..."
        onChange={(e) => console.log("Searching...")}
      />
      </div>
  )
}

export default BlogSearch