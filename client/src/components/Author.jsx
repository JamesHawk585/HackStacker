import React from 'react'


function Author({ username }) {
  console.log(username)
  return (
    <div>Author: {username}</div>
  )
}

export default Author 