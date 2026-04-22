import React from 'react'
import { Link } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
      // for logo name and search bar
    <nav>
      <div className="logo">WriteUp</div>

      <div className="search-section">
        <div className="search-wrapper">
          <span className="search-icon">
            <IoSearchSharp />
          </span>
          <input
            type="text"
            placeholder="Search your notes..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onBlur={() => setSearchTerm("")}
          />
        </div>
      </div>
      {/* for navigation links */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar