import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/campus_cops_logo.webp";

function NavBar() {
  return (
    <nav>
        <div className="logo-container">
          <img src={logo} alt="Campus Cops Logo" className="logo" />
          <div className="site-title">
            Campus<br />Cops
          </div>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/reportincident">Report Incident</Link>
          <Link to="/communitychatbox">Community Chat Forum</Link>
          <Link to="/safteyresources">Safety Resources</Link>
          {/* add User Account Sign In */}
        </div>
      </nav>
  );
}

export default NavBar;
