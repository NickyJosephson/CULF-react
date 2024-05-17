import React, { useEffect, useState } from 'react';
import { NavLink, useLocation} from "react-router-dom"
import './NavBar.css'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navbar(){
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (    
      <div className='nav'>
          <NavLink to="/" className='nav-link'>CULF</NavLink>
          {/* <NavLink to="/items" className='nav-link' >Items</NavLink> */}
          <div className="dropdown">
            <button onClick={toggleDropdown} className="dropbtn">Lost Items</button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <NavLink onClick={toggleDropdown} to="/items/report" className='nav-link'>Report</NavLink>
                <NavLink onClick={toggleDropdown} to="/items/view" className='nav-link'>View</NavLink>
                <NavLink onClick={toggleDropdown} to="/items/claim" className='nav-link'>Claim</NavLink>
              </div>
            )}
          </div>
          <div class="nav-right"> 
            <NavLink to="/login" className='nav-link'>Login</NavLink>
            <NavLink to="/register" className='nav-link'>Register</NavLink>
          </div>
      </div>
  )
}