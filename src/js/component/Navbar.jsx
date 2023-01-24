import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";



const Navbar = () => {
	return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Star Bootstrap</a>
    
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Service</a>
        </li>

      </ul>
      <span className="navbar-text">
       Contact
      </span>
    </div>
  </div>
</nav>
	)
}

export { Navbar,Home };