import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/campus_cops_logo.webp";

function NavBar() {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Campus Cops Logo" className="logo" />
        <div className="site-title">
          Campus
          <br />
          Cops
        </div>
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/reportincident">Report Incident</NavLink>
        <NavLink to="/communitychatbox">Community Chat Forum</NavLink>
        <NavLink to="/safteyresources">Safety Resources</NavLink>
        {/* add User Account Sign In */}
      </div>
    </nav>
  );
}

export default NavBar;
