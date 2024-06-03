import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/campus_cops_logo.webp";

function NavBar() {
  return (
    <header>
      <img src={logo} alt="Campus Cops Logo" className="logo" />
      <nav>
        <br />
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/reportincident"}>Report Incident</NavLink>
        <NavLink to={"/communitychatbox"}>Community Chat Forum</NavLink>
        <NavLink to={"/safteyresources"}>Safety Resources</NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
