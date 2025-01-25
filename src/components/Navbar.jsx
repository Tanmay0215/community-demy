import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex justify-between items-center p-5">
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div className="flex flex-wrap gap-8 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/feed">Feed</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  )
}

export default Navbar
