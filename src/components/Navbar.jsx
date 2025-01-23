import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="flex justify-between items-center p-5">
        <div>Logo</div>
        <div className="flex gap-5">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    </div>
  )
}

export default Navbar
