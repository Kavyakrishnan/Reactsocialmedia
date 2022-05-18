import React from 'react'
import { Link } from 'react-router-dom'

const Headrer = () => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Socialmedia</a>
      
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link className="nav-item" to="/">Addpost</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-item" to="/spost">Searchpost</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-item" to="/view">View</Link>
          </li>
          <li className="nav-item">
         
          </li>
          <li className="nav-item dropdown">
          
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Headrer