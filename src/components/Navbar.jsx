import React from 'react';
import { Link } from "react-router-dom"

// export default function Navbar() {
//   return (
//     <nav className="nav">
//       <Link to="/" className="CULF">
//         CULF
//       </Link>
//       <Link to="/items" className="items">Items</Link>
//       <Link to="/map" className="map">Map</Link>
//       {/* <ul>
//         <CustomLink to="/items">Items</CustomLink>
//         <CustomLink to="/map">Map</CustomLink>
//       </ul> */}
//     </nav>
//   )
// }
export default function Navbar(){
  return (    
      <nav className='nav'>
          <div className='CULF'>
              <Link to="/">CULF</Link>
          </div>
          <div className='items'>
              <Link to="/items">Items</Link>
      </div>
          <div className='map'>
              <Link to="/map">Map</Link>
          </div>
      </nav>
  )
}

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }