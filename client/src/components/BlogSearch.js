import React from 'react'

const BlogSearch = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Blog Posts</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeolder="Type to search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
  )
}

export default BlogSearch