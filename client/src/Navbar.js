//  rafce

import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav'>
    <a href='/' className='site-title'>HackStacker</a>
    <div>Navbar</div>
    <ul> 
        <li><a href='/home'>Home</a></li>
        <li><a href='/userprofile'>Profile</a></li>
        <li><a href='newpost'>New Post</a></li>
    </ul>
    </nav>
  )
}

export default Navbar