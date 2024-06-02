import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/campus_cops_logo.webp';

function NavBar() {
  return (
    <nav>
      <img src={logo} alt="Campus Cops Logo" className="logo" />
      <Link to={"/"}>Home</Link>
      <Link to={"/reportincident"}>Report Incident</Link>
      <Link to={"/communitychatbox"}>Community Chat Forum</Link>
      <Link to={"/safteyresources"}>Safety Resources</Link>
    </nav>
  );
}

export default NavBar;
